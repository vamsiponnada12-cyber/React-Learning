import React, { useState } from 'react'
import axios from 'axios'
function Weather() {
    let [city,setCity]=useState('')
    let [weather,setWeather]=useState('')
    async function handleform(e){
        e.preventDefault()
        let response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=466ddaa21a8de191e9f608bd11a56acb`)
        setWeather(response.data)
    }
    return (
        <div>
            <h1>Weather</h1>
        <form action="" onSubmit={handleform}>
            <input type="text"  onChange={(e)=>setCity(e.target.value)} placeholder='enter city name' />
            <button type='submit'>search</button>
        </form>
        {weather && <h1>{weather.main.temp}</h1>}
        </div>
    )
}

export default Weather