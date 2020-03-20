import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const WeatherCell = (weather) => {
    return (
        <View style={styles.containerStyle}>
        <Text style={styles.labelTemperature}>Temerature: {weather.item.main.temp}</Text>
    <Text style={styles.labelDateStyle}>Date: {weather.item.dt_txt}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
containerStyle: {
    flex: 1,
    backgroundColor: '#AAAAAA',
    justifyContent: 'flex-start',
    margin: 10,
    borderWidth: 2,
    borderColor: 'grey'
},
labelTemperature: {
    height: 30
},
imageIconStyle: {
    alignSelf: 'flex-end',
    height: 50,
    width: 50,
    top: 10,
    left: 15,
    alignSelf: 'flex-end'
},
labelDateStyle: {
    height: 30,
},
labelDescriptionStyle: {
    height: 30,
    textAlignVertical: 'center'
}
});

export default WeatherCell;