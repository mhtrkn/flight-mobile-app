import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Modal } from 'react-native';
import LottieView from 'lottie-react-native';

export default function PageLoading({ visible }) {

    const [modalVisible, setVisible] = useState(visible)

    return (
        <View style={styles.container}>
            <Modal visible={modalVisible} transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.animationContainer}>
                        <LottieView
                            source={require("../../assets/plane.json")}
                            autoPlay
                            loop
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    animationContainer: {
        width: '80%',
        height: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
