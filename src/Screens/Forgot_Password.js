import back from '../images/back.png'
import Small_Logo from './Small_Logo'
import React, { useEffect, useState } from 'react'
import { COLOURS } from '../Components/ThemeColours'
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import Linking_Here from './Linking_Here';

const Forgot_Password = ({ navigation }) => {


    const [hide, setHide] = useState(true);
    const [hidePass, setHidePass] = useState(true);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')
    const [mobile_no, setMobile_No] = useState('')
    const [confirm_password, setConfirm_Password] = useState('')

    const [otp_error, setotp_Error] = useState(false);


    const [password_error, setPassword_Error] = useState(false);
    const [mobile_no_error, setMobile_No_Error] = useState(false);
    const [confirm_password_error, setConfirm_Password_error] = useState(false)


    /*  */

    const Forget = () => {
        if (otp.length == '' || mobile_no.length == '' || password.length == '' || confirm_password.length == '') {
            setotp_Error(true)
            setPassword_Error(true)
            setMobile_No_Error(true)
            setConfirm_Password_error(true)
        }

        else if (otp.length != '' || mobile_no.length != '' || password.length != '' || confirm_password.length != '') {
            // setName_Error(false)
            setPassword_Error(false)
            setPassword_Error(false)
            setConfirm_Password_error(false)
            navigation.navigate('Details')
        }

        else {
            setName_Error(false)
            setPassword_Error(false)
            setPassword_Error(false)
            setConfirm_Password_error(false)
        }
    }

    const [secondsRemaining, setSecondsRemaining] = useState(60);
    const [resend_error, setResend_Error] = useState(false)

    useEffect(() => {
        if (secondsRemaining === 0 || seconds == false) {
            setSeconds(false)
            setResend_Btn_Here(true)
            return;
        }

        const timerId = setInterval(() => {
            setSecondsRemaining(secondsRemaining - 1);
        }, 1000);

        return () => clearInterval(timerId);
    });

    const [seconds, setSeconds] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [hide_btn_here, setHide_Btn_Here] = useState(true);
    const [resend_btn_here, setResend_Btn_Here] = useState(false);


    const hide_btn = () => {
        setHide_Btn_Here(false)
        setSeconds(true)
    }

    const Resend_btn = () => {
        setResend_Error(true)
    }


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    return (
        <>
            <StatusBar backgroundColor={COLOURS.hex} barStyle={'light-content'} />

            <View style={styles.container}>
                <ImageBackground source={back} style={styles.img_back}>
                    <ScrollView style={{ height: '100%' }}>
                        <View style={styles.short_Container}>
                            <View style={styles.short_Container_here}>
                                <Small_Logo />

                                <View style={{ width: '100%' }}>
                                    <View style={styles.number}>
                                        <Text style={styles.number_here}>Phone Number</Text>
                                    </View>
                                    <View style={styles.number_container}>
                                        <Text style={styles.number_code}>+254 (0)</Text>
                                        <TextInput placeholder='7xxxxxx' placeholderTextColor={'grey'} style={styles.inpt_here} onChangeText={setMobile_No} keyboardType='number-pad' />
                                    </View>
                                    {mobile_no_error == true ? (
                                        <View style={{ display: mobile_no.length >= 2 ? 'none' : 'flex' }}>
                                            <Text style={styles.phone_error}>Phone Number is Required*</Text>
                                        </View>
                                    ) : null
                                    }


                                    <View style={styles.number}>
                                        <Text style={styles.number_here}>OTP</Text>
                                    </View>

                                    <View style={styles.number_container_send}>
                                        <TextInput placeholder='Your otp' placeholderTextColor={'grey'} style={styles.inpt_here_send} onChangeText={setOtp} keyboardType='number-pad' />
                                        {seconds == true ?
                                            <TouchableOpacity activeOpacity={0.8}>
                                                <Text style={styles.number_code_send}> {secondsRemaining}</Text>
                                            </TouchableOpacity>
                                            : ''
                                        }

                                        {hide_btn_here == true ?
                                            <TouchableOpacity activeOpacity={0.7} onPress={hide_btn}>
                                                <Text style={styles.number_code_send}> Send</Text>
                                            </TouchableOpacity>
                                            : ''
                                        }

                                        {hide_btn_here == false && seconds == false ?
                                            <TouchableOpacity activeOpacity={0.7} onPress={Resend_btn}>
                                                <Text style={styles.number_code_send}>Resend</Text>
                                            </TouchableOpacity>
                                            : ''
                                        }
                                    </View>

                                    {resend_error == true ?
                                        <TouchableOpacity activeOpacity={0.7} style={{ display: otp.length > 1 ? 'none' : 'flex', marginHorizontal: 20, top: 10, }}>
                                            <Text style={styles.resend_code}>
                                                “Tips: Please ensure that sender name “AFRICASTKNG” is not blocked. Or dial *456*9*5*#, enter “5” to select “5”: Activate ALL promo messages”, enter “1”to select “1: Yes”. Then you can receive messages from app.”
                                            </Text>
                                        </TouchableOpacity>
                                        : ''
                                    }

                                    {otp_error == true ? (
                                        <View style={{ display: otp.length >= 2 ? 'none' : 'flex' }}>
                                            <Text style={styles.phone_error}>Your Otp is Required*</Text>
                                        </View>
                                    ) : null
                                    }

                                    <View style={styles.pswd}>
                                        <Text style={styles.number_here}>New Password</Text>
                                    </View>
                                    <View style={styles.number_container_pswd}>
                                        <TextInput placeholder='New Password' secureTextEntry={hide ? true : false} placeholderTextColor={'grey'} style={styles.inpt_here_pswd} onChangeText={setPassword} />
                                        <FontAwesome5 name={hide ? 'eye-slash' : 'eye'} onPress={() => setHide(!hide)} style={styles.icon_eye} />
                                    </View>


                                    {password_error == true ? (
                                        <View style={{ display: password.length >= 2 ? 'none' : 'flex' }}>
                                            <Text style={styles.phone_error}>New Password is Required*</Text>
                                        </View>
                                    ) : null
                                    }

                                    <View style={styles.pswd}>
                                        <Text style={styles.number_here}>Confirm Password</Text>
                                    </View>
                                    <View style={styles.number_container_pswd}>
                                        <TextInput placeholder='Confirm Password' secureTextEntry={hidePass ? true : false} placeholderTextColor={'grey'} style={styles.inpt_here_pswd} onChangeText={setConfirm_Password} />
                                        <FontAwesome5 name={hidePass ? 'eye-slash' : 'eye'} onPress={() => setHidePass(!hidePass)} style={styles.icon_eye} />
                                    </View>


                                    {confirm_password_error == true ? (
                                        <View style={{ display: confirm_password.length >= 2 ? 'none' : 'flex' }}>
                                            <Text style={styles.phone_error}>Confirm Password is Required*</Text>
                                        </View>
                                    ) : null
                                    }

                                    <View style={styles.agree}>
                                        <CheckBox
                                            value={isChecked}
                                            onValueChange={handleCheckboxChange}
                                        />
                                        <Text style={styles.agree_here}>Agree to the Terms & Conditions</Text>
                                    </View>
                                    {confirm_password_error == true && isChecked == false ? <Text style={{ color: 'red', top: -10, marginHorizontal: 30, }}>Checkbox is required*</Text> : ''}
                                    <View style={styles.btn_container}>
                                        <TouchableOpacity activeOpacity={0.9} style={styles.btn_indside} onPress={Forget}>
                                            <Text style={styles.btn_txt}>NEXT</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </ScrollView>
                    <View style={{ bottom: '10%' }}>
                        <Linking_Here />
                    </View>
                </ImageBackground>
            </View>
        </>
    )
}

export default Forgot_Password

const styles = StyleSheet.create({

    resend_code: {
        fontSize: 12,
        color: COLOURS.red,
        fontFamily: 'Roboto-Medium',
    },

    phone_error: {
        fontSize: 12,
        color: COLOURS.red,
        top: 5,
        marginHorizontal: 25,
        fontFamily: 'Roboto-Medium',
    },

    icon_eye: {
        right: 10,
        fontSize: 18,
        color: COLOURS.skinColor,
    },

    btn_txt: {
        letterSpacing: 1,
        textAlign: 'center',
        color: COLOURS.light,
        fontFamily: 'Roboto-Medium',
    },

    btn_indside: {
        padding: 10,
        width: '55%',
        borderRadius: 40,
        paddingVertical: 13,
        backgroundColor: COLOURS.green,
    },

    btn_container: {
        top: 10,
        alignItems: 'center',
        justifyContent: "center",
    },

    agree_here: {
        paddingHorizontal: 10,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
    },

    box: {
        width: 15,
        height: 15,
        backgroundColor: COLOURS.white,
    },

    agree: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginTop: 20,
        marginHorizontal: 30,
    },

    Sign_here: {
        letterSpacing: .2,
        color: COLOURS.blue,
    },
    frtg_here: {
        letterSpacing: .2,
        color: COLOURS.skinColor,
    },

    frgt_psede_sign_up: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
    },

    ok: {
        textAlign: 'center',
        marginVertical: 10,
        top: 30,
        marginBottom: 0,
    },

    inpt_here_pswd: {
        paddingHorizontal: 20,
        color: COLOURS.black,
        width: '80%',
        paddingLeft: 20,
    },

    inpt_here: {
        width: '75%',
        color: COLOURS.black,
    },

    inpt_here_send: {
        width: '82%',
        color: COLOURS.black,

    },

    number_container_pswd: {
        // width:'100%',
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'space-between',
        backgroundColor: COLOURS.light,
    },

    number_container: {
        width: '100%',
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: COLOURS.light,
    },

    number_container_send: {
        width: '100%',
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: COLOURS.light,
    },

    text_co: {
        marginTop: 80,
        textAlign: 'center',
        color: COLOURS.darkgreen,
        fontFamily: 'Roboto-Medium',
    },

    number_code: {
        letterSpacing: .3,
        color: COLOURS.black,
        paddingHorizontal: 10,
        fontFamily: 'Roboto-Medium',
    },

    number_code_send: {
        color: COLOURS.white,
        borderRadius: 10,
        width: 68,
        marginLeft: -10,
        textAlign: 'center',
        paddingVertical: 6,
        paddingHorizontal: 10,
        fontFamily: 'Roboto-Medium',
        backgroundColor: COLOURS.hex,

    },

    pswd: {
        width: '100%',
        marginTop: 22,
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
        right: 10,
        fontFamily: 'Roboto-Bold',
    },

    login_here: {
        width: '100%',
        marginVertical: 20,
        marginTop: 10,
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