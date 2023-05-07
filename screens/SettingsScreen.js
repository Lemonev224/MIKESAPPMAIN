import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import Avatar from '../components/Avatar';
import { auth } from '../firebase';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import firebase from '../firebase';

export default function SettingsScreen() {
    const navigation = useNavigation();
    const { currentUser } = auth;
 
    signOutUser = async () => {
      try {
          await firebase.auth().signOut();
      } catch (e) {
          console.log(e);
      }
  }


  return (
<SafeAreaView style={{flex: 1, backgroundColor: '#fgfgfg'}}>
    <ScrollView contentContainerStyle={styles.container}>
    <View style={{justifyContent: 'flex-start', width: '100%'}}>
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Update your preferences</Text>
      </View>

            <View style={styles.profile}>
                <Avatar user={currentUser} size={80} />
                <Text style={styles.profileName}>{currentUser.displayName}</Text>
                <Text style={styles.profileEmail}>{currentUser.email}</Text>
            </View>



      <View style={styles.section}>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Help</Text>
        </View>

        <View style={styles.sectionBody}>
          <View style={styles.rowWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('bugScreen')}>
              <View style={styles.row}>
                <Text>Report a bug</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('adminAuthenticator')}>
              <View style={styles.row}>
                <Text>admin?</Text>
              </View>
            </TouchableOpacity>
          </View>

      </View>
      </View>

    </ScrollView>
</SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingVertical: 24,
  },
  header:{
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  title:{
    fontSize: 32,
    fontWeight: '700',
    color: '#3d3d3d',
  },
  subtitle:{
    fontSize: 15,
    fontWeight: '500',
    color: '#929292'
  },

profile:{
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3'
},
profileName:{
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#090909'
},
profileEmail:{
    marginTop: 6,
    fontSize: 15,
    fontWeight: 400,
    color: '#848484'
},
  section:{
    paddingTop: 32,
  },
  sectionHeader:{
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText:{
    fontSize: 14,
    fontWeight: 600,
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  rowWrapper:{
    paddingLeft: 24,
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
    backgroundColor: '#fff',
  },
  row:{
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
})