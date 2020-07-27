import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { apisAreAvailable } from 'expo';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ListAll from './ListAll';
import ListNotyet from './ListNotyet';
import ListDone from './ListDone';


const UpTab = createMaterialTopTabNavigator();


const List = () => {
    return(
        <UpTab.Navigator
            tabBarOptions = {{
                activeTintColor: '#236C66',
                inactiveTintColor: '#6A7575',
                labelStyle: {
                    fontSize: 16
                },
                indicatorStyle: {
                    backgroundColor: '#e0f3f1',
                    height: 50,
                    width: 132,
                    borderRadius: 7,
                    shadowOffset: {height: 1},
                    shadowColor: "black",
                    shadowOpacity: 0.2,
                },
            }}>
            <UpTab.Screen name = "所有"
                component = {ListAll}/>
            <UpTab.Screen name = "已解決"
                component = {ListDone}/>
            <UpTab.Screen name = "未解決"
                component = {ListNotyet}/>
        </UpTab.Navigator>
    );
}

export default List;