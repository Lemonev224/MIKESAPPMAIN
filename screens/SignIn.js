import React, { useContext, useState } from "react";
import { View, Text, Image, TextInput, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Context from "../context/Context";
import { signIn, signUp } from "../firebase";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("signUp");
  const {
    theme: { colors },
  } = useContext(Context);

  async function handlePress() {
    if (mode === "signUp") {
      await signUp(email, password);
    }
    if (mode === "signIn") {
      await signIn(email, password);
    }
  }
  return (
    <View style={styles.mainView}>
      <View style={styles.TopView}>
        <Image source={require('../assets/Logo.jpeg')} style={styles.ImageStyle}/>
      </View>
      <View style={styles.BottomView}>
      <Text
        style={styles.Heading}
      >
        {mode === "signUp"
              ? "Welcome"
              : "Welcome Back"}
      </Text>
      <View style={styles.FormView}>
      <TextInput
          style={styles.TextInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}

        />
        <TextInput
                  style={
                    styles.TextInput
                  }
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity
              style={styles.Button}
              disabled={!password || !email}
              onPress={handlePress}
        >
          <Text style={styles.ButtonText}>            
            {mode === "signUp" ? "Sign Up" : "Sign in"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            mode === "signUp" ? setMode("signIn") : setMode("signUp")
          }
        >
          <Text style={styles.OtherText}>
            {mode === "signUp"
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  mainView:{
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TopView:{
    width: '100%',
    height: '40%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },
  ImageStyle:{
    width: '80%',
    resizeMode: 'contain'
  },
  BottomView:{
    width: '100%',
    height:'70%',
    backgroundColor:'#3D7900',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center'

  },
  Heading:{
    color: '#FFBF00',
    fontSize: 36,
    fontWeight: 'bold',
    marginLift: 15,
    marginTop: 30,
    marginBottom: 30
  },
  FormView:{
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  TextInput:{
    width: '90%',
    borderWidth: 1,
    borderColor: '#fff',
    height:52,
    borderRadius: 10,
    paddingLeft: 5,
    marginTop: 20,
    backgroundColor: '#fff'
  },
  Button:{
    width: 200,
    color:'#000',
    height: 52,
    backgroundColor: '#FFBF00',
    borderRadius: 10,
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },
  ButtonText:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#3D7900'
  },
  OtherText:{
    color: '#FFBF00',
    fontWeight: 'bold',
    marginTop: 20
  }
  


})
  
