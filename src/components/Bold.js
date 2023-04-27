import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bold = ({ onPress, style, children }) => {
    return (
        <Text onPress={onPress} style={style}>
            {children}
        </Text>
    )
}

export default Bold