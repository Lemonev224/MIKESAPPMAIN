import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SplashScreen from '../components/SplashScreen';
import Chats from '../screens/Chats';
import { Settings } from 'react-native';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet } from 'react-native';
import CustomTabBarButton from './CustomTabBarButton';

const Bottom = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Bottom.Navigator
        screenOptions={({route}) => ({
            tabBarInactiveTintColor: '#FFBF00',
            tabBarActiveTintColor: '#3D7900',
            tabBarIcon: ({color, size, focused}) => {

                let iconName;

                if (route.name === 'Home') {
                    iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
                  } else if (route.name === 'Settings') {
                    iconName = focused ? 'settings' : 'settings-outline';
                  } else if (route.name === 'chat') {
                    iconName = focused
                      ? 'chatbox-ellipses-outline'
                      : 'chatbox-ellipses-outline';
                  }

                return <Icon name={iconName} size={22} color={color} />
            }
        })}
    >
        <Bottom.Screen options={{
          headerShown: false,
         
        }} 
        name="Home" component={SplashScreen}/>

        <Bottom.Screen name="chat" component={Chats} />

        <Bottom.Screen options={{
          headerShown: false,
         
        }}  
        name="Settings" component={SettingsScreen} />
    </Bottom.Navigator>
  )
}
