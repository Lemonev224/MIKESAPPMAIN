import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'


export default function AdminAuthenticatior() {
    const navigation = useNavigation()
    const [code, setCode] = useState("")

    


  return(
    <View style={styles.mainView}>
    <View style={styles.TopView}>
      <Image source={require('../assets/Logo.jpeg')} style={styles.ImageStyle}/>
    </View>
    <View style={styles.BottomView}>
    <Text
      style={styles.Heading}
    >
      Enter Code
    </Text>
    <View style={styles.FormView}>
    <TextInput
        style={styles.TextInput}
        placeholder="Enter the admin code"
        value={code}
        onChangeText={setCode}
      />
      <TouchableOpacity
            style={styles.Button}
              onPress={() => {
                if(code === '123'){
                  navigation.navigate('adminPanel')
                }else{
                  alert('Wrong code please try again')
                  navigation.navigate('Home')
                }
              }}
      >
        <Text style={styles.ButtonText} >            
          Continue
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
