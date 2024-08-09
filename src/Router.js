import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import LoginScreen from './Pages/beforelogin/Login/login';
import RegisterScreen from './Pages/beforelogin/Register/Register';
import Card from './Pages/afterlogin/Card/Card';
import Profile from './Pages/afterlogin/Profil/Profil';
import HomePage from './Pages/afterlogin/HomePage/homepage';
import { Provider } from 'react-redux'; 
import store from './Redux/Store';

const Stack = createStackNavigator();

const AuthStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const MainStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomePage" component={HomePage} />
    <Stack.Screen name="Card" component={Card} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useSelector(state => state.user);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('userToken');
      setIsLoggedIn(!!token);
    };
    checkLoginStatus();
  }, []);

  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
