import Logo_Here from './Logo_Here';
import back from '../images/back.png'
import React, { useEffect } from 'react';
import { COLOURS } from '../Components/ThemeColours';
import { StyleSheet, Text, View, Image, StatusBar, ImageBackground } from 'react-native';

export default function Splash_Screen({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            handleGetToken();
        }, 2000);
    });

    const handleGetToken = async () => {
        navigation.replace('welcome');
    };

    return (

        <>
            <StatusBar backgroundColor={COLOURS.hex} barStyle={'light-content'} />
            <ImageBackground source={back} style={styles.img_back}>
                <View style={{
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                    <View style={{ marginTop: 40 }}>
                        <Logo_Here />
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ color: "#033C13", textAlign: 'center', fontFamily: 'Roboto-Medium' }}>Extend Your Loan Limit Today</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', top: 100, }}>
                        <Text style={{ color: "#000" }}></Text>
                        <Text style={{ color: COLOURS.darkgreen, fontFamily: 'Roboto-Medium' }}>Powered by hustlerfundhack.co.ke</Text>
                    </View>
                </View>
            </ImageBackground>
        </>
    );
}
const styles = StyleSheet.create({

    img_back: {
        height: '100%',
        width: '100%',
    },
});