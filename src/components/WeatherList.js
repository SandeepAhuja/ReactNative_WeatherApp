import React from 'react';
import { Text,StyleSheet,FlatList, View } from "react-native";
import WeatherCell from './WeatherCell';

const WeatherList = ({results}) => {
    return (
    <View>
        <Text>Results are: {results.length}</Text>
        <FlatList
            data={results}
            keyExtractor={result=> result.dt_txt}
            renderItem={({item})=> {
            return <WeatherCell item={item}/>
            }}
        />
    </View>
    );
};

const styles = StyleSheet.create({
title:{
    fontSize: 18,
    fontWeight: 'bold'
}

});
export default WeatherList;