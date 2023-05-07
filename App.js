import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { Settings, Text, View } from 'react-native';
import { useAssets} from 'expo-asset';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from './screens/SignIn';
import ContextWrapper from './context/ContextWrapper';
import Context from './context/Context';
import Profile from './screens/Profile';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chats from './screens/Chats'
import Photo from './screens/Photo'
import { Ionicons } from '@expo/vector-icons';
import Contacts from './screens/Contacts';
import Chat from './screens/Chat';
import ChatHeader from './components/ChatHeader';
import SplashScreen from './components/SplashScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';

import CustomDrawer from './navigators/CustomDrawer';
import SettingsScreen from './screens/SettingsScreen';
import BugScreen from './screens/BugScreen';
import 'react-native-gesture-handler';
import BottomTabNavigator from './navigators/BottomTabNavigator';
import AdminAuthenticatior from './adminScreens/AdminAuthenticatior';
import AdminPanel from './adminScreens/AdminPanel';
import FetchBugScreen from './adminScreens/FetchBugScreen';





const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Bottom = createBottomTabNavigator();


function App() {
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const {theme: {colors}} = useContext(Context)



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setLoading(false);
      if(user){
        setCurrUser(user);
      }
    })
    return () => unsubscribe();
  }, [])

  if (loading){
    return<Text>Loading...</Text>
  }

  return (
    <NavigationContainer>
      {!currUser ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="signIn" component={SignIn} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Home" >
          {!currUser.displayName && (
            <Stack.Screen
              name="profile"
              component={Profile}
              options={{ headerShown: false }}
            />
          )}
            <Stack.Screen
              name="Home"
              component={FetchBugScreen}
              options={{ headerShown: false }}
            />
          
          <Stack.Screen
            name="home"
            options={{ title: "Chats"}}
            component={Home}
            
          />
          <Stack.Screen
            name="contacts"
            options={{ title: "Select Contacts" }}
            component={Contacts}
          />
          <Stack.Screen name="chat" component={Chat} options={{headerTitle: (props) => <ChatHeader {...props}/>}}/>
          <Stack.Screen name="bugScreen" options={{headerShown: false}} component={BugScreen} />
          <Stack.Screen name="adminAuthenticator" options={{headerShown: false}} component={AdminAuthenticatior} />
          <Stack.Screen name="adminPanel" options={{headerShown: false}} component={SplashScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}


function Home() {
  const {
    theme: { colors },
  } = useContext(Context);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarLabel: () => {
            if (route.name === "photo") {
              return <Ionicons name="camera" size={20} color={'#FFBF00'} />;
            } else {
              return (
                <Text style={{ color: '#FFBF00' }}>
                  {route.name.toLocaleUpperCase()}
                </Text>
              );
            }
          },
          tabBarShowIcon: true,
          tabBarLabelStyle: {
            color: colors.white,
          },
          tabBarIndicatorStyle: {
            backgroundColor: colors.white,
          },
          tabBarStyle: {
            backgroundColor: '#3D7900',
          },
        };
      }}
      initialRouteName="chats"
    >
      <Tab.Screen name="photo" component={Photo} />
      <Tab.Screen name="chats" component={Chats} />
    </Tab.Navigator>
  );
}


function Main(){
  const [assets] = useAssets(
    require("./assets/icon-square.png"),
    require("./assets/chatbg.png"),
    require("./assets/user-icon.png"),
    require("./assets/welcome-img.png")
  );
  if(!assets){
    return <Text>Loading...</Text>;
  }
  return <ContextWrapper><App /></ContextWrapper>
}

export default Main
