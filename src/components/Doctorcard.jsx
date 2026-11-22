import React from 'react'
import {useNavigate} from 'react-router-dom'

function Doctorcard({name, age, specialization, gender,id}) {
    let navigate = useNavigate()
    return (
        <div>
            <div>
            <img src="https://cdn.pixabay.com/photo/2023/12/21/06/23/doctor-8461303_1280.jpg" alt="" />
            </div>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{specialization}</p>
            <p>{gender}</p>
            <button onClick={() => navigate(`/doctordetails/${id}`)}>view details</button>
        </div>
    )
}
export default Doctorcard