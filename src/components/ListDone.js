import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { apisAreAvailable } from 'expo';

const ListDone = () => {
    return(
        <View style = {styles.listallbg}>
            <View style = {styles.time}>
                <View style = {styles.timebg}><Text style = {styles.times}>2020/08/11 星期二</Text></View>

            </View>
                <Image style = {styles.eventbubble} source = {require('../img/img_eventbubble1.png')}/>

                <Image style = {styles.bubbleshadow} source = {require('../img/img_bubbleshadow.png')}/>

            <Image style = {styles.water} source = {require('../img/img_list_water.png')}/>
            <Image style = {styles.imgbubble1} source = {require('../img/img_list_bubble.png')}/>
            <Image style = {styles.imgbubble2} source = {require('../img/img_list_bubble.png')}/>
            <Image style = {styles.imgbubble3} source = {require('../img/img_list_bubble.png')}/>
            <Image style = {styles.imgbubble4} source = {require('../img/img_list_bubble.png')}/>
            <Image style = {styles.imgbubble5} source = {require('../img/img_list_bubble.png')}/>
            
            <Image style = {styles.imgnet} source = {require('../img/img_list_net.png')}/>
            <View style={{backgroundColor:'#64A3C7', position:'absolute', width: 415, height:85, marginTop:595}}></View>

        </View>
    );
}
const styles = StyleSheet.create({
    listallbg: {
        backgroundColor: '#E0F3F1',
        height: 600,
    },
    imgbubble1: {
        // resizeMode: 'contain',
        width: 15,
        height: 16,
        position: 'absolute',
        marginTop: 450,
        marginLeft: 240
    },
    imgbubble2: {
        // resizeMode: 'contain',
        width: 25,
        height: 26,
        position: 'absolute',
        marginTop: 439,
        marginLeft: 168
    },
    imgbubble3: {
        // resizeMode: 'contain',
        width: 30,
        height: 31,
        position: 'absolute',
        marginTop: 460,
        marginLeft: 130
    },
    imgbubble4: {
        // resizeMode: 'contain',
        width: 30,
        height: 31,
        position: 'absolute',
        marginTop: 466,
        marginLeft: 190
    },
    imgbubble5: {
        // resizeMode: 'contain',
        width: 23,
        height: 24,
        position: 'absolute',
        marginTop: 420,
        marginLeft: 210
    },
    imgnet: {
        resizeMode: 'contain',
        width: 290,
        height:80,
        position: 'absolute',
        marginTop: 500,
        marginLeft: 90
    },
    eventlist: {
        flexDirection: 'row',
        marginLeft: 28,
        marginTop: 16,
        justifyContent:'space-around'
    },
    eventlist2: {
        flexDirection: 'row',
        marginLeft: 28,
        paddingTop: 40,
        justifyContent:'space-around'
    },
    eventbubble: {
        resizeMode: 'contain',
        width:100,
        height:100,
        marginLeft:51,
        marginTop:16,
    },
    shadows: {
        flexDirection: 'row',
        marginLeft: 25,
        marginTop: 10,
        justifyContent:'space-around'
    },
    shadows2: {
        flexDirection: 'row',
        marginLeft: 25,
        paddingTop: 10,
        justifyContent:'space-around'
    },
    bubbleshadow: {
        marginLeft:73,
        marginTop:10,
    },
    // time: {
    //     flexDirection: 'row',
    //     marginLeft: 23,
    //     marginTop: 15,
    //     justifyContent:'space-around'
    // },
    // time2: {
    //     flexDirection: 'row',
    //     marginLeft: 23,
    //     marginTop: 15,
    //     justifyContent:'space-around'
    // },
    times: {
        width: 152,
        textAlign: 'center',
        paddingTop: 8,
        color: '#457289',
        fontWeight:'bold',
        fontSize:14,
    },
    timebg: {
        backgroundColor: 'white',
        width: 150,
        height: 35,
        borderRadius: 20,
        marginTop: 16,
        marginLeft: 7,

    },
    water: {
        position: 'absolute',
        resizeMode: 'contain',
        width:415,
        height:300,
        marginTop: 405,
        
    }
  });

export default ListDone;