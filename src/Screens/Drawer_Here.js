import React from 'react'
import Login from './Login';
import Contact from './Contact';
import Details from './Details';
import Profile from './Profile';
import Records from './Records';
import Permissions from './Permissions';
import CustomDrawer from './CustomDrawer';
import Notifications from './Notifications';
import { COLOURS } from '../Components/ThemeColours';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Dashboard';
import Forgot_Password from './Forgot_Password';
import Welcome from './Welcome';
import Register from './Register';
import Splash_Screen from './Splash_Screen';
import Live_Chat from './Live_Chat';

const Drawer_Here = () => {

    const Drawer = createDrawerNavigator();


    const Homestack = () => {
        const Stack = createNativeStackNavigator();
        return (

            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="SPlash_Screen" component={Splash_Screen} />
                <Stack.Screen name="welcome" component={Welcome} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="profile" component={Profile} />
                <Stack.Screen name="records" component={Records} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="contact" component={Contact} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="permissions" component={Permissions} />
                <Stack.Screen name="notifications" component={Notifications} />
                <Stack.Screen name="forgot_Password" component={Forgot_Password} />
            </Stack.Navigator>

        )
    }


    return (
        <>
            <NavigationContainer>
                <Drawer.Navigator
                    drawerContent={props => <CustomDrawer {...props} />}
                    screenOptions={{
                        headerShown: false,
                        gestureEnabled: false,
                        swipeEnabled: false,
                        drawerLockMode: 'locked-open',
                        drawerActiveBackgroundColor: COLOURS.white,
                        drawerInactiveBackgroundColor: COLOURS.white,
                        drawerActiveTintColor: 'black',
                        drawerInactiveTintColor: 'black',
                        drawerLabelStyle: {
                            fontSize: 13,
                            marginLeft: -20,
                            marginBottom: -2,
                            fontFamily: 'Roboto-Medium',
                        },
                    }}>
                    <Drawer.Screen
                        name="Home"
                        component={Homestack}
                        options={{
                            drawerIcon: ({ color }) => (
                                // <FontAwesome5 name='user-plus' style={{color:COLOURS.black, fontSize:20,}}/>
                                <FontAwesome5 name='home' style={{ color: COLOURS.black, fontSize: 20, width: 25 }} />
                            ),
                        }}
                    />
                    <Drawer.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            drawerIcon: ({ color }) => (
                                <FontAwesome5 name='user-plus' style={{ color: COLOURS.black, fontSize: 20, width: 25 }} />
                            ),
                        }}
                    />
                    <Drawer.Screen
                        name="Records"
                        component={Records}
                        options={{
                            drawerIcon: ({ color }) => (
                                <FontAwesome5 name='file-contract' style={{ color: COLOURS.black, fontSize: 20, width: 25 }} />
                            ),
                        }}
                    />
                    <Drawer.Screen
                        name="Notifications"
                        component={Notifications}
                        options={{
                            drawerIcon: ({ color }) => (
                                <FontAwesome5 name='bell' style={{ color: COLOURS.black, fontSize: 20, width: 25 }} />
                            ),
                        }}
                    />
                    <Drawer.Screen
                        name="LiveChat"
                        component={Live_Chat}
                        options={{
                            drawerIcon: ({ color }) => (
                                <FontAwesome5 name='headset' style={{ color: COLOURS.black, fontSize: 20, width: 25 }} />
                            ),
                        }}
                    />

                    <Drawer.Screen
                        name="FaQs"
                        component={Permissions}
                        options={{
                            drawerIcon: ({ color }) => (
                                <FontAwesome5 name='search-plus' style={{ color: COLOURS.black, fontSize: 20, width: 25 }} />
                            ),
                        }}
                    />
                    <Drawer.Screen
                        name="Contact us"
                        component={Contact}
                        options={{
                            drawerIcon: ({ color }) => (
                                <FontAwesome5 name='envelope' style={{ color: COLOURS.black, fontSize: 20, width: 25 }} />
                            ),
                        }}
                    />
                    <Drawer.Screen
                        name="Logout"
                        component={Login}
                        options={{
                            drawerIcon: ({ color }) => (
                                <Ionicons name='log-out' style={{ color: COLOURS.black, fontSize: 20, width: 25 }} />
                            ),
                        }}
                    />

                </Drawer.Navigator>

            </NavigationContainer>
        </>
    )
}

export default Drawer_Here

