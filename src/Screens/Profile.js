import React, { useState } from 'react'
import Logo_Here from './Logo_Here';
import Small_Logo from './Small_Logo';
import Linking_Here from './Linking_Here';
import { COLOURS } from '../Components/ThemeColours';
import { launchImageLibrary } from 'react-native-image-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { PermissionsAndroid, StatusBar, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'

const Profile = ({ navigation }) => {

    const [galleryphoto, setGalleryPhoto] = useState(null);

    let options = {
        saveTophotos: true,
        mediatype: ' photo',
    };

    const opengallery = async () => {
        const result = await launchImageLibrary(options);
        setGalleryPhoto(result.assets[0].uri);
    }


    const camera = () => {

    }

    return (
        <>
            <StatusBar backgroundColor={COLOURS.hex} barStyle={'light-content'} />

            <View style={styles.container}>

                <View style={styles.nav_notifi}>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                        <FontAwesome5 name='arrow-left' style={styles.icon_name} />
                    </TouchableOpacity>
                    <Text style={styles.categories}>My Profile</Text>
                    <Text style={{ color: COLOURS.hex }}>Profilesprofilespro</Text>
                </View>

                <View style={styles.child_container}>

                    <View style={styles.all_here}>
                        <View style={styles.profile_area}>
                            <View style={styles.icon_logo}>
                                <Small_Logo />
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                                < Image source={{ uri: galleryphoto }}
                                    style={{ justifyContent: 'center', alignItems: 'center', width: 100, height: 100, elevation: 41, borderRadius: 100 }} resizeMode='contain'
                                />
                            </View>
                            </View>
                            <View>
                                <View style={styles.user_area}>
                                    <Text style={styles.name}>Name</Text>
                                    <Text style={styles.name_here}>john Doe</Text>
                                </View>
                                <View style={styles.user_area}>
                                    <Text style={styles.name}>Phone Number</Text>
                                    <Text style={styles.name_here}>9876542345</Text>
                                </View>
                                <View style={styles.user_area}>
                                    <Text style={styles.name}>Email Address</Text>
                                    <Text style={styles.name_here}>johnDoe@gmail.com</Text>
                                </View>
                                <View style={styles.user_area}>
                                    <Text style={styles.name}>Gender</Text>
                                    <Text style={styles.name_here}>Male</Text>
                                </View>
                                <View style={styles.user_area}>
                                    <Text style={styles.name}>Date of birth</Text>
                                    <Text style={styles.name_here}>18/11/2023</Text>
                                </View>
                                <View style={styles.user_area}>
                                    <Text style={styles.name}>Country of Residence</Text>
                                    <Text style={styles.name_here}>Kalimanjaro</Text>
                                </View>
                                <View style={styles.user_area}>
                                    <Text style={styles.name}>Id Number</Text>
                                    <Text style={styles.name_here}>8787</Text>
                                </View>
                                <View style={styles.user_area}>
                                    <Text style={styles.name}>Take Photo</Text>
                                    <TouchableOpacity activeOpacity={0.7} onPress={opengallery} >
                                        <Text style={styles.here_photo}>add</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.loch_here} activeOpacity={0.9}>
                                <Text style={styles.reset_here}>Reset Password</Text>
                                <FontAwesome5 name='lock' style={styles.icon_here} />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ bottom: '12%' }}>
                        <Linking_Here />
                    </View>
                </View>
            </View>
        </>
    )
}

export default Profile

const styles = StyleSheet.create({

    here_photo: {
        // width: '10%',
        fontSize: 18,
        color: COLOURS.hex,
    },

    loch_here: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    reset_here: {
        color: COLOURS.hex,
        fontSize: 17,
        fontFamily: 'Roboto-Medium',
    },

    icon_here: {
        left: 5,
        fontSize: 17,
        color: COLOURS.hex,
    },

    user_area: {
        marginHorizontal: 30,
        marginVertical: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    name: {
        fontSize: 16,
        color: COLOURS.black,
        fontFamily: 'Roboto-Bold',
    },

    name_here: {
        fontSize: 16,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
    },


    icon_logo: {
        alignItems: 'center',
        marginBottom: 20,
    },

    container: {
        height: '100%',
        width: '100%',
        backgroundColor: COLOURS.white,
    },

    text_co: {
        // top: 55,
        // marginTop: 20,
        fontFamily: 'Roboto-Medium',
        textAlign: 'center',
        color: COLOURS.darkgreen,
    },

    categories: {
        left: 15,
        fontSize: 17,
        color: COLOURS.black,
        fontFamily: 'Poppins-SemiBold',
    },

    nav_notifi: {
        height: 80,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOURS.hex,
        justifyContent: 'space-between',
    },

    btn_align: {
        marginHorizontal: 20,
        alignSelf: 'flex-start',
    },

    icon_name: {
        fontSize: 26,
        marginTop: 27,
        borderRadius: 7,
        textAlign: 'center',
        color: COLOURS.black,
        paddingHorizontal: 16,
    },

    child_container: {
        // marginTop: "15%",
        height: '95%',
        justifyContent: 'space-around'
    },
})