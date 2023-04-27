import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import FilledButton from './Get Started/filledButton'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

export default function SearchComponent() {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    mode="outlined"
                    label="From"
                    style={styles.input}
                    theme={{
                        roundness: 6
                    }}
                    activeOutlineColor="#10A37F"
                    outlineColor="#DDD"
                    right={
                        <TextInput.Icon
                            icon={() => (
                                <FontAwesome5 name="plane-departure" size={18} color="#10A37F" />
                            )}

                        />
                    }
                />
                <TextInput
                    mode="outlined"
                    label="To"
                    style={styles.input}
                    theme={{
                        roundness: 6
                    }}
                    activeOutlineColor="#10A37F"
                    outlineColor="#DDD"
                    right={
                        <TextInput.Icon
                            icon={() => (
                                <FontAwesome5 name="plane-arrival" size={18} color="#10A37F" />
                            )}

                        />
                    }
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <TextInput
                    mode="outlined"
                    label="Departure"
                    style={styles.halfInput}
                    theme={{
                        roundness: 6
                    }}
                    activeOutlineColor="#10A37F"
                    outlineColor="#DDD"
                    right={
                        <TextInput.Icon
                            icon={() => (
                                <AntDesign name="calendar" size={16} color="#10A37F" />
                            )}

                        />
                    }
                />
                <TextInput
                    mode="outlined"
                    label="Return"
                    style={styles.halfInput}
                    theme={{
                        roundness: 6
                    }}
                    activeOutlineColor="#10A37F"
                    outlineColor="#DDD"
                    right={
                        <TextInput.Icon
                            icon={() => (
                                <AntDesign name="calendar" size={16} color="#10A37F" />
                            )}

                        />
                    }
                />
            </View>
            <View style={{ width: '100%' }}>
                <FilledButton title={"Search"} textStyle={{ textTransform: 'none', fontSize: 18 }} color={"#FFA500"} style={{ width: '100%', borderRadius: 12 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        flex: .4,
        backgroundColor: '#fff',
        borderRadius: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#777",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 5,
        paddingHorizontal: 24,
        paddingVertical: 18
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        gap: 8,
    },
    input: {
        width: '100%',
        backgroundColor: '#FFFFFE'
    },
    halfInput: {
        width: '48%',
        backgroundColor: '#FFFFFE'
    }
})