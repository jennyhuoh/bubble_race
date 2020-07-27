import React, { useState, useContext } from "react";
import * as firebase from "firebase";
import { View, StyleSheet, ActivityIndicator, Image } from "react-native";
import { Button, Text } from "react-native-elements";
import Input from "../components/Input";
import Confirm from "../components/Confirm";
import { StoreContext } from "../stores";

// Make a component
const LoginScreen = ({ navigation }) => {
  const { isLoginState } = useContext(StoreContext);
  const [isLogin, setIsLogin] = isLoginState;
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onSignIn = async () => {
    setError(" ");
    setLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      setError("");
      setIsLogin(true);   
    } catch (err) {
      setShowModal(true);
      setLoading(false);
    }
  };

  const onCreateUser = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      setShowModal(false);
      setError("");
      setEmail("");
      setPassword("");
      setLoading(false);
      setIsLogin(true);
    } catch (err) {
      setShowModal(false);
      setError(err.message);
      setEmail("");
      setPassword("");
      setLoading(false);
    }
  };

  const onCLoseModal = () => {
    setShowModal(false);
    setError("");
    setEmail("");
    setPassword("");
    setLoading(false);
  };

  const renderButton = () => {
    return loading ? (
      <ActivityIndicator size="large" style={{ marginTop: 30 }} />
    ) : (
      <View style={{backgroundColor: "#71B7CC", width:280, height:50, marginTop:60, borderRadius:20}}>
        <Button
        title="登入"
        buttonStyle={{ backgroundColor: "#71B7CC" }}
        containerStyle={{paddingTop:6, borderRadius:20}}
        onPress={onSignIn}
      />
      </View>
    );
  };
  
  return (
    <View style={{backgroundColor: '#E0F3F1', justifyContent:'center', alignContent:'center', alignItems:'center', height:900}}>
        <Image source={require('../img/img_login_bubble.png')}/>
        <Text style={{color:'#317AA8', fontSize:20, marginTop:20}}>解憂泡泡</Text>
      <View>
        <View style={{width:220, height:50, backgroundColor:'#fff', borderRadius:13, marginTop:70, flexDirection:'row'}}>
          <Image source={require('../img/icon_login_account.png')} style={{marginTop:10, paddingLeft:60, resizeMode:'contain'}} />
         <Input
          placeholder="帳戶"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(email) => setEmail(email)}
          containerStyle={{backgroundColor:'#fff', borderRadius:13}}
        /> 
        </View>
        
        <View style={{width:220, height:50, backgroundColor:'#fff', borderRadius:13, marginTop:25,flexDirection:'row'}}>
          <Image source={require('../img/icon_login_password.png')} style={{marginTop:10, paddingLeft:60, resizeMode:'contain'}} />
        <Input
          placeholder="密碼"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={(password) => setPassword(password)}
          containerStyle={{backgroundColor:'#fff', borderRadius:13}}
        />
        </View>
        {renderButton()}
        <Text style={{ padding: 10, fontSize: 16, color: "red" }}>{error}</Text>
      </View>
      <Confirm
        title="Are you sure to create a new user?"
        visible={showModal}
        onAccept={onCreateUser}
        onDecline={onCLoseModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formStyle: {
    marginTop: 80,
  },
});

export default LoginScreen;