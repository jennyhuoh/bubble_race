import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

const Stackaccount = createStackNavigator();


const Account = () => {
    return(
        <View>
        <View style = {{backgroundColor: '#DEF1EF', height: 825, alignContent:'center', alignItems:'center'}}>
            <Image style = {{height: 250, width: 415}} source = {require('../img/img_bgphoto.png')}/> 
             {/*白色區域  */}
            <View style = {{width: 334, height: 455, backgroundColor: '#fff', shadowOffset: {width: 2, height: 3}, shadowColor: 'black', shadowOpacity: 0.3}}>
                <View style = {{flexDirection: 'row'}}>
                    <View>
                        <Image style = {{marginLeft: 15, marginTop: 20}} source = {require('../img/img_setting_pic.png')}/>
                    </View>
                    <View>
                        <Text style = {{color: '#269192', fontWeight: '500', fontSize: 18, marginTop: 45, marginLeft: 20}}>Sherry Yang</Text>
                    </View>
                </View>
                <View>
                <TouchableHighlight 
                    onPress = {()=>alert('隱藏分享的名單')}
                    underlayColor = '#B8CFE1'
                    style = {{marginTop: 25,}}>
                    <View style = {{flexDirection: 'row', paddingTop: 5, paddingBottom: 5, borderTopColor: 'rgba(0,0,0,0.2)', borderTopWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', borderBottomWidth: 0.5,}}>
                        <Image style = {{marginLeft: 4}} source = {require('../img/icon_setting_unvisible.png')}/>
                        <View><Text style = {{marginTop: 17, color: '#393939', fontSize:15, fontWeight:'500', marginLeft:5}}>隱藏分享的名單</Text></View>   
                        <Image style = {{marginLeft: 125}} source = {require('../img/btn_right.png')}/>
                    </View>
                </TouchableHighlight> 

                </View>
                <TouchableHighlight 
                    onPress = {()=>alert('儲存的事件')}
                    underlayColor = '#B8CFE1'>
                    <View style = {{flexDirection: 'row', paddingTop: 5, paddingBottom: 5,}}>
                        <Image style = {{marginLeft: 4}} source = {require('../img/icon_setting_saved.png')}/>
                        <View><Text style = {{marginTop: 17, color: '#393939', fontSize:15, fontWeight:'500', marginLeft:5}}>儲存的事件</Text></View>   
                        <Image style = {{marginLeft: 155}} source = {require('../img/btn_right.png')}/>
                    </View>
                </TouchableHighlight>  
                <TouchableHighlight 
                    onPress = {()=>alert('設定')}
                    underlayColor = '#B8CFE1'>
                    <View style = {{flexDirection: 'row', paddingTop: 5, paddingBottom: 5, borderTopColor: 'rgba(0,0,0,0.2)', borderTopWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', borderBottomWidth: 0.5,}}>
                        <Image style = {{marginLeft: 4}} source = {require('../img/icon_setting_set.png')}/>
                        <View><Text style = {{marginTop: 17, color: '#393939', fontSize:15, fontWeight:'500', marginLeft:5}}>設定</Text></View>   
                        <Image style = {{marginLeft: 200}} source = {require('../img/btn_right.png')}/>
                    </View>
                </TouchableHighlight>           
            </View>
            
        </View>
        <Image style = {{position:'absolute', marginTop:755, marginLeft:50}} source = {require('../img/img_list_bubble.png')}/>
        <Image style = {{position:'absolute', marginTop:730, marginLeft:130, width:35, resizeMode:'contain'}} source = {require('../img/img_list_bubble.png')}/>
        <Image style = {{position:'absolute', marginTop:760, marginLeft:200, width:55, resizeMode:'contain'}} source = {require('../img/img_list_bubble.png')}/>
        <Image style = {{position:'absolute', marginTop:745, marginLeft:270, width:35, resizeMode:'contain'}} source = {require('../img/img_list_bubble.png')}/>
        <Image style = {{position:'absolute', marginTop:720, marginLeft:340, width:25, resizeMode:'contain'}} source = {require('../img/img_list_bubble.png')}/>
        </View>
    );
}

export default Account;