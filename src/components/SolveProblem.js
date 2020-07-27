import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Alert, Modal, TouchableHighlight, ImageBackground, KeyboardAvoidingView, Button} from 'react-native';
import {TouchableOpacity, TextInput, ScrollView} from 'react-native-gesture-handler';

const SolveProblem = () => {
const [text, setText] = useState('');
const [messages, setMessages] = useState([]);
const [modalvisible, setModalvisible] = useState(false);
const keyboardVerticalOffset = 660;

const data=[ '程設考不好 可能的原因?','解決辦法有什麼呢?(若不止一項可以以1. 2. 3. 標示條列才能讓我看懂喔！)','','還有什麼事情讓你煩惱呢？'];
data[0]=messages[0]+' 可能讓你煩惱的原因？';
data[2]='可點擊下方關於'+messages[0]+' 的分析圖哦';

let a=0;

function Bubblesolved(){
    if(a===2) return(
        <View>
        <Modal
                transparent={true}
                visible={modalvisible}
                >
                <View style={{backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', width: 375,height: 815}}>
                    <View style={{backgroundColor: '#FAFAFA', width: 330, height: 400, marginLeft:22, marginTop:150}}>
                    {/* header */}
                        <View style={{backgroundColor:'#33918A', height:70, width: 330, flexDirection:'row'}}>
                            <View style={{marginTop:26, marginLeft:8}}>
                                <TouchableOpacity
                                    onPress = {() => {
                                        setModalvisible(!modalvisible)}}>
                                    <Image source={require('../img/btn_solveproblem_close.png')} />
                                </TouchableOpacity>
                            </View>
                                    <View style={{width:250}}><Text style={{color:'#fff', fontSize:18,  lineHeight:75, textAlign:'center'}}>{messages[0]}分析圖</Text></View>
                        </View>
                    {/* body */}
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        {/* 名稱 */}
                        <View style={{backgroundColor:'#D5EDF8', width:126, height:48, marginTop:37}}>
                            <Text style={{textAlign:'center', lineHeight:48, color:'#393939', fontSize:17}}>{messages[0]}</Text>
                        </View>
                        {/* 連接線 */}
                        {/* <View style={{flexDirection:'row'}}>
                            <View><Image source={require('../img/img_solveproblem_leftline.png')} /></View>
                            <View style={{width:50}}></View>
                            <View style={{marginTop:1.5}}><Image source={require('../img/img_solveproblem_rightline.png')} /></View>
                        </View> */}
                        <View style={{marginTop:4}}><Image source={require('../img/img_solveproblem_straight.png')}/></View>
                        {/* 2: 原因*/}
                        <View style={{backgroundColor:'#D5EDF8', width:126, height:48, marginTop:4}}>
                            <Text style={{textAlign:'center', lineHeight:48, color:'#393939', fontSize:17}}>{messages[1]}</Text>
                        </View>
                        <View style={{marginTop:4}}><Image source={require('../img/img_solveproblem_straight.png')}/></View>
                        {/* 2: 原因*/}
                        <View style={{backgroundColor:'#D5EDF8', width:126, height:48, marginTop:4}}>
                            <Text style={{textAlign:'center', lineHeight:48, color:'#393939', fontSize:17}}>{messages[2]}</Text>
                        </View>

                    </View>


                    </View>            
                </View> 
            </Modal>
        <TouchableOpacity onPress={() => setModalvisible(true)}>
            <ImageBackground source={require('../img/btn_solveproblem_bubble.png')} style={{width:100, height:100, marginTop:16, marginLeft:16}}>
                    <Text style={{color:'#fff', fontSize:14, textAlign:'center', lineHeight:100, width:100}}>{messages[0]}</Text>
            </ImageBackground>
        </TouchableOpacity>
        <View style={{flexDirection:'row', marginTop:16}}>
            <Image style={{resizeMode:'contain', width:50, height: 50, marginLeft:16}} source={require('../img/img_chatface.png')}/>
            <Image style = {{resizeMode:'contain', width:25, marginLeft:5}} source = {require('../img/img_chatboxline.png')} />
            <ImageBackground style={{width: 220, height:55, marginLeft:-15}} source={require('../img/img_chatbox.png')}>
                <View style={{width: 200, paddingTop:14, paddingLeft:26}}>
                    <Text style={{lineHeight:21, fontSize: 14, color:'#393939'}}>{data[3]}</Text>
                </View>
            </ImageBackground>
        </View>
        </View>
    )
    else return null;
}

    return (
    <View style={{backgroundColor: '#E0F3F1', height:640}}> 
 
        <ScrollView style={{height:575}}> 

            {/* 機器人臉與說話框 */}
            <View style={{flexDirection:'row', marginTop:26}}>
                <Image style={{resizeMode:'contain', width:50, height: 50, marginLeft:16}} source={require('../img/img_chatface.png')}/>
                <Image style = {{resizeMode:'contain', width:25, marginLeft:5}} source = {require('../img/img_chatboxline.png')} />
                <ImageBackground style={{width: 215, height:75, marginLeft:-12}} source={require('../img/img_chatbox.png')}>
                    <View style={{width: 200, paddingTop:16, paddingLeft:20}}>
    <Text style={{lineHeight:21, fontSize: 14, color:'#393939'}}>哈囉！最近有什麼事情讓你煩惱呢?</Text>
                    </View>
                </ImageBackground>
            </View>
  
            <View>
                {
                    messages.map((message, i) => {
                        a=i;
                        return(
                            <View style={{marginTop:16}}>
                                <Text style={{backgroundColor:'#CEE5F7',width:180, height:45,paddingHorizontal:16, paddingVertical:10, marginLeft:190}} key={i}>{message}</Text>
                                <View style={{flexDirection:'row', marginTop:16}}>
                                    <Image style={{resizeMode:'contain', width:50, height: 50, marginLeft:16}} source={require('../img/img_chatface.png')}/>
                                    <Image style = {{resizeMode:'contain', width:25, marginLeft:5}} source = {require('../img/img_chatboxline.png')} />
                                    <ImageBackground style={{width: 220, height:90, marginLeft:-15}} source={require('../img/img_chatbox.png')}>
                                        <View style={{width: 200, paddingTop:14, paddingLeft:26}}>
                                            <Text style={{lineHeight:21, fontSize: 14, color:'#393939'}} key={i}>{data[i]}</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </View> 
                        )})        
                } 
                <Bubblesolved />

            </View>
   

        </ScrollView>

        <View style={{alignContent:'center', alignItems:'center', justifyContent:'center', height:62}}>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
                <View style={{backgroundColor:'#E0F3F1', width:380, height:65}}>
                <View style={{backgroundColor: '#fff', width:342, height:58, borderColor:'#378D8F', borderWidth:1,  borderRadius:30, marginLeft:16, flexDirection:'row', position:'absolute'}}>
                    <TextInput 
                        onChangeText={text => setText(text)}
                        value={text}
                        style={{width:286, height:48,fontSize:16, paddingTop: 16, paddingLeft:24}}
                        placeholder='Say Something...'
                        multiline={true}
                        autoFocus={true}
                        clearTextOnFocus={true}
                        />                     
                    <TouchableOpacity
                        onPress={()=> {
                            setMessages([...messages, text]);
                            setText('');
                        }}>
                        <Image style={{marginTop:3, marginLeft:2}} source={require('../img/btn_send.png')}/>
                    </TouchableOpacity>
                </View>
                </View>
            </KeyboardAvoidingView>
        </View>
        <View style={{backgroundColor:'#E0F3F1', width:415, height:85, position:'absolute', marginTop:640}}>
            <View style={{backgroundColor:'#fff', width:380, height:75, marginLeft:16, marginTop:2}}>
                <Text style={{color:'#457289', fontSize:16, marginTop:16, marginLeft:16}}>小提示：</Text>
                <Text style={{color:'#457289', marginTop:12, fontSize:16, marginLeft:16}}>輸入煩惱事件，小幫手會協助你思考問題所在哦！</Text>
            </View>
        </View>
    </View>
    );
}

export default SolveProblem;
