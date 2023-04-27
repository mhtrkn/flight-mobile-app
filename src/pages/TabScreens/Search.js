import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Search() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Search</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})