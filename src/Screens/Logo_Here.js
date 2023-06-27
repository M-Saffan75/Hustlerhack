import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Logo_Here = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={{ justifyContent: 'center', alignItems: 'center', width: 270, height:50,}} resizeMode='contain' />
    </View>
  )
}

export default Logo_Here

const styles = StyleSheet.create({
    // container : {
    //     flex:1,
    //     backgroundColor:'#eee'
    // }
})