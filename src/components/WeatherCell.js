import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import {Icon,Seperator} from 'react-native-elements';

const WeatherCell = (item) => {
    return (
        <View style={styles.containerStyle}>
            <Icon/>
            <Text style={styles.labelTemperature}>Temerature</Text>
            <Text style={styles.labelDescriptionStyle}>Description</Text>
            <Text style={styles.labelDateStyle}>Date</Text>
        </View>
    );
};

const styles = StyleSheet.create({
containerStyle: {
    flex: 1
},
labelTemperature: {},
imageIconStyle: {},
labelDateStyle: {},
labelDescriptionStyle: {}
});

export default WeatherCell;