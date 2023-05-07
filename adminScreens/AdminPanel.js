import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, {useEffect} from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Avatar from '../components/Avatar';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth } from 'firebase/auth';


export default function AdminPanel() {
    const edges = useSafeAreaInsets();
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
    <View>
    <ScrollView>
        <View style={{
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: (edges.top + 65),
            paddingBottom: 25,
            alignItems: 'center'
        }}>
    <View style={{marginTop: '10%', justifyContent: 'flex-start', width: '100%'}}>
 
    </View>

    <View style={styles.profile}>
                <Avatar user={currentUser} size={80} />
                <Text style={styles.profileName}>{currentUser.displayName}</Text>
                <Text style={styles.profileEmail}>{currentUser.email}</Text>
        </View>
    <View style={styles.BookingContainer}>
        <Text style={styles.Heading}>
            Need to book? Visit our website
        </Text>
        <TouchableOpacity style={styles.Button} onPress={() =>navigation.navigate('con')}>
            <Text style={styles.ButtonText}>Visit</Text>
        </TouchableOpacity>
    </View>

        </View>
    </ScrollView>
</View>
  )
}

const styles = StyleSheet.create({
        BookingContainer:{
            width: '90%',
            height: 200,
            backgroundColor:'#3D7900',
            borderRadius: 20,
            alignItems: 'center',
            marginTop: '10%'
          },
          WorkoutImage:{
              width: '100%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
          },
          Heading:{
            color: '#FFBF00',
            fontSize: 19,
            fontWeight: 'bold',
            marginTop: 30,
            marginBottom: 30
          },
          Button:{
            width: 200,
            color:'#000',
            height: 52,
            backgroundColor: '#FFBF00',
            borderRadius: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        
          },
          ButtonText:{
            fontWeight: 'bold',
            fontSize: 18,
            color: '#3D7900'
          },
          profile:{
            padding: 16,
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#3D7900',
            width: '90%',
            marginBottom: 10,
            borderRadius: 20,
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
