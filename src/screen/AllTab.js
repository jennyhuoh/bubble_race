import React, {useState, useEffect, useRef, useContext} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TabBarIOS } from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Platform, AsyncStorage} from "react-native";
import {SplashScreen} from 'expo';

import SolveProblemStackscreen from './SolveProblemStackscreen';
import ListStackscreen from './ListStackscreen';
import FriendStackscreen from './FriendStackscreen';
import AccountStackscreen from './AccountStackscreen';
import { StoreContext } from '../stores/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const PERSISTENCE_KEY = "BUBBLES_NAVIGATION_STATE";

const AllTab = ({navigation}) => {
    const {isLoginState} = useContext(StoreContext);
    const [isLogin, setIsLogin] = isLoginState;
  const [isloadingComplete, setLoadingComplete] = useState(false);
  const [initialNavigationState, setInitialNavigationState] = useState();
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch(e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isloadingComplete) {
    return null;
  } else {
    return (
    <NavigationContainer
    // initialState = {initialNavigationState}
    independent={true}
    // onStateChange = {(state) =>
      // AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))}
      >
      <Tab.Navigator
        tabBarOptions = {{
          activeTintColor: '#269C9B',
          inactiveTintColor: '#676767',
         
        }}
        >
      <Tab.Screen name = "SolveProblem"
        component = {SolveProblemStackscreen}
        options = {{
          title: "加入煩惱",
          tabBarIcon: ({focused}) => {
            if(focused) {
              return(
                <Image style = {styles.tabicon} source = {require('../img/btn_tabadd_pressed.png')}/>
              )}
            else {
              return(
                <Image style = {styles.tabicon} source = {require('../img/btn_tabadd_unpress.png')}/>
              )}
          }
        }}/>
        <Tab.Screen name = "List"
        component = {ListStackscreen}
        options = {{
          title: "事件管理",
          tabBarIcon: ({focused}) => {
            if(focused) {
              return(
                <Image style = {styles.tabicon} source = {require('../img/btn_tabmanage_pressed.png')}/>
              )}
            else {
              return(
                <Image style = {styles.tabicon} source = {require('../img/btn_tabmanage_unpress.png')}/>
              )}
          }
        }}/>
      <Tab.Screen name = "Friend"
        component = {FriendStackscreen}
        options = {{
          title: "朋友",
          tabBarIcon: ({focused}) => {
            if(focused) {
              return(
                <Image style = {styles.tabicon} source = {require('../img/btn_tabfriend_pressed.png')}/>
              )}
            else {
              return(
                <Image style = {styles.tabicon} source = {require('../img/btn_tabfriend_unpress.png')}/>
              )}
          }
        }}/>
      <Tab.Screen name = "Account"
        component = {AccountStackscreen}
        options = {{
          title: "帳號設定",
          tabBarIcon: ({focused}) => {
            if(focused) {
              return(
                <Image style = {styles.tabicon} source = {require('../img/btn_tabidmanage_pressed.png')}/>
              )}
            else {
              return(
                <Image style = {styles.tabicon} source = {require('../img/btn_tabidmanage_unpress.png')}/>
              )}
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
  }
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AllTab;