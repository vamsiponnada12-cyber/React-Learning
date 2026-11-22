import React from 'react'
import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios';

function Doctordetails() {
    let {id} = useParams()
    let[doctor,setDoctor] = useState({})
    useEffect(()=>{
        fetchdata();
    },[])


    async function fetchdata(){
        let response = await axios.get('https://doctorapibackend.onrender.com/doctors')
        let finaldata = response.data.find((val) => val.id == id);
        setDoctor(finaldata)
    }

    return (
        <div>Doctordetails{id}
        
        {doctor && (
            <div>
                <h1>{doctor.name}</h1>
                <p>Age: {doctor.age}</p>
                <p>Gender: {doctor.gender}</p>
                <p>Specialization: {doctor.specialization}</p>
                <p>Salary: {doctor.salary}</p>
            </div>
        )}
        </div>
    )
}

export default Doctordetails