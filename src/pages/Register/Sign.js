import { Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { register } from '../../../assets'
import { TextInput, Title } from 'react-native-paper'
import FilledButton from './../../components/Get Started/filledButton';
import OutlineButton from './../../components/Get Started/outlineButton';
import OR from '../../components/OR';
import Bold from '../../components/Bold';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const navigation = useNavigation()
    const handleLogin = () => {
        navigation.navigate('Login')
    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <SafeAreaView style={styles.pageContainer}>
                <View style={styles.imageContainer}>
                    <Image source={register} style={styles.image} />
                </View>
                <View>
                    <Text style={{ fontSize: 32, fontWeight: 600 }}>
                        Sign Up
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
                        <TextInput
                            mode="outlined"
                            label="Phone"
                            outlineColor='#DDD'
                            activeOutlineColor='#10A37F'
                            theme={{
                                roundness: 12,
                            }}
                            onChangeText={text => setPhone(text)}
                        />
                        <View style={{ height: '4%' }} />
                        <FilledButton style={{ width: '100%', paddingVertical: 14, }} title={"Sign Up"} color={"#10A37F"} />
                        <View style={{ height: 0 }} />
                        <OR />
                        <View style={styles.haveAccountText}>
                            <Text style={styles.accountText}>
                                Already have an account? <Bold onPress={handleLogin} style={styles.loginText}>Login</Bold>
                            </Text>
                        </View>
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
    loginText: {
        fontSize: 18,
        fontWeight: 700,
        color: '#10A37F',
    },
    boldBtn: {
    },
    haveAccountText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        paddingVertical: 4
    },
    accountText: {
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        color: '#999',
    }
})