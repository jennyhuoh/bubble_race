import React, {useState, useEffect, useRef, useContext} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TabBarIOS } from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Platform, AsyncStorage} from "react-native";
import {SplashScreen} from 'expo';
import * as firebase from 'firebase';
import { StoreContext, StoreProvider } from "./src/stores";

import AllTab from './src/screen/AllTab';
import LoginScreen from './src/screen/LoginScreen';
const Stack = createStackNavigator();



const App = () => {
useEffect(() => {
const firebaseConfig = {
  apiKey: "AIzaSyDB-nAtePccJZ1cluNdqNCLsjZ4D42UM5Q",
  authDomain: "bubble-21ae1.firebaseapp.com",
  databaseURL: "https://bubble-21ae1.firebaseio.com",
  projectId: "bubble-21ae1",
  storageBucket: "bubble-21ae1.appspot.com",
  messagingSenderId: "88093770395",
  appId: "1:88093770395:web:0e86c14434630139d57c3e",
  measurementId: "G-1HWEHVTKXX"
};
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
}, []); 

    const { isLoginState } = useContext(StoreContext);
    const [ isLogin, setIsLogin ] = isLoginState;
    return isLogin?(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={AllTab}
            options={{
              header:() =>null
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    ):(
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            header:() =>null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
};