import React, { useEffect, useState } from 'react'
import back from '../images/green.png'
import { COLOURS } from '../Components/ThemeColours'
import FontAwesome5, { FA5Style } from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Animated, Modal } from 'react-native'
import Small_Logo from './Small_Logo';
import Linking_Here from './Linking_Here';


const Dashboard = ({ navigation }) => {

    const [mode, setMode] = useState(false);
    const [visible, setVisible] = useState('');

    // Logout Start
    const ModalPoup = ({ visible, children }) => {
        const [showModal, setShowModal] = React.useState(visible);
        const scaleValue = React.useRef(new Animated.Value(0)).current;
        React.useEffect(() => {
            toggleModal();
        }, [visible]);
        const toggleModal = () => {
            if (visible) {
                setShowModal(true);
                Animated.spring(scaleValue, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            } else {
                setTimeout(() => setShowModal(false), 200);
                Animated.timing(scaleValue, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            }
        };

        return (
            <Modal transparent visible={showModal}>
                <View style={styles.modalBackGround}>
                    <Animated.View
                        style={[styles.modalContainer, { transform: [{ scale: scaleValue, }], backgroundColor: COLOURS.white }]}>
                        {children}
                    </Animated.View>
                </View>
            </Modal>

        );
    };
    // Logout End

    const [time, setTime] = useState(new Date());
    const [hustler, setHustler] = useState(true);
    const [process, setProcess] = useState(false);
    const [btn_hide, setBtn_Hide] = useState(false);
    const [congratulation, setCongratulation] = useState(false);

    const Content = () => {
        setHustler(false)
        setProcess(true)
        setBtn_Hide(true);
        setCongratulation(false);
    }

    const eee = () => {
        setHustler(false)
        setProcess(true)
    }

    const congrats = () => {
        setCongratulation(true);
        setProcess(false)
        setHustler(false)
    }

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (count < 450) {
                setCount(count + 1);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [count]);

return (
    <>
        <StatusBar backgroundColor={COLOURS.lightgreen} barStyle={'light-content'} />

        <View style={styles.container}>
            <View style={{ justifyContent: 'space-between', height: '100%' }}>
                <View>
                    <ImageBackground source={back} style={styles.img_back}>
                        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.openDrawer()}>
                            <MaterialCommunityIcons name='menu' style={styles.icon_menu} />
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>
                            <Small_Logo />
                            <Text style={styles.name}>Welcome First Name</Text>
                        </View>
                    </ImageBackground>

                    <View style={styles.contia}>
                        <View style={styles.ksh_boreder}>
                            <Text style={{ color: COLOURS.blue, fontSize: 11, textAlign: 'center', }}>Your current available
                                Hustlerfund Personal loan limit range is
                            </Text>
                        </View>

                        <View style={styles.ksh_here} >
                            <Text style={styles.ksh_name}>KSH </Text>
                            <TouchableOpacity onPress={() => setVisible(true)} activeOpacity={0.8}>
                                <Text style={styles.ksh_nmber}> {count} - 800</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: '10%', marginBottom: 30 }}>
                        <Text style={{ color: COLOURS.black, textAlign: 'center', fontSize: 13, fontFamily: 'Roboto-Medium', }}>Current Existing Loan Limit Extensions</Text>
                    </View>

                    <ScrollView horizontal>
                        <View style={{ alignItems: 'center', }}>
                            <Text style={{ color: COLOURS.green, marginBottom: 10, fontSize: 12, fontFamily: 'Roboto-Medium', }}>Available</Text>
                            <View style={styles.esamont_history}>
                                <Text style={styles.amount}>Amount</Text>
                                <Text style={styles.ksh_rp}><Text style={{ color: COLOURS.black, fontSize: 13, }}>Ksh</Text> 15,00</Text>
                                <Text style={styles.repay}>Repayment time extend to</Text>
                                <Text style={styles.days}>28 Days</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center', top: 10, }}>
                            <Text style={{ color: COLOURS.red, marginBottom: 10, fontSize: 12, fontFamily: 'Roboto-Medium', }}>unAvailable</Text>
                            <View style={styles.esamont_historys}>
                                <Text style={styles.amounts}>Amount</Text>
                                <Text style={styles.ksh_rps}><Text style={{ color: COLOURS.black, fontSize: 13, }}>Ksh</Text> 15,00</Text>
                                <Text style={styles.repays}>Repayment time extend to</Text>
                                <Text style={styles.dayss}>28 Days</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', top: 10, }}>
                            <Text style={{ color: COLOURS.red, marginBottom: 10, fontSize: 12, fontFamily: 'Roboto-Medium', }}>unAvailable</Text>
                            <View style={styles.esamont_historys}>
                                <Text style={styles.amounts}>Amount</Text>
                                <Text style={styles.ksh_rps}><Text style={{ color: COLOURS.black, fontSize: 13, }}>Ksh</Text> 15,00</Text>
                                <Text style={styles.repays}>Repayment time extend to</Text>
                                <Text style={styles.dayss}>28 Days</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', top: 10, }}>
                            <Text style={{ color: COLOURS.red, marginBottom: 10, fontSize: 12, fontFamily: 'Roboto-Medium', }}>unAvailable</Text>
                            <View style={styles.esamont_historys}>
                                <Text style={styles.amounts}>Amount</Text>
                                <Text style={styles.ksh_rps}><Text style={{ color: COLOURS.black, fontSize: 13, }}>Ksh</Text> 15,00</Text>
                                <Text style={styles.repays}>Repayment time extend to</Text>
                                <Text style={styles.dayss}>28 Days</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', }}>
                            <Text style={{ color: COLOURS.green, marginBottom: 10, fontSize: 12, fontFamily: 'Roboto-Medium', }}>Available</Text>
                            <View style={styles.esamont_history}>
                                <Text style={styles.amount}>Amount</Text>
                                <Text style={styles.ksh_rp}><Text style={{ color: COLOURS.black, fontSize: 13, }}>Ksh</Text> 15,00</Text>
                                <Text style={styles.repay}>Repayment time extend to</Text>
                                <Text style={styles.days}>28 Days</Text>
                            </View>
                        </View>
                    </ScrollView>

                    <View style={{ backgroundColor: COLOURS.lightorange, marginHorizontal: 20, marginTop: 30, padding: 8, borderRadius: 10, }}>
                        <Text style={{ color: COLOURS.black, fontSize: 9, textAlign: 'center', fontFamily: 'Roboto-Medium', }}><Text style={{ color: COLOURS.blue }}>07######98</Text> has successfully extended hustler fund loan limit to <Text style={{ color: COLOURS.blue }}>ksh 1,500</Text></Text>
                        <Text style={{ color: COLOURS.black, fontSize: 9, textAlign: 'center', fontFamily: 'Roboto-Medium', }}><Text style={{ color: COLOURS.blue }}>07######98</Text> has successfully extended hustler fund loan limit to <Text style={{ color: COLOURS.blue }}>ksh 1,500</Text></Text>
                        <Text style={{ color: COLOURS.black, fontSize: 9, textAlign: 'center', fontFamily: 'Roboto-Medium', }}><Text style={{ color: COLOURS.blue }}>07######98</Text> has successfully extended hustler fund loan limit to <Text style={{ color: COLOURS.blue }}>ksh 1,500</Text></Text>
                    </View>
                </View>
                <View style={{ bottom: '10%' }}>
                    <Linking_Here />
                </View>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: COLOURS.light }}>
                <ModalPoup visible={visible}>

                    {hustler == true ?
                        <>
                            <View style={{ alignItems: 'center', }}>
                                <Text style={{ color: COLOURS.black, fontFamily: 'Roboto-Medium', textAlign: 'center', letterSpacing: .3, fontSize: 14, }}>
                                    Continue to submit your application for hustler fund loan extention to Ksh 1,500
                                </Text>
                            </View>
                            <View style={{ alignItems: 'center', marginTop: '10%' }} >
                                <TouchableOpacity activeOpacity={0.9} style={styles.btn_indside_outline} onPress={eee}>
                                    <Text style={styles.btn_txt_outline}>Okay</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                        : ''
                    }

                    {process == true ?

                        <>
                            <View style={{ alignItems: 'center' }}>
                                <View style={styles.header}>
                                    <Text style={{ color: COLOURS.black, fontFamily: 'Roboto-Medium', fontSize: 17 }}>Processing ...</Text>
                                </View>
                            </View>

                            <TouchableOpacity style={{ alignItems: 'center', }} onPress={congrats}>
                                <View style={{}}>
                                    <Text style={{ color: COLOURS.black, lineHeight: 20, fontFamily: 'Roboto-Medium', fontSize: 12, }}>1. check Personal info</Text>
                                    <Text style={{ color: COLOURS.black, lineHeight: 20, fontFamily: 'Roboto-Medium', fontSize: 12, }}>2. Checking Mobile Money Transaction Messages fromyour device</Text>
                                    <Text style={{ color: COLOURS.black, lineHeight: 20, fontFamily: 'Roboto-Medium', fontSize: 12, }}>3. Intelligent Decision</Text>
                                    <Text style={{ color: COLOURS.black, lineHeight: 20, fontFamily: 'Roboto-Medium', fontSize: 12, }}>3. Review Completed</Text>
                                </View>
                            </TouchableOpacity>
                        </>
                        : ''
                    }



                    {congratulation == true ?

                        <>
                            <View style={{ alignItems: 'center' }}>
                                <View style={styles.header}>
                                    <Text style={{ color: COLOURS.lightgreen, fontFamily: 'Roboto-Bold', fontSize: 20 }}>Congratulations !</Text>
                                </View>
                            </View>

                            <View style={{ alignItems: 'center', }}>
                                <Text style={{ color: COLOURS.black, fontFamily: 'Roboto-Medium', textAlign: 'center', letterSpacing: .3, fontSize: 14, }}>
                                    Your submission has been approved and we are working on the process to get your account loan limit from hustler fund extended to Ksh 1,500.
                                    To proceed you will be required to make slight refundable payment of ksh 300. if the process fails you will be refunded your amount in 3 days.
                                    Thank you for choosing HustlerHack.
                                </Text>
                            </View>

                            <View style={{ alignItems: 'center', marginTop: '10%' }} >
                                <TouchableOpacity activeOpacity={0.9} style={styles.btn_indside_outline} onPress={() => setVisible(false)}>
                                    <Text style={styles.btn_txt_outline}>Okay</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                        : ''
                    }


                    {btn_hide == true ?

                        <View style={{ alignItems: 'center', marginTop: '10%' }} >
                            <TouchableOpacity activeOpacity={0.9} style={styles.btn_indside_outline} onPress={Content}>
                                <Text style={styles.btn_txt_outline}>Okay</Text>
                            </TouchableOpacity>
                        </View>
                        : ''
                    }

                </ModalPoup>
            </View>
        </View>
    </>
)
}

export default Dashboard

const styles = StyleSheet.create({

    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: COLOURS.brown,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
        width: '75%',
    },
    header: {
        width: '100%',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn_txt_outline: {
        color: '#fff',
        letterSpacing: 1,
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
    },

    btn_indside_outline: {
        padding: 10,
        width: '40%',
        borderRadius: 20,
        fontFamily: 'Roboto-Medium',
        backgroundColor: COLOURS.blue,
    },

    // btn_indside: {
    //     padding: 10,
    //     width: '80%',
    //     borderRadius: 10,
    //     backgroundColor: '#5ED780',
    // },

    text_co: {
        top: -10,
        textAlign: 'center',
        color: COLOURS.darkgreen,
        fontFamily: 'Roboto-Medium',
    },

    dayss: {
        fontSize: 13,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
    },

    repays: {
        marginTop: 5,
        fontSize: 10,
        fontFamily: 'Roboto-Medium',
        color: COLOURS.black,
    },

    ksh_rps: {
        fontSize: 10,
        fontFamily: 'Roboto-Medium',
        marginTop: 5,
        color: COLOURS.frozi,

    },

    amounts: {
        fontSize: 10,
        fontFamily: 'Roboto-Medium',
        color: COLOURS.blue,
    },

    esamont_historys: {
        width: 150,
        height: 85,
        borderWidth: 5,
        borderRadius: 50,
        alignItems: 'center',
        marginHorizontal: 10,
        borderColor: COLOURS.frozi,
    },

    /*  */

    days: {
        fontSize: 15,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
    },

    repay: {
        marginTop: 5,
        fontSize: 11,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
    },

    ksh_rp: {
        fontSize: 14,
        marginTop: 5,
        fontFamily: 'Roboto-Medium',
        color: COLOURS.frozi,

    },

    amount: {
        fontSize: 11,
        color: COLOURS.blue,
        fontFamily: 'Roboto-Medium',
    },

    esamont_history: {
        width: 160,
        height: 100,
        borderWidth: 5,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        borderColor: COLOURS.frozi,
    },

    ksh_name: {

        fontSize: 14,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
    },

    ksh_nmber: {
        color: 'red',
        fontSize: 22,
        fontFamily: 'Roboto-Medium',
    },

    ksh_here: {
        // left:-7,
        flexDirection: 'row',
        alignItems: 'center',
    },

    ksh_boreder: {
        width: 155,
        borderWidth: 5,
        borderRadius: 40,
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderColor: COLOURS.orange
    },


    contia: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '5%',
        marginHorizontal: 15,
    },

    name: {
        color: COLOURS.white,
        top: 20,
        fontFamily: 'Roboto-Medium',
    },

    icon_menu: {
        marginHorizontal: 20,
        marginVertical: 40,
        fontSize: 30,
        color: COLOURS.white,
    },

    img_back: {
        height: 250,
        width: '100%',
    },

    container: {
        height: '100%',
        width: '100%',
        backgroundColor: COLOURS.white,
    },
})