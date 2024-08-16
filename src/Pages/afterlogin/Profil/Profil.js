import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import styles from './style';

const Profil = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <Button title="GERİ" onPress={() => navigation.goBack()} color={'#333333'}
        />
      </View>
      <Text style={styles.title}>Profilim 🪪</Text>
    </View>
  );
};

export default Profil;
