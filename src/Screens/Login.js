import React, { useState } from 'react'
import back from '../images/back.png'
import Small_Logo from './Small_Logo'
import { COLOURS } from '../Components/ThemeColours'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Linking_Here from './Linking_Here'

const Login = ({ navigation }) => {

    const [hide, setHide] = useState(true);

    return (
        <>
            <StatusBar backgroundColor={COLOURS.hex} barStyle={'light-content'} />

            <ImageBackground source={back} style={styles.img_back}>
                <ScrollView style={styles.container}>
                    <View style={styles.short_Container}>
                        <View style={styles.short_Container_here}>
                            <Small_Logo />
                            <View style={styles.login_here}>
                                {/* <Text style={styles.login}>Login</Text> */}
                            </View>

                            <View style={{ width: '100%' }}>
                                <View style={styles.number}>
                                    <Text style={styles.number_here}>Phone Number</Text>
                                </View>
                                <View style={styles.number_container}>
                                    <Text style={styles.number_code}>+254 (0)</Text>
                                    <TextInput placeholder='7xxxxxx' placeholderTextColor={'grey'} style={styles.inpt_here} keyboardType='number-pad' />
                                </View>
                                <View style={styles.pswd}>
                                    <Text style={styles.number_here}>Password</Text>
                                </View>
                                <View style={styles.number_container_pswd}>
                                    <TextInput keyboardType='password' placeholder='Your Password' secureTextEntry={hide ? true : false} placeholderTextColor={'grey'} style={styles.inpt_here_pswd} />
                                    <FontAwesome5 name={hide ? 'eye-slash' : 'eye'} onPress={() => setHide(!hide)} style={styles.icon_eye} />
                                </View>
                            </View>
                            <TouchableOpacity style={styles.ok} activeOpacity={0.9} onPress={() => navigation.navigate('Dashboard')}>
                                <FontAwesome5 name='arrow-right' style={styles.arrow_right} />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.frgt_psede_sign_up}>
                            <TouchableOpacity activeOpacity={0.9} style={styles.btn_frgt_pswd} onPress={() => navigation.navigate('forgot_Password')}>
                                <Text style={styles.frtg_here}>Forgot Password ?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.9} style={styles.btn_frgt_pswd} onPress={() => navigation.navigate('Details')}>
                                <Text style={styles.Sign_here}>Sign Up ?</Text>
                            </TouchableOpacity>
                        </View>



                    </View>


                </ScrollView>
                <View style={{ bottom: '10%' }}>
                    <Linking_Here />
                </View>
            </ImageBackground>
        </>
    )
}

export default Login

const styles = StyleSheet.create({

    arrow_right: {
        color: COLOURS.white,
        fontSize: 20,
    },

    ok: {
        marginTop: '20%',
        marginBottom: 0,
        marginVertical: 10,
        width: 48,
        height: 48,
        padding: 13,
        borderRadius: 50,
        alignItems: 'center',
        textAlignVertical: 'center',
        backgroundColor: COLOURS.blue,
    },

    icon_eye: {
        right: 10,
        fontSize: 18,
        color: COLOURS.skinColor,
    },

    Sign_here: {
        letterSpacing: .2,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
    },
    frtg_here: {
        letterSpacing: .2,
        color: COLOURS.skinColor,
        fontFamily: 'Roboto-Medium',
    },

    frgt_psede_sign_up: {
        width: '100%',
        marginTop: '16%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
    },

    inpt_here_pswd: {
        paddingHorizontal: 30,
        color: COLOURS.black,
        width: '80%',
    },

    inpt_here: {
        width: '90%',
        color: COLOURS.black
    },

    number_container_pswd: {
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        backgroundColor: COLOURS.light,
        justifyContent: 'space-between',
    },

    number_container: {
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        backgroundColor: COLOURS.light,
    },

    text_co: {
        marginTop: '30%',
        textAlign: 'center',
        color: COLOURS.darkgreen,
        fontFamily: 'Roboto-Medium',
    },

    number_code: {
        letterSpacing: .3,
        color: COLOURS.black,
        paddingHorizontal: 10,
    },

    pswd: {
        width: '100%',
        marginTop: 30,
        marginBottom: 10,
        marginHorizontal: 30,
        color: COLOURS.black,
    },

    number: {
        width: '100%',
        marginVertical: 20,
        marginBottom: 10,
        marginHorizontal: 30,
        color: COLOURS.black,
    },

    number_here: {
        color: COLOURS.black,
        fontFamily: 'Roboto-Bold',
    },

    login_here: {
        width: '100%',
        marginVertical: 20,
        paddingHorizontal: 30,
    },

    login: {
        fontSize: 30,
        textAlign: 'left',
        color: COLOURS.black,
    },

    short_Container: {
        height: '100%',
        alignItems: 'center',
        paddingVertical: 30,
        justifyContent: 'space-around',
    },
    short_Container_here: {
        // height: '100%',
        marginTop: '10%',
        alignItems: 'center',
        marginHorizontal: 20,
    },

    container: {
        width: '100%',
        height: '100%',
    },

    img_back: {
        width: '100%',
        height: '100%',
    }
})