import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CustomTabBarButton(props) {
    const { children, accessibilityState, onPress, route } = props;

    if (accessibilityState.selected) {
      return (
        <View style={styles.btnWrapper}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={[
                styles.svgGapFiller,
                {
                  borderTopLeftRadius: route === 'home' ? 10 : 0,
                },
              ]}
            />
            <View
              style={[
                styles.svgGapFiller,
                {
                  borderTopRightRadius: route === 'settings' ? 10 : 0,
                },
              ]}
            />
          </View>
  
          <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            style={[styles.activeBtn]}>
            <Text>{children}</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          style={[
            styles.inactiveBtn,
            {
              borderTopLeftRadius: route === 'home' ? 10 : 0,
              borderTopRightRadius: route === 'settings' ? 10 : 0,
            },
          ]}>
          <Text>{children}</Text>
        </TouchableOpacity>
      );
    }
  }

const styles = StyleSheet.create({
  btnWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  activeBtn: {
    flex: 1,
    position: 'absolute',
    top: -22,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
  inactiveBtn: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})