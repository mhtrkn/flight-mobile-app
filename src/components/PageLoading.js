import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import LottieView from 'lottie-react-native';

export default function PageLoading({ modalVisible }) {

    return (
        <Modal visible={modalVisible} transparent>
            <View style={styles.modalContainer}>
                <View style={styles.animationContainer}>
                    <LottieView
                        source={require("../../assets/flight.json")}
                        autoPlay
                        loop
                        speed={1.2}
                        style={{
                            width: 200,
                            height: 200
                        }}
                    />
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
        width: 180,
        height: 180,
        backgroundColor: '#EEEEEF',
        borderWidth: 5,
        borderColor: '#FFF',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
