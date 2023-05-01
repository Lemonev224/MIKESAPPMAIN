import { View, Text, StyleSheet } from 'react-native'
import React, {useEffect} from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Avatar from '../components/Avatar'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'


export default function CustomDrawer(props) {

    const { currentUser } = auth;
  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
          setLoading(false);
          if(user){
            setCurrUser(user);
          }
        })
        return () => unsubscribe();
      }, [])
  
    return (
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props}>
        <View style={styles.container}>
            <View style={styles.profile}>
                <Avatar user={currentUser} size={80} />
                <Text style={styles.profileName}>{currentUser.displayName}</Text>
                <Text style={styles.profileEmail}>{currentUser.email}</Text>
            </View>
        </View>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{

        flex: 1,
        alignItems: 'center'
    },
    profile:{
        padding: 16,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#3D7900',
        borderRadius: 10,
        width: '95%',
        marginBottom: 10
    },
    profileName:{
        marginTop: 12,
        fontSize: 20,
        fontWeight: '600',
        color: '#FFBF00'
    },
    profileEmail:{
        marginTop: 6,
        fontSize: 15,
        fontWeight: 400,
        color: '#FFBF00'
    },
})