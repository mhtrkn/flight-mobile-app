import { Alert, Image, Modal, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useCallback } from 'react'
import { register } from '../../../assets'
import { TextInput, Title } from 'react-native-paper'
import FilledButton from './../../components/Get Started/filledButton';
import OutlineButton from './../../components/Get Started/outlineButton';
import OR from '../../components/OR';
import { useDispatch, useSelector } from 'react-redux';
import { isAuth } from '../../redux/actions';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebaseConfig'
import LottieView from 'lottie-react-native';
import PageLoading from '../../components/PageLoading';

export default function Login({ navigation }) {
    const dispatch = useDispatch()
    const handleRoute = () => {
        navigation.navigate('Sign')
    }
    const handleForgotPass = () => {
        navigation.navigate('Forgot Password')
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [modalVisible, setVisible] = useState(false)
    const handleStart = () => {
        setVisible(true)
        if (!email && !password) {
            return null
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("i'm in")
            })
            .catch((error) => {
                console.log('Error: ', error)
            })

        setTimeout(() => {
            navigation.navigate('Main')
            setVisible(false)
        }, 2000)
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <SafeAreaView style={styles.pageContainer}>
                <Modal visible={modalVisible} transparent>
                    <View style={styles.modalContainer}>
                        <View style={styles.animationContainer}>
                            <LottieView
                                source={require("../../../assets/flight.json")}
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
                <View style={styles.imageContainer}>
                    <Image source={register} style={styles.image} />
                </View>
                <View>
                    <Text style={{ fontSize: 32, fontWeight: 600 }}>
                        Login
                    </Text>
                </View>
                <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <View style={styles.scrollInside}>
                        <TextInput
                            mode="outlined"
                            label="E Mail"
                            outlineColor='#DDD'
                            activeOutlineColor='#10A37F'
                            theme={{
                                roundness: 12
                            }}
                            onChangeText={text => setEmail(text)}
                        />
                        <TextInput
                            mode="outlined"
                            label="Password"
                            outlineColor='#DDD'
                            activeOutlineColor='#10A37F'
                            secureTextEntry
                            theme={{
                                roundness: 12,
                            }}
                            onChangeText={text => setPassword(text)}
                        />
                        <View style={styles.forgotPass}>
                            <TouchableOpacity onPress={handleForgotPass} style={styles.forgotPassBtn}>
                                <Text style={styles.forgotPassText}>
                                    Forgot Password?
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: '10%' }} />
                        <FilledButton onPress={handleStart} style={{ width: '100%', paddingVertical: 14, }} title={"Login"} color={"#10A37F"} />
                        <OR />
                        <OutlineButton onPress={handleRoute} style={{ width: '100%', paddingVertical: 12, }} title={"Sign Up"} color={"#10A37F"} />
                    </View>
                </ScrollView>
            </SafeAreaView>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    animationContainer: {
        width: 200,
        height: 200,
        backgroundColor: '#EEEEEF',
        borderWidth: 5,
        borderColor: '#FFF',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageContainer: {
        flex: 1,
        width: '85%',
    },
    imageContainer: {
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '5%'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    scrollContainer: {
        width: '100%',
        marginTop: 12,
    },
    scrollInside: {
        width: '100%',
        flexDirection: 'column',
        gap: 12,
        paddingVertical: 6,
        paddingBottom: '16%'
    },
    forgotPass: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    forgotPassBtn: {
        paddingVertical: 8,
    },
    forgotPassText: {
        fontSize: 16,
        fontWeight: 700,
        color: '#10A37F',
    }
})