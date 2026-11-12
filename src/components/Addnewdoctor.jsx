import React from 'react'
import {useState} from 'react'
import Home from './Home'
function Addnewdoctor() {
let[name, setName] = useState('')
let[age, setAge] = useState('')
let[specialization, setSpecialization] = useState('')
let[gender, setGender] = useState('')
let[salary, setSalary] = useState('')
let[newdoctor,setNewdoctor] = useState(null)
function handlesubmit(e){
    e.preventDefault()
    setNewdoctor({name, age, specialization, gender, salary})
    console.log(newdoctor)
}
    return (
        <div>
            <h1>Add new doctor</h1>
            <form action="" className='doctorform' onSubmit={handlesubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter name' />
                <input value={specialization} onChange={(e) => setSpecialization(e.target.value)} type="text" placeholder='Enter specialization' />
                <select value={gender} onChange={(e) => setGender(e.target.value)} name="" id="">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input value={age} onChange={(e) => setAge(e.target.value)} type="text" placeholder='Enter age' />
                <input value={salary} onChange={(e) => setSalary(e.target.value)} type="text" placeholder='Enter salary' />
                <button type="submit">Add Doctor</button>
            </form>
            <Home newdoctor={newdoctor} />

        </div>
    )
}

export default Addnewdoctor