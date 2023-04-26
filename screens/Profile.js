import { View, Text, TouchableOpacity, TextInput, Button, Image, StyleSheet } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants';
import GlobalContext from '../context/Context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { pickImage, askForPermission } from '../utils'
import { auth } from '../firebase'
import { uploadImage } from '../utils';
import { updateProfile } from 'firebase/auth';
import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigation } from "@react-navigation/native";



export default function Profile() {
    const [displayName, setDisplayName] = useState("")
    const [selectedImage, setSelectedImage] = useState(null)
    const [permissionStatus, setPermissionStatus] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
          const status = await askForPermission();
          setPermissionStatus(status);
        })();
      }, []);

    const {theme: {colors}} = useContext(GlobalContext)

    async function handlePress() {
      const user = auth.currentUser;
      let photoURL;
      if (selectedImage) {
        const { url } = await uploadImage(
          selectedImage,
          `images/${user.uid}`,
          "profilePicture"
        );
        photoURL = url;
      }
      const userData = {
        displayName,
        email: user.email,
      };
      if (photoURL) {
        userData.photoURL = photoURL;
      }
  
      await Promise.all([
        updateProfile(user, userData),
        setDoc(doc(db, "users", user.uid), { ...userData, uid: user.uid }),
      ]);
      navigation.navigate("home");
    }

    async function handleProfilePicture() {
        const result = await pickImage();
        if (!result.canceled) {
          setSelectedImage(result.assets[0].uri);
        }
      }

    if (!permissionStatus) {
        return <Text>Loading</Text>;
      }
    if (permissionStatus !== "granted") {
        return <Text>You need to allow this permission</Text>;
      }

  return (
    <React.Fragment>
        <View style={styles.TopView}>
          <View style={styles.TopContainer}>
        <Text style={styles.ProfileMainText}>
                Profile Info
            </Text>
            <Text style={styles.ProfileText}>
               provide your name and optional profile photo
            </Text>
            <TouchableOpacity
          onPress={handleProfilePicture}
          style={{
            marginTop: 30,
            borderRadius: 120,
            width: 120,
            height: 120,
            backgroundColor: colors.background,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!selectedImage ? (
            <MaterialCommunityIcons
              name="camera-plus"
              color={colors.iconGray}
              size={45}
            />
          ) : (
            <Image
              source={{ uri: selectedImage }}
              style={{ width: "100%", height: "100%", borderRadius: 120 }}
            />
          )}
        </TouchableOpacity>
        </View>
        </View>
        <View  style={styles.BottomView}>
        <StatusBar style="auto"/>
        <View style={{
            alignItems: "center", 
            justifyContent: "center", 
            flex: 1, 
            paddingTop:  Constants.statusBarHeight + 20,
            padding: 20,

    }}>
            <TextInput
          placeholder="Type your name"
          value={displayName}
          onChangeText={setDisplayName}
          style={styles.Input}
        />

            <TouchableOpacity
            style={styles.Button}         
            onPress={handlePress} 
            disabled={!displayName}>
              <Text style={styles.ButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
        </View>


    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  TopView:{
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  BottomView:{
    width: '100%',
    height:'50%',
    backgroundColor:'#3D7900',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center'
  },
  TopContainer:{
    marginTop:30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ProfileMainText:{
    color: '#FFBF00',
    fontSize: 20,
    fontWeight: 'bold',


  },
  ProfileText:{
    marginTop: 10,
    color: '#FFBF00',
    fontWeight: 'bold',
  },
  Input:{
    width: 250,
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
    alignItems: 'center',
    marginBottom: 300

  },
  ButtonText:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#3D7900'
  }
})