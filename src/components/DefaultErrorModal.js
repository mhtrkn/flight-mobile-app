import React, { useState } from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

export default function DefaultErrorModal({ modalVisible, onPress }) {

    return (
        <Modal visible={modalVisible} transparent>
            <View style={styles.modalContainer}>
                <View style={styles.animationContainer}>
                    <LottieView
                        source={require("../../assets/error.json")}
                        autoPlay
                        loop
                        speed={.7}
                        style={{
                            width: 200,
                            height: 200,
                        }}
                    />
                    <View style={styles.modalText}>
                        <Text style={styles.errorText}>
                            Incorrect E-mail or Password
                        </Text>
                        <TouchableOpacity style={styles.errorBtn} onPress={onPress}>
                            <Text style={styles.errBtnText}>
                                Close
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );

}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    animationContainer: {
        width: '80%',
        backgroundColor: '#EEEEEF',
        borderWidth: 2,
        borderColor: '#FFFFFE',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '10%'
    },
    modalText: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24
    },
    errorText: {
        fontSize: 18,
        fontWeight: 600
    },
    errorBtn: {
        borderWidth: 1,
        backgroundColor: '#D32F2F',
        borderColor: 'red',
        width: '95%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingVertical: '5%'
    },
    errBtnText: {
        fontSize: 16,
        fontWeight: 800,
        color: 'white'
    }
});
