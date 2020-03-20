import React, { useState,useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';

import useWeather from './src/hooks/useWeather';
import WeatherList from './src/components/WeatherList';

const App = () => {
  const [term, setTerm] = useState('')
  const [weatherAPI, results, errorMsg] = useWeather();

  useEffect(()=>{
    weatherAPI(94040);
  },[]);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <WeatherList results={results}/>
      {errorMsg ? <Text style={{alignSelf:'center', alignContent:'center'}}> {errorMsg} </Text>: null}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
