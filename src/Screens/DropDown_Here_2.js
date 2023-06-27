import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLOURS } from '../Components/ThemeColours';

const DropDown_Here_2 = () => {
    
    const [value, setValue] = useState(null);

    const data = [
        { label: 'Male', value: '3' },
        { label: 'Female', value: '2' },
        { label: 'UnSpecified', value: '4' },
    ];

    return (
        <>
            <Dropdown
                style={{
                    // width: '100%',
                    // margin: 16,
                    // marginBottom:10,
                    height: 50,
                    color: '#000',
                    borderRadius: 30,
                    paddingHorizontal: 10,
                    marginHorizontal:10,
                    backgroundColor: COLOURS.light,
                }}
                placeholderStyle={{ color: 'grey', fontFamily: 'Roboto-Light', fontSize: 14, paddingLeft: 5, }}
                selectedTextStyle={{ color: 'grey',paddingLeft:6, fontSize: 14, fontFamily: 'Roboto-Light' }}
                inputSearchStyle={{ color: COLOURS.black, }}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Male"
                itemTextStyle={{ color: COLOURS.black }}
                selectedStyle={{ color: COLOURS.black }}
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}

            />
        </>
    )
}

export default DropDown_Here_2

const styles = StyleSheet.create({
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
        color: COLOURS.black
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})