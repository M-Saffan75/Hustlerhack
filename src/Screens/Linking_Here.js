import React from 'react'
import { COLOURS } from '../Components/ThemeColours'
import { StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native'

const Linking_Here = () => {
    return (
        <View style={{backgroundColor:'rgba(0,0,0,0)'}}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.hustlerfundhack.com/ ')} activeOpacity={0.9}>
                <Text style={styles.text_co}>Powered by hustlerfundhack.co.ke</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Linking_Here

const styles = StyleSheet.create({
    text_co: {
        top: 60,
        textAlign: 'center',
        color: COLOURS.darkgreen,
        fontFamily: 'Roboto-Medium',
    },
})