import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const FilledButton = ({ title, textStyle, normalFont, color, onPress, style }) => {
    return (
        <TouchableOpacity activeOpacity={.5} onPress={onPress} style={[styles.buttonStyle, { backgroundColor: color, }, style]}>
            <Text style={[styles.textStyle, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default FilledButton

const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 6,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 500,
        textTransform: 'uppercase',
        color: 'white'
    }
})