import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Dimensions, Image, ScrollView, View, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as WebBrowser from 'expo-web-browser';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
    const navigation = useNavigation()

    const edges = useSafeAreaInsets();

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
            <View style={styles.BookingContainer}>
                <Text style={styles.Heading}>
                    Need to book? Visit our website
                </Text>
                <TouchableOpacity style={styles.Button} onPress={() => WebBrowser.openBrowserAsync('https://mikegouldsportstherapy.co.uk/online-booking/')}>
                    <Text style={styles.ButtonText}>Visit</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.TopExerciseContainer}>
                <Image style={styles.WorkoutImage} source={require('../assets/wrokout.jpg')}/>
            <View style={styles.BottomExerciseContainer}>
                <Text style={styles.Heading}>
                    Check out our Workout System!
                </Text>
                <TouchableOpacity style={styles.Button} onPress={() => navigation.toggleDrawer()}>
                    <Text style={styles.ButtonText}>Visit</Text>
                </TouchableOpacity>
            </View>
            </View>

            <View style={styles.TopExerciseContainer}>
                <Image style={styles.WorkoutImage} source={require('../assets/wrokout.jpg')}/>
            <View style={styles.BottomExerciseContainer}>
                <Text style={styles.Heading}>
                    Need to talk over chat?
                </Text>
                <TouchableOpacity style={styles.Button} onPress={() =>navigation.navigate('home')}>
                    <Text style={styles.ButtonText}>Visit</Text>
                </TouchableOpacity>
            </View>
            </View>

                </View>
            </ScrollView>
        </View>
    );
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
    TopExerciseContainer:{
        marginTop: 40,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    WorkoutImage:{
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    BottomExerciseContainer:{
        width: '100%',
        height: 200,
        backgroundColor:'#3D7900',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'center',
        
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


})