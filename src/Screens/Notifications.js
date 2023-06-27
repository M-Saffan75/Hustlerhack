import React from 'react'
import { COLOURS } from '../Components/ThemeColours'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Linking_Here from './Linking_Here';

const Notifications = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor={COLOURS.white} barStyle={'dark-content'} />

            <View style={styles.container}>
                <View style={{ justifyContent: 'space-between', height: '100%' }}>

                    <View>
                        <View style={styles.nav_notifi}>
                            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                <FontAwesome5 name='arrow-left' style={styles.icon_name} />
                            </TouchableOpacity>
                            <Text style={styles.categories}>Notifications</Text>
                            <Text style={{ color: COLOURS.white }}>Profilehere</Text>
                        </View>

                        <View>
                            <Text style={{ borderBottomColor: COLOURS.skinColor, borderWidth: .2, height: 1, marginBottom: 40, }}></Text>
                        </View>

                        <View style={styles.iconall}>
                            <Text style={styles.all}>All</Text>
                            <FontAwesome5 name='angle-down' style={styles.icon_down} />
                        </View>

                        <View style={{ marginHorizontal: 20, marginTop: 30, }}>
                            <View style={styles.cntent}>
                                <Text style={styles.para}>
                                    sdgergetg orep epsum sdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsum
                                </Text>
                            </View>
                            <View><Text style={{ color: COLOURS.black, fontSize: 12, margin: 5, fontFamily: 'Roboto-Medium', }}>05/10/2023</Text></View>
                            <View style={styles.cntent}>
                                <Text style={styles.para}>
                                    sdgergetg orep epsum sdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsum
                                </Text>
                            </View>
                            <View><Text style={{ color: COLOURS.black, fontSize: 12, margin: 5, fontFamily: 'Roboto-Medium', }}>05/08/2023</Text></View>
                            <View style={styles.cntent}>
                                <Text style={styles.para}>
                                    sdgergetg orep epsum sdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsumsdgergetg orep epsum
                                </Text>
                            </View>
                            <View><Text style={{ color: COLOURS.black, fontSize: 12, margin: 5, fontFamily: 'Roboto-Medium', }}>02/12/2023</Text></View>
                        </View>
                    </View>
                        <View style={{ bottom: '0%' }}>
                            <Linking_Here />
                        </View>
                    <View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Notifications

const styles = StyleSheet.create({
    text_co: {
        top: -10,
        textAlign: 'center',
        color: COLOURS.darkgreen,
        fontFamily: 'Roboto-Medium',
    },

    para: {
        fontSize: 12,
        color: COLOURS.black,
        lineHeight: 17,
        fontFamily: 'Roboto-Medium',
    },

    cntent: {
        padding: 10,
        marginTop: 10,
        borderWidth: .6,
        borderRadius: 10,
        borderColor: COLOURS.blue,
    },

    iconall: {
        width: 70,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: .3,
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderColor: COLOURS.black,
        justifyContent: 'space-between',
    },

    icon_down: {
        fontSize: 12,
        color: COLOURS.black,
    },

    all: {
        fontSize: 18,
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
    },

    pending_area: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 15,
        borderColor: COLOURS.blue,
    },

    ksh: {
        color: COLOURS.black
    },

    pending_here: {
        color: COLOURS.black
    },

    date: {
        color: COLOURS.black,
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
        backgroundColor: COLOURS.white,
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
})