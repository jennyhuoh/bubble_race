import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Alert, Modal, TouchableHighlight, ImageBackground, KeyboardAvoidingView, Button} from 'react-native';
import {TouchableOpacity, TextInput, ScrollView} from 'react-native-gesture-handler';

const SolveProblem = () => {
const [text, setText] = useState('');
const [messages, setMessages] = useState([]);
const keyboardVerticalOffset = 660;

const dataa = [{message:text,from:'user'}]

// const dataa = [{message:'程設考不好',from:'user'},{message:'社團的事情',from:'user'},{message:'常遲到',from:'user'},{message:'沒有好好念',from:'user'},{message:'沒有確實吸收',from:'user'},
// {message:'把更多時間留給這個科目',from:'user'},{message:'提早看並且多看幾遍',from:'user'},{message:'程設考不好的可能原因?',from:'bot'},{message:'解決辦法?',from:'bot'}]

    return (
    <View style={{backgroundColor: '#E0F3F1'}}> 
        <ScrollView style={{height:575}}>       
            {/* 機器人臉與說話框 */}
            <View style={{flexDirection:'row', marginTop:26}}>
                <Image style={{resizeMode:'contain', width:50, height: 50, marginLeft:16}} source={require('../img/img_chatface.png')}/>
                <Image style = {{resizeMode:'contain', width:25, marginLeft:5}} source = {require('../img/img_chatboxline.png')} />
                <ImageBackground style={{width: 215, height:125, marginLeft:-6}} source={require('../img/img_chatbox.png')}>
                    <View style={{width: 200, paddingTop:16, paddingLeft:16}}>
                        <Text style={{lineHeight:21, fontSize: 14, color:'#393939'}}>哈囉！最近有哪些事情讓你煩惱呢?{"\n"}(以1.2.3. 標示條列才能讓我看懂喔！)</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style ={{marginTop:16}}>
                <View>
                    {
                    messages.map((message, i) => {
                        return(
                            <View>
                                <Text style={{backgroundColor:'#CEE5F7',width:180, height:85,paddingHorizontal:16, paddingVertical:10, marginLeft:175}} key={i}>{message}</Text>
                                <View style={{flexDirection:'row', marginTop:16, marginLeft:16}}>
                                    <Image source={require('../img/btn_event1.png')} />
                                    <Image style={{marginLeft:16}} source={require('../img/btn_plus.png')} />
                                </View>
                                <View style={{flexDirection:'row', marginTop:16}}>
                <Image style={{resizeMode:'contain', width:50, height: 50, marginLeft:16}} source={require('../img/img_chatface.png')}/>
                <Image style = {{resizeMode:'contain', width:25, marginLeft:5}} source = {require('../img/img_chatboxline.png')} />
                <ImageBackground style={{width: 220, height:100, marginLeft:-15}} source={require('../img/img_chatbox.png')}>
                    <View style={{width: 200, paddingTop:16, paddingLeft:26}}>
                        <Text style={{lineHeight:21, fontSize: 14, color:'#393939'}}>程設考不好 可能的原因?(以1. 2. 3. 標示條列才能讓我看懂喔!)</Text>
                    </View>
                </ImageBackground>
            </View>

                            </View> 
                        )})
                    }    
                </View>
            </View>
           
 {/* {           dataa.map(dataa => {
    if(dataa.message)
        return(
            <View style={{flexDirection:'row', marginTop:16}}>
                <Image style={{resizeMode:'contain', width:50, height: 50, marginLeft:16}} source={require('../img/img_chatface.png')}/>
                <Image style = {{resizeMode:'contain', width:25, marginLeft:5}} source = {require('../img/img_chatboxline.png')} />
                <ImageBackground style={{width: 215, height:125, marginLeft:-6}} source={require('../img/img_chatbox.png')}>
                    <View style={{width: 200, paddingTop:16, paddingLeft:16}}>
                        <Text style={{lineHeight:21, fontSize: 14, color:'#393939'}}>哈囉！</Text>
                    </View>
                </ImageBackground>
            </View>

        );

})} */}
        </ScrollView>
      
        <View>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
                <View style={{backgroundColor:'#E0F3F1', width:380, height: 65}}>
                <View style={{backgroundColor: '#fff', width:386.4, height:58, borderColor:'#378D8F', borderWidth:1,  borderRadius:30,marginTop:-15, marginLeft:16, flexDirection:'row', position:'absolute'}}>
                    <TextInput 
                        onChangeText={text => setText(text)}
                        value={text}
                        style={{width:286, height:48,fontSize:16, paddingTop: 16, paddingLeft:24,}}
                        placeholder='1. Say Something...'
                        multiline={true}
                        autoFocus={true}
                        clearTextOnFocus={true}
                        />                     
                    <TouchableOpacity
                        onPress={()=> {
                            setMessages([...messages, text]);
                            setText('');
                        }}>
                        <Image style={{marginTop:3,marginLeft:33}} source={require('../img/btn_send.png')}/>
                    </TouchableOpacity>
                </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    </View>

    );
}

export default SolveProblem;
