import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { apisAreAvailable } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Friend = () => {
    return(
        
        <View style={styles.bg}>
           
            <View style={styles.friendbg}>
               <Image style = {styles.friendbubble} source = {require('../img/img_friend_pic3.png')}/>
               <Image style = {styles.friendbubble} source = {require('../img/img_friend_pic2.png')}/>
               <Image style = {styles.friendbubble} source = {require('../img/img_friend_pic1.png')}/>            
            </View>
            <View style ={styles.friendname}>
                <Text style = {styles.friend}>Tiffany Lai</Text>
                
                <Text style = {styles.friend1}>Vicky Ho</Text>
                <Text style = {styles.friend1}>Candy Kuan</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Text style = {styles.friend1_mes}>有 1 則未讀事件</Text>
                </TouchableOpacity>    
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    addfriend:{
          width:20,
          height:20,
    },
    bg: {
        backgroundColor: '#E0F3F1',
        height: 725,
        marginTop:0,
        flexDirection:'row'
    },
    friendbubble: {
        resizeMode: 'contain',
        width:80,
        height:80,
        marginTop:18,
        marginLeft:16,
    },
    friend:{
        color: '#2D7980',
        fontSize:16,
        marginTop: 50,
        fontSize:17,
        marginLeft:20
    },
    friend1_mes:{
        fontWeight:'bold',
        color:'#317AA8',
        marginTop:52,
        marginLeft:54
    },
    friend1:{
        color: '#2D7980',
        fontSize:16,
        marginLeft:20,
        marginTop:75
    },
    friend3:{
        color: '#269C9B',
        fontSize:17,
        position: 'absolute',
        paddingLeft:136,
        paddingTop:335,
    },
    chatbubble1:{
        resizeMode: 'contain',
        width:24,
        height:24,
        position: 'absolute',
        marginLeft:340,
        marginTop:65,
    },
    chatbubble2:{
        resizeMode: 'contain',
        width:24,
        height:24,
        position: 'absolute',
        marginLeft:340,
        marginTop:200,
    },
    chatbubble3:{
        resizeMode: 'contain',
        width:24,
        height:24,
        position: 'absolute',
        marginLeft:340,
        marginTop:335,
    },

  });

export default Friend;