import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Keyboard } from 'react-native'
import React, {useState} from 'react'
import firebase from 'firebase/compat/app'
import { db } from '../firebase'
import { auth } from '../firebase';
import { collection, doc, addDoc } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';

export default function BugScreen() {
    const [bugReport, setBugReport] = useState("")
    const navigation = useNavigation()


    const saveData = async() => {
      const docRef = await addDoc(collection(db, "bugReports"), {
        bugReport
      });
      alert('Thank you for submitting an error we will fix it as soon as possible')
      navigation.navigate('Settings')
    }


  return(
    <View style={styles.mainView}>
    <View style={styles.TopView}>
      <Image source={require('../assets/Logo.jpeg')} style={styles.ImageStyle}/>
    </View>
    <View style={styles.BottomView}>
    <Text
      style={styles.Heading}
    >
      Report a bug
    </Text>
    <View style={styles.FormView}>
    <TextInput
        style={styles.TextInput}
        placeholder="Please tell us about the problem"
        numberOfLines={3}
        value={bugReport}
        onChangeText={setBugReport}
      />
      <TouchableOpacity
            style={styles.Button}
            onPress={() => saveData()}
      >
        <Text style={styles.ButtonText}>            
          Report
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  </View>
  )
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
      height:104,
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

