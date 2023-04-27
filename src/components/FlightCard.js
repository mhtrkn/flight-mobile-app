import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlightCard = ({ nextTime, backTime }) => {
    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 0, flex: 1 }}>
            <View style={styles.container}>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '50%' }}>
                    <View style={{ backgroundColor: '#F2FAFB', borderRadius: 16, paddingHorizontal: 16, paddingVertical: 12 }}>
                        <Text style={{ color: '#3B99FF', fontSize: 15, fontWeight: 600 }}>May 30, 2022</Text>
                    </View>
                    <View style={{ backgroundColor: '#F2FAFB', borderRadius: 16, paddingHorizontal: 16, paddingVertical: 12 }}>
                        <Text style={{ color: '#3B99FF', fontSize: 15, fontWeight: 600 }}>1h 30 Min</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text>FlightCard</Text>
            </View>
        </View>
    )
}

export default FlightCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: .4,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1.6,
        borderBottomColor: '#DDD',
        paddingHorizontal: 18,
        paddingVertical: 12,
    },
    bottomContainer: {
        width: '100%',
        flex: .6,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 24,
        paddingVertical: 16,
        justifyContent: 'flex-start'
    }
})