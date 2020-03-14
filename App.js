import React, { useState,useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';

import { SearchBar } from 'react-native-elements';
import { Header } from 'react-native-elements';
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
      <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Home', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
      <SafeAreaView>
        <SearchBar
        placeholder="Type Here..."
        onChangeText={(newTerm)=> setTerm(newTerm)}
        value={term}
        onSubmitEditing={()=>console.log('done editing')}
      />
      <WeatherList results={results}/>
      {errorMsg ? <Text style={{alignSelf:'center', alignContent:'center'}}> {errorMsg} </Text>: null}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
