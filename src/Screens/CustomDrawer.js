import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    Modal,
    Animated,
    StyleSheet
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLOURS } from '../Components/ThemeColours';
import Small_Logo from './Small_Logo';

const CustomDrawer = (props) => {
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState(false);
    return (
        <View style={{ flex: 1, backgroundColor: COLOURS.lightgreen }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: COLOURS.lightgreen }}>
                <View
                    // source={require('../images/AVATAR.png')}
                    style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/**/}
                        <TouchableOpacity style={{ height: 80, width: 100, backgroundColor: 'rgba(0,0,0,0)' }} activeOpacity={0.6}> 
                             {/* <MaterialIcons name='arrow-back-ios' style={{ color: COLOURS.white, fontSize: 20 }} />  */}
                         </TouchableOpacity> 
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                    </View>
                </View>
                <View>

                </View>
                <View style={{ flex: 1, backgroundColor: COLOURS.lightgreen, paddingTop: 10, }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', top: -60, }}>
                        {/* <Image
                            source={require('../images/AVATAR.png')}
                            style={{ height: 100, width: 100, borderRadius: 40, marginBottom: -40, }}
                        /> */}
                        <Small_Logo />
                    </View>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 10, paddingTop: 0, paddingBottom: 0, borderTopWidth: 1, borderTopColor: COLOURS.brown }}>
                {/*  logout start here */}
                {/* <TouchableOpacity style={{ paddingVertical: 15 }}  >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome5 name='share-alt' style={{ fontSize: 18, color: COLOURS.backgroundDark, paddingRight: 5, }} />
                        <Text
                            style={{
                                fontSize: 14,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 5,
                                color: COLOURS.backgroundDark,
                                swipeEnabled: false,
                            }}>
                            Share Friends
                        </Text>
                    </View>
                </TouchableOpacity> */}
                {/* // Dummy Text // */}

            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: COLOURS.brown,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
})

export default CustomDrawer
