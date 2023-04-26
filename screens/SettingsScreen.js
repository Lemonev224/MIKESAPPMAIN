import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'

export default function SettingsScreen() {
    const navigation = useNavigation()
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>SettingsScreen</Text>
      <TouchableOpacity onPress={navigation.navigate('profileEditor')}>
        <Text>rgreg</Text>
      </TouchableOpacity>
    </View>
  )
}