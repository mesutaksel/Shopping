import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL_AUTH } from '../../../config'; 

const LoginScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // API'ye giriş yapın
      const response = await axios.post(`${API_URL_AUTH}`, data);
      console.log("Login Response: ", response.data);

      if (response.data.token) {
        
        await AsyncStorage.setItem('userToken', response.data.token);
        // Navigasyon yığınını sıfırla ve HomePage'ye yönlendir
        navigation.reset({
          index: 0,
          routes: [{ name: 'HomePage' }],
        });
      } else {
        // If no token is returned, show an error message
        Alert.alert('Giriş Hatası', 'Kullanıcı adı veya şifre yanlış.');
      }
    } catch (error) {
      Alert.alert('Giriş Hatası', 'Kullanıcı adı veya şifre yanlış.');
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="username"
        rules={{ required: 'Kullanıcı adı zorunlu' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Kullanıcı Adı"
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

      <Button title="Giriş Yap" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
});

export default LoginScreen;