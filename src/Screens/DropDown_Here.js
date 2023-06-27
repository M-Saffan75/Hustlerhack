import React, { useState } from 'react';
import { COLOURS } from '../Components/ThemeColours';
import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DropDown_Here = () => {
    const [value, setValue] = useState(null);

    const data = [
        { label: 'Mombasa', value: '1' },
        { label: 'Kwale', value: '2' },
        { label: 'Kilifi', value: '3' },
        { label: 'Tana River', value: '4' },
        { label: 'Lamu', value: '5' },
        { label: 'Taita/Taveta', value: '6' },
        { label: 'Garissa', value: '7' },
        { label: 'Wajir', value: '8' },
        { label: 'Mandera', value: '9' },
        { label: 'Marsabit', value: '10' },
        { label: 'Isiolo', value: '11' },
        { label: 'Meru', value: '12' },
        { label: 'Tharaka-Nithi', value: '13' },
        { label: 'Embu', value: '15' },
        { label: 'Kitui', value: '16' },
        { label: 'Machakos', value: '17' },
        { label: 'Makueni', value: '18' },
        { label: 'Nyandarua', value: '19' },
        { label: 'Nyeri', value: '20' },
        { label: 'Kirinyaga', value: '21' },
        { label: 'Muranga', value: '22' },
        { label: 'Kiambu', value: '23' },
        { label: 'Turkana', value: '24' },
        { label: 'West Pokot', value: '25' },
        { label: 'Samburu', value: '26' },
        { label: 'Trans Nzoia', value: '27' },
        { label: 'Uasin Gishu', value: '28' },
        { label: 'Elgeyo/Marakwet', value: '29' },
        { label: 'Nandi', value: '30' },
        { label: 'Baringo', value: '31' },
        { label: 'Laikipia', value: '32' },
        { label: 'Nakuru', value: '33' },
        { label: 'Narok', value: '34' },
        { label: 'Kajiado', value: '35' },
        { label: 'Kericho', value: '36' },
        { label: 'Bomet', value: '37' },
        { label: 'Kakamega', value: '38' },
        { label: 'Vihiga', value: '39' },
        { label: 'Bungoma', value: '40' },
        { label: 'Busia', value: '41' },
        { label: 'Siaya', value: '42' },
        { label: 'Kisumu', value: '43' },
        { label: 'Homa Bay', value: '44' },
        { label: 'Migori', value: '45' },
        { label: 'Kisii', value: '46' },
        { label: 'Nyamira', value: '47' },
        { label: 'Nairobi City', value: '14' },
    ];

    return (
        <>
            <Dropdown
                style={{
                    height: 50,
                    color: '#000',
                    borderRadius: 30,
                    paddingHorizontal: 10,
                    marginHorizontal: 10,
                    backgroundColor: COLOURS.light,
                }}
                placeholderStyle={{ color: 'grey', fontFamily: 'Roboto-Medium', fontSize: 14, paddingLeft: 5, }}
                selectedTextStyle={{ color: 'grey', fontSize: 14, fontFamily: 'Roboto-Medium', paddingLeft: 5, }}
                inputSearchStyle={{ color: 'grey', }}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Enter Location"
                searchPlaceholder="Search..."
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

export default DropDown_Here

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