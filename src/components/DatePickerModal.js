import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch } from 'react-redux';
import { dateTimePickerModal, departureChange, returnTimeChange } from '../redux/actions';


export default function DatePickerModal({ departure }) {
    const dispatch = useDispatch();
    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        const time = currentDate.toLocaleTimeString('tr-TR', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        if (departure) {
            dispatch(departureChange(time))
        } else {
            dispatch(returnTimeChange(time))
        }
    }


    const handleClose = () => {
        dispatch(dateTimePickerModal())
    }

    const handleConfirm = (date) => {
        setSelectedDate(date);
        setDatePickerVisibility(false);
    };

    return (
        <View style={styles.container}>
            <Modal visible={true} transparent={true}>
                <TouchableOpacity style={styles.modalBackground} onPress={handleClose}>
                    <View style={styles.modalContainer}>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={"datetime"}
                            is24Hour={true}
                            display={"inline"}
                            onChange={onChange}
                            accentColor="#10A37F"
                            onConfirm={onChange}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    textInput: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        backgroundColor: '#222',
        padding: 20,
        width:'95%',
        justifyContent: 'center',
        paddingRight: 32,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .35,
        shadowRadius: 20.5,
    },
});