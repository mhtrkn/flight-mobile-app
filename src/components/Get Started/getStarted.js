import { SafeAreaView, Text, StyleSheet, Image, View } from 'react-native'
import React, { Fragment, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { getStartedLogin, getStartedSign, getStartedStart } from '../../../assets'
import OutlineButton from "./outlineButton"
import FilledButton from "./filledButton"
import SkipButton from './skipButton'
import { useDispatch } from 'react-redux';
import { appStarted } from '../../redux/actions'

const GetStarted = () => {
    const dispatch = useDispatch()
    const [step, setStep] = useState(1)
    const navigation = useNavigation()
    const data = [
        {
            'id': 1,
            'photo': `${getStartedLogin}`,
            'description': "Welcome to your account! Log in to take advantage of all the benefits of our app."
        },
        {
            'id': 2,
            'photo': `${getStartedSign}`,
            'description': "Welcome to your account! Log in to take advantage of all the benefits app."
        },
        {
            'id': 3,
            'photo': getStartedStart,
            'description': "Log in to continue. Start your personalized experience with your account."
        },
    ]
    const handleNextStep = () => {
        data.length > step && setStep(step + 1)
        if (data.length === step) {
            dispatch(appStarted())
            navigation.navigate('Login')
        }
    }
    const handleBackStep = () => {
        step > 0 && setStep(step - 1)
    }
    const handleSkip = () => {
        dispatch(appStarted())
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.skipBtnContainer}>
                <SkipButton title={"Skip"} onPress={handleSkip} />
            </View>
            {
                data && data.map((item) => {
                    return (
                        <Fragment key={item.id}>
                            {step === item.id &&
                                <Fragment>
                                    <View style={styles.imageContainer}>
                                        <Image source={item.photo} style={styles.image} />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.text}>{item.description}</Text>
                                    </View>
                                </Fragment>
                            }
                        </Fragment>
                    )
                })
            }
            <View style={styles.dotContainer}>
                {data.map((dot, key) => {
                    return (
                        <View style={[styles.dot, { width: step === key + 1 ? 24 : 8, backgroundColor: step === key + 1 ? '#10A37F' : '#DDD' }]} key={key} />
                    )
                })}
            </View>
            <View style={[styles.buttonContainer, { justifyContent: step === 1 ? 'flex-end' : 'space-between' }]}>
                {step !== 1 && <OutlineButton onPress={handleBackStep} title={"Back"} color={"#10A37F"} />}
                <FilledButton onPress={handleNextStep} title={data.length === step ? "Start" : "Next"} color={"#10A37F"} />
            </View>
        </SafeAreaView>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    skipBtnContainer: {
        width: '85%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    imageContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '50%',
        marginVertical: '4%',
    },
    image: {
        width: '85%',
        height: '100%',
        resizeMode: 'contain',
    },
    textContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        width: '85%',
        fontSize: 19,
        fontWeight: 400,
        textAlign: 'center'
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        paddingVertical: 24,
        gap: 12
    },
    dot: {
        width: 24,
        height: 8,
        borderRadius: 50,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '85%',
        position: 'absolute',
        bottom: '10%',
        alignItems: 'center',
    }
})