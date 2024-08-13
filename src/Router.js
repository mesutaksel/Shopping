import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { useSelector } from 'react-redux';
import LoginScreen from './Pages/beforelogin/Login/login';
import RegisterScreen from './Pages/beforelogin/Register/Register';
import Card from './Pages/afterlogin/Card/Card';
import Profile from './Pages/afterlogin/Profil/Profil';
import HomePage from './Pages/afterlogin/HomePage/HomePage';
import { Provider } from 'react-redux'; 
import store from './Redux/Store';

const Stack = createStackNavigator();

const AuthStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);
const MainStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomePage" component={HomePage} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Card" component={Card} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  const user = useSelector(state => state.user);
  
  return (
    <NavigationContainer>
      {user  ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
