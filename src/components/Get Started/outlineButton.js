import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const OutlineButton = ({ title, color, onPress, style }) => {
    return (
        <>
            <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, { borderColor: color }, style]}>
                <Text style={[styles.textStyle, { color: color }]}>{title}</Text>
            </TouchableOpacity>
        </>
    )
}

export default OutlineButton

const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 6,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        borderWidth: 1
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 500,
        textTransform: 'uppercase'
    }
})