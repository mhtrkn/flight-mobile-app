import { Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { register } from '../../../assets'
import { TextInput, Title } from 'react-native-paper'
import FilledButton from './../../components/Get Started/filledButton';
import OutlineButton from './../../components/Get Started/outlineButton';
import OR from '../../components/OR';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebaseConfig'
import PageLoading from '../../components/PageLoading';
import DefaultErrorModal from "../../components/DefaultErrorModal";

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
    const [errModalVisible, setErrModalVisible] = useState(false)
    const [modalVisible, setVisible] = useState(false)

    const handleStart = () => {
        if (!email && !password) {
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setVisible(true);
                setTimeout(() => {
                    navigation.navigate('Main');
                    setVisible(false);
                }, 2000)
            })
            .catch(() => {
                setErrModalVisible(true);
            })
    }

    const handleClose = () => {
        setErrModalVisible(false)
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <DefaultErrorModal modalVisible={errModalVisible} onPress={handleClose} />
            <SafeAreaView style={styles.pageContainer}>
                <PageLoading modalVisible={modalVisible} />
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