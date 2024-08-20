import React from 'react';
import {View, TextInput, Button, Text, StyleSheet, Alert, KeyboardAvoidingView,ScrollView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {registerRequest} from '../../../Redux/Actions';
import styles from './style';

const RegisterScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(
      registerRequest({
        email: data.email,
        username: data.username,
        password: data.password,
        name: {
          firstname: data.firstname,
          lastname: data.lastname,
        },
        phone: data.phone,
      }),
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
     <ScrollView contentContainerStyle={styles.scrollViewContent} >
        <View style={styles.header}>
        <Text style={styles.AppTitle}>SHOPPING</Text>
        </View>
      <View style={styles.backButton}>
        <Button title="GERİ" onPress={() => navigation.goBack()} color={'#333333'}  />
      </View>
      <Controller
        control={control}
        name="email"
        rules={{required: 'Email gerekli'}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
          />
        )}
      />
      {errors.email && (
        <Text style={styles.errorText}>{errors.email.message}</Text>
      )}

      <Controller
        control={control}
        name="username"
        rules={{required: 'Kullanıcı adı gerekli'}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="Kullanıcı Adı"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.username && (
        <Text style={styles.errorText}>{errors.username.message}</Text>
      )}

      <Controller
        control={control}
        name="password"
        rules={{required: 'Şifre gerekli'}}
        render={({field: {onChange, onBlur, value}}) => (
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
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}

      <Controller
        control={control}
        name="firstname"
        rules={{required: 'Ad gerekli'}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="Ad"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.firstname && (
        <Text style={styles.errorText}>{errors.firstname.message}</Text>
      )}

      <Controller
        control={control}
        name="lastname"
        rules={{required: 'Soyad gerekli'}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="Soyad"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.lastname && (
        <Text style={styles.errorText}>{errors.lastname.message}</Text>
      )}

      <Controller
        control={control}
        name="phone"
        rules={{required: 'Telefon numarası gerekli'}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="Telefon Numarası"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="phone-pad"
          />
        )}
      />
      {errors.phone && (
        <Text style={styles.errorText}>{errors.phone.message}</Text>
      )}

      <Button title="Kayıt Ol" onPress={handleSubmit(onSubmit)} color={'#333333'}/>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
