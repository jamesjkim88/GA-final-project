import React, { useState, useEffect } from 'react'
import apiServce from '../../utils/apiService';

export default function CovidNumbers(){

  const [covid19Data, setCovid19Data] = useState([]);

  async function getCovid19Data(){
    try{
      const data = await apiServce.getCovid19Data();
      // setCovid19Data(data)
      console.log(data);
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    getCovid19Data()
  }, [])

  console.log(covid19Data);

  return(
    <>
    <h1>{covid19Data}</h1>
    </>
  )
}
