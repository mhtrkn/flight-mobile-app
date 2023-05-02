import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { notFoundTicket } from '../../../../assets';
import SearchDetailHeader from '../../../components/SearchDetailHeader';

export default function SearchDetails({ navigation, route, ...props }) {
    const inComingData = route?.params?.data
    const emptyArr = []
    const [data, setData] = useState(inComingData);

    return (
        <>
            {data && data.length === 0 ?
                <View style={styles.container}>
                    <SearchDetailHeader data={inComingData} />
                    <Image source={notFoundTicket} style={{ flex: .5, width: '85%', resizeMode: 'contain' }} />
                    <Text style={styles.notFoundText}>
                        Sorry, no flights were found matching your criteria.{"\n"}Please try again by selecting a different date,{"\n"}destination or departure place.
                    </Text>
                </View>
                :
                <View style={styles.container}>
                    <Text>SearchDetails</Text>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notFoundText: {
        width: '90%',
        fontWeight: 500,
        fontSize: 16,
        textAlign: 'center',
    }
})