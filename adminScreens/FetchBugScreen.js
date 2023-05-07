import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { auth, db } from '../firebase'
import firebase from "../config";
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { QuerySnapshot, onSnapshot } from 'firebase/firestore';
import { setBadgeCountAsync } from 'expo-notifications';
import { getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

export default function FetchBugScreen (){
  const [bugReport, setBugReport] = useState("")
 

  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "bugReports"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.data())

    });
  })

  return(
    <View atyle={styles.container}>
      <Text>eygfyu</Text>
    </View>
  )


}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})