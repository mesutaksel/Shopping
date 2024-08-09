import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import { logoutRequest } from '../../../Redux/Actions';


const HomePage = ({navigation}) => {
  const dispatch =useDispatch();

  const handleLogout = () => {
    dispatch(logoutRequest());

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomePage</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomePage;