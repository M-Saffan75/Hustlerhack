import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Small_Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={{ justifyContent: 'center', alignItems: 'center', width: 250, height:70,}} resizeMode='contain' />
    </View>
  )
}

export default Small_Logo

const styles = StyleSheet.create({
    // container : {
    //     flex:1,
    //     backgroundColor:'#eee'
    // }
})