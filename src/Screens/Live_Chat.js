import React from 'react'
import WebView from 'react-native-webview'
import { COLOURS } from '../Components/ThemeColours'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const Live_Chat = () => {
  return (
    <>
      <StatusBar backgroundColor={COLOURS.light} barStyle={'dark-content'} />
      <View style={styles.container}>
        <WebView source={{ uri: 'https://tawk.to/chat/642828454247f20fefe93b85/1gsudqksa' }} />
      </View>
    </>
  )
}

export default Live_Chat

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%'
  },
})