import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FlightCard from './FlightCard'

export default function Flights() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.flightText}>Upcoming Flights</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAllText}>
                        {`See All >`}
                    </Text>
                </TouchableOpacity>
            </View>
            <FlightCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingVertical: 8,
        flexDirection: 'column',
        gap: 24
    },
    flightText: {
        fontWeight: 800,
        fontSize: 16,
        color: '#333'
    },
    seeAllText: {
        color: '#10A37F',
        fontSize: 16,
        fontWeight: 600
    },
    flightCard: {
        width: '100%',
        flex: .8,
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: "#999",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .3,
        shadowRadius: 10.5,
        elevation: 10,
        flexDirection: 'column',

    }
})