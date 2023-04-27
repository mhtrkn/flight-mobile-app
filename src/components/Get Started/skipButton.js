import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const skipButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.skipButton}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default skipButton

const styles = StyleSheet.create({
    skipButton: {
        borderWidth: 0.5,
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 16,
        borderColor: '#777',
    }
})