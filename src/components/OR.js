import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OR = () => {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={{ width: '10%', textAlign: 'center', color: '#AAA' }}>OR</Text>
            <View style={styles.line} />
        </View>
    )
}

export default OR

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#DDD'
    }
})