import {useState, useEffect} from 'react';
import weather from '../service/api/weather';
import * as Constants from '../constants/constants';

export default ()=> {
    const [results, setResults] = useState([])
    const [errorMsg, setErrorMsg] = useState('')
    const weatherAPI = (zipCode)=> {
        console.log('start');
        weather.get(Constants.WEATHERURL)
        .then((response)=> {
            console.log(response.data.list);
            setResults(response.data.list);
        })
        .catch((error)=> {
            console.log(error);
            setErrorMsg(Constants.GENERIC_ERROR_MSG);
        });
      };

      useEffect(()=>{
        weatherAPI();
      },[]);
      return [weatherAPI, results, errorMsg];
};