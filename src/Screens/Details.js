import back from '../images/back.png'
import Small_Logo from './Small_Logo'
import React, { useState } from 'react'
import Linking_Here from './Linking_Here'
import DropDown_Here from './DropDown_Here'
import DatePickerHere from './DatePickerHere'
import DropDown_Here_2 from './DropDown_Here_2'
import DatePicker from 'react-native-date-picker'
import { COLOURS } from '../Components/ThemeColours'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Details = ({ navigation }) => {

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    this.state = {
        date: new Date()
    }

    return (
        <>
            <StatusBar backgroundColor={COLOURS.hex} barStyle={'light-content'} />

            <ScrollView>

                <View style={styles.container}>
                    <ImageBackground source={back} style={styles.img_back}>
                        <View style={styles.short_Container}>
                            <View style={styles.short_Container_here}>
                                <Small_Logo />
                                <View style={{ width: '100%' }}>
                                    <View style={styles.number}>
                                        <Text style={styles.number_here}>First Name</Text>
                                    </View>
                                    <View style={styles.number_container_pswd}>
                                        <TextInput placeholder='First Name' placeholderTextColor={'grey'} style={styles.inpt_here} />
                                    </View>
                                    <View style={styles.number}>
                                        <Text style={styles.number_here}>Last Name</Text>
                                    </View>
                                    <View style={styles.number_container_pswd}>
                                        <TextInput placeholder='Last Name' placeholderTextColor={'grey'} style={styles.inpt_here} />
                                    </View>
                                    <View style={styles.number}>
                                        <Text style={styles.number_here}>Email</Text>
                                    </View>
                                    <View style={styles.number_container_pswd}>
                                        <TextInput placeholder='Your Email' placeholderTextColor={'grey'} style={styles.inpt_here} />
                                    </View>
                                    <View style={styles.number}>
                                        <Text style={styles.number_here}>Gender</Text>
                                    </View>
                                    <DropDown_Here_2 />

                                    <View style={styles.number}>
                                        <Text style={styles.number_here}>Date of Birth</Text>
                                    </View>
                                    <View style={styles.number_container_pswd}>
                                        <TextInput defaultValue={date?.toLocaleDateString()} placeholderTextColor={'grey'} style={styles.inpt_here} />

                                        <TouchableOpacity style={{}} activeOpacity={0.8} onPress={() => setOpen(true)}>
                                            <Fontisto name='date' style={styles.icon_calender} />
                                        </TouchableOpacity>

                                        <DatePicker
                                            date={this.state.date}
                                            mode={'date'}
                                            onDateChange={date => this.setState({ date })}
                                            modal
                                            open={open}
                                            format={'YYYY-MM-DD '}
                                            onConfirm={value => {
                                                setOpen(false);
                                                setDate(value);
                                            }}
                                            onCancel={() => {
                                                setOpen(false);
                                            }}
                                        />
                                    </View>

                                    <View style={styles.number}>
                                        <Text style={styles.number_here}>Country Of Residence</Text>
                                    </View>
                                    <DropDown_Here />

                                    <View style={styles.number}>
                                        <Text style={styles.number_here}>Enter ID Number</Text>
                                    </View>

                                    <View style={styles.number_container_pswd}>
                                        <TextInput placeholder='Enter Id No' secureTextEntry placeholderTextColor={'grey'} style={styles.inpt_here_pswd} keyboardType='number-pad' maxLength={9} />
                                    </View>

                                    <View style={styles.btn_container}>
                                        <TouchableOpacity activeOpacity={0.9} style={styles.btn_indside} onPress={() => navigation.navigate('Dashboard')}>
                                            <Text style={styles.btn_txt}>NEXT</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        </View>
                        <View style={{ top: '-9%' }}>
                                <Linking_Here />
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView >
        </>
    )
}

export default Details

const styles = StyleSheet.create({

    icon_calender: {
        color: COLOURS.black,
        fontSize: 17,
        right: 30
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
        marginTop: 35,
        alignItems: 'center',
        justifyContent: "center",
    },

    agree_here: {
        paddingHorizontal: 10,
        color: COLOURS.black,
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
        marginTop: 30,
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


    inpt_here_pswd: {
        width: '100%',
        paddingHorizontal: 20,
        color: COLOURS.black,
    },

    inpt_here: {
        paddingHorizontal: 20,
        width: '100%',
        color: COLOURS.black,
    },

    inpt_here_send: {
        width: '82%',
        color: COLOURS.black,
    },

    number_container_pswd: {
        // width:'90%',
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
        top: 25,
        marginTop: 20,
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
        color: COLOURS.darkgreen,
    },

    number_code: {
        letterSpacing: .3,
        color: COLOURS.black,
        paddingHorizontal: 10,
    },

    number_code_send: {
        color: COLOURS.white,
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 10,
        backgroundColor: COLOURS.hex,
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