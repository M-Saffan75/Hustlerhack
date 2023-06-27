import Logo_Here from './Logo_Here'
import back from '../images/back.png'
import React, { useState } from 'react'
import Linking_Here from './Linking_Here'
import { COLOURS } from '../Components/ThemeColours'
import { Dropdown } from 'react-native-element-dropdown'
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Welcome = ({navigation}) => {

    const [value, setValue] = useState(null);

    const data = [
        { label: 'English', value: '2' },
    ];

    return (
        <>
            <StatusBar backgroundColor={COLOURS.hex} barStyle={'light-content'} />

            <View style={styles.container}>
                <ImageBackground source={back} style={styles.img_back}>
                    <View style={styles.short_Container}>
                        <View style={styles.short_Box}>
                            <View style={styles.img_box}>
                                <Logo_Here />
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.content_txt}>Extend Your husterfund loan limit Today. we negotiate on behalf of the client to get their loan limits increased. </Text>
                            </View>
                            <View>
                                <Text style={styles.language}>Select Language</Text>
                            </View>

                            {/*  */}
                            <View style={{alignItems:'center', top:20, marginBottom:10,}}>

                            <Dropdown
                                style={{
                                    width: '30%',
                                    // margin: 16,
                                    // marginBottom:10,
                                    height: 50,
                                    color: '#000',
                                    borderRadius: 5,
                                    paddingHorizontal: 10,
                                    marginHorizontal: 10,
                                    backgroundColor: COLOURS.blue,
                                }}
                                placeholderStyle={{ color: COLOURS.white, fontFamily: 'Roboto-Bold',letterSpacing:.3, fontSize: 14, paddingLeft: 5, }}
                                selectedTextStyle={{ color: COLOURS.white, fontSize: 14, fontFamily: 'Roboto-Medium' }}
                                inputSearchStyle={{ color: COLOURS.black, }}
                                iconStyle={styles.iconStyle}
                                data={data}
                                // search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="English"
                                // searchPlaceholder="Search..."
                                itemTextStyle={{ color: COLOURS.black }}
                                selectedStyle={{ color: COLOURS.white }}
                                value={value}
                                onChange={item => {
                                    setValue(item.value);
                                }}
                                
                                />
                                </View>
                            {/*  */}
                            <View style={styles.btn_container}>
                                <TouchableOpacity activeOpacity={0.9} style={styles.btn_indside} onPress={()=>navigation.navigate('permissions')}>
                                    <Text style={styles.btn_txt}>Proceed</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Linking_Here />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </>
    )
}

export default Welcome

const styles = StyleSheet.create({

    iconStyle : {
        color:COLOURS.white
    },

    btn_txt: {
        letterSpacing: 1,
        textAlign: 'center',
        color: COLOURS.light,
        fontFamily:'Roboto-Bold'
    },

    btn_indside: {
        padding: 10,
        width: '40%',
        borderRadius: 10,
        backgroundColor: COLOURS.green,
    },

    btn_container: {
        marginTop:40,
        // marginVertical: 20,
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: "center",
    },

    text_co: {
        top: 60,
        textAlign: 'center',
        color: COLOURS.darkgreen,
        fontFamily:'Roboto-Medium',
    },

    content: {
        marginTop: 30,
        paddingHorizontal: 30,
    },

    content_txt: {
        lineHeight: 20,
        textAlign: 'center',
        color: COLOURS.deepgreen,
        fontFamily:'Roboto-Medium',
    },

    language: {
        fontSize: 24,
        marginTop: 30,
        textAlign: "center",
        color: COLOURS.badgreen,
        fontFamily:'Roboto-Bold',
    },

    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#eee'
    },
    short_Container: {
        height: '100%',
        justifyContent: 'space-around',
    },

    short_Box: {
        flexDirection: 'column',
        justifyContent: 'center',
    },

    img_box: {
        alignItems: 'center'
    },
})