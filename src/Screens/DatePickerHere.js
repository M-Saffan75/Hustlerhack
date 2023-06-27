import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { COLOURS } from '../Components/ThemeColours';
import { Button, Text, TouchableOpacity, useColorScheme, View } from 'react-native';

const DatePickerHere = () => {
    
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    this.state = {
        date: new Date()
    }
    return (
        <>
            <View style={{width:100}}>
                <DatePicker
                    date={this.state.date}
                    mode={'date'}
                    onDateChange={date => this.setState({ date })}
                    modal
                    open={open}
                    format={'YYYY-MM-DD '}
                    onConfirm={value => {
                        setOpen(false);
                        setDate(value);
                    }}
                    onCancel={() => {
                        setOpen(false);
                    }}
                />
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={{
                        marginVertical: 20,
                        // width: 200,
                        paddingVertical: 7,
                        borderRadius: 10,
                        backgroundColor: COLOURS.black
                    }} onPress={() => setOpen(true)}>
                        <Text style={{
                            fontFamily: 'Roboto-Medium', textAlign: 'center', fontFamily: 'Roboto-Medium',
                            color: COLOURS.white, letterSpacing: 1.2
                        }}>Open Expiry Date</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ color: COLOURS.black, fontFamily: 'Roboto-Medium', textAlign: 'center', elevation: 10, letterSpacing: 2 }}>Date: {date?.toLocaleDateString()}</Text>
                </View>
            </View>
        </>
    );
};

export default DatePickerHere;