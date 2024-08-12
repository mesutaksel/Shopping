import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert,TouchableOpacity} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../../Redux/Actions';
import { selectUser, selectError, selectLoading } from '../../../Redux/Selector';
import styles from './style';



const LoginScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const onSubmit = (data) => {
    dispatch(loginRequest(data));
  };

  React.useEffect(() => {
    if (user) {
      
    }
  }, [user, navigation]);

  React.useEffect(() => {
    if (error) {
      Alert.alert('Giriş Hatası', 'Kullanıcı adı veya şifre yanlış.');
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <Text style={styles.AppTitle}>SHOPPİNG</Text>
      <Controller
        control={control}
        name="username"
        rules={{ required: 'Kullanıcı adı gerekli'}}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Kullanici Adi"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}

      <Controller
        control={control}
        name="password"
        rules={{ required: 'Şifre gerekli' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Şifre"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      <Button title="Giriş Yap" onPress={handleSubmit(onSubmit)} color={'#333333'}/>
       {loading && <Text>Loading...</Text>}

       
      <View style={{flexDirection: 'row',marginTop:20}}>

        <Text style={{color:'black',fontSize:15}} > Hesabınız yok mu ?</Text>
        
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{marginLeft:10,color:'black', fontSize:15}} >
            Kayıt ol
          </Text>
        </TouchableOpacity>
      
      </View>       
    </View>
  );
};

export default LoginScreen;