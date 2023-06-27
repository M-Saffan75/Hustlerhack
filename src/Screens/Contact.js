import React from 'react'
import back from '../images/back.png'
import { COLOURS } from '../Components/ThemeColours'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Logo_Here from './Logo_Here';
import Small_Logo from './Small_Logo';
import Linking_Here from './Linking_Here';

const Contact = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor={'#a6e5b7'} barStyle={'dark-content'} />

            <View style={styles.container}>
                <ImageBackground source={back} style={styles.img_back}>

                    <View style={{ justifyContent: 'space-between', height: '100%' }}>
                        <View>
                            <View style={styles.nav_notifi}>
                                <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                    <FontAwesome5 name='arrow-left' style={styles.icon_name} />
                                </TouchableOpacity>
                                <Text style={styles.categories}>Contact us</Text>
                                <Text style={{ color: '#a6e5b7' }}>Profilehere</Text>
                            </View>

                            <View>
                                <Text style={{ borderBottomColor: COLOURS.skinColor, borderWidth: .2, height: 1, marginBottom: 40, }}></Text>
                            </View>

                            <View style={{ alignItems: 'center' }}>
                                <Small_Logo />
                            </View>
                            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                                <Text style={styles.online}>Online Service</Text>
                                <Text style={styles.Email}>Email : <Text style={styles.email_here}>support@hustlerfundhack.com</Text></Text>
                                <Text style={styles.hrse}>Service Time : 24hrs</Text>
                            </View>
                        </View>
                        <View style={{ bottom: '10%' }}>
                            <Linking_Here />
                        </View>
                    </View>

                </ImageBackground>
            </View>
        </>
    )
}

export default Contact

const styles = StyleSheet.create({

    text_co: {
        top: -10,
        textAlign: 'center',
        color: COLOURS.darkgreen,
        fontFamily: 'Roboto-Medium',
    },

    hrse: {
        fontSize: 16,
        color: COLOURS.black,
        marginVertical: 5,
        fontFamily: 'Roboto-Medium',
    },

    Email: {
        fontSize: 16,
        color: COLOURS.black,
        marginVertical: 5,
        fontFamily: 'Roboto-Medium',
    },

    online: {
        fontSize: 16,
        fontSize: 16,
        color: COLOURS.black,
        marginVertical: 5,
        fontFamily: 'Roboto-Medium',
    },

    container: {
        height: '100%',
        width: '100%',
        backgroundColor: COLOURS.white,
    },

    nav_notifi: {
        height: 80,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#a6e5b7',
        justifyContent: 'space-between',
    },

    btn_align: {
        marginHorizontal: 20,
        alignSelf: 'flex-start',
    },

    categories: {
        // left: 15,
        fontSize: 16,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
    },

    icon_name: {
        fontSize: 26,
        marginTop: 27,
        borderRadius: 7,
        textAlign: 'center',
        color: COLOURS.black,
        paddingHorizontal: 16,
    },
    img_back: {
        height: '100%',
        width: '100%',
    },
})