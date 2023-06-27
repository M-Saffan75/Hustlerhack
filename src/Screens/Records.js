import React from 'react'
import { COLOURS } from '../Components/ThemeColours'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Linking_Here from './Linking_Here';

const Records = ({navigation}) => {
    return (
        <>
            <StatusBar backgroundColor={COLOURS.white} barStyle={'dark-content'} />

            <View style={styles.container}>

                <View style={{ justifyContent: 'space-between', height: '100%' }}>

                    <View>
                        <View style={styles.nav_notifi}>
                            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6}  onPress={()=>navigation.goBack()}>
                                <FontAwesome5 name='arrow-left' style={styles.icon_name} />
                            </TouchableOpacity>
                            <Text style={styles.categories}>My Submitted Hustler fund loan Extensions</Text>
                            <Text style={{ color: COLOURS.white,fontFamily:'Roboto-Medium', }}>Profilehere</Text>
                        </View>
                        <View>
                            <Text style={{ borderBottomColor: COLOURS.skinColor, borderWidth: .2, height: 1, marginBottom: 40, }}></Text>
                        </View>
                        <View style={{ marginHorizontal: 20 }}>
                            <View style={styles.pending_area}>
                                <Text style={styles.date}>02/12/2023</Text>
                                <Text style={styles.pending_here}>Pending</Text>
                                <Text style={styles.ksh}>ksh 1,500</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{bottom:'10%'}}>
                        <Linking_Here/>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Records

const styles = StyleSheet.create({
    text_co: {
        top: -10,
        textAlign: 'center',
        color: COLOURS.darkgreen,
        fontFamily:'Roboto-Medium',
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
        color: COLOURS.black,
        fontFamily:'Roboto-Medium',
    },

    pending_here: {
        color: COLOURS.black,
        fontFamily:'Roboto-Medium',
    },

    date: {
        color: COLOURS.black,
        fontFamily:'Roboto-Medium',
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
        fontSize: 12,
        color: COLOURS.black,
        fontFamily:'Roboto-Medium',
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