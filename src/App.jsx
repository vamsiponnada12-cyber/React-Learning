import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import './components/styles.css'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
import {useState} from 'react'
import { useEffect } from 'react'
import Home from './components/Home'

function App() {
  let[count, setCount] = useState(0)
  let[val,setVal] = useState(0)
  // useEffect(()=>{
  //   console.log('api running')
  // })
  // useEffect(()=>{
  //   console.log('api running')
  // },[])
  useEffect(()=>{
    console.log('api running')
  },[val])

  return (
    <div>
      <button onClick={()=>{
        setVal(val+1)
      }}>update val</button>
      {count}
      <button onClick={()=>{
        setCount(count+1)
        console.log(count)
      }}>increment</button>
      <Navbar/>
      <Section/>
      <div className='doctorcontainer'>
        <Doctorcard name='john' age='25' specialty='Cardiologist' gender='Male'/>
        <Doctorcard name='jane' age='30' specialty='Neurologist' gender='Female'/>
        <Doctorcard name='bob' age='40' specialty='Pediatrician' gender='Male'/>
        <Doctorcard name='alice' age='35' specialty='Dermatologist' gender='Female'/>
        <Doctorcard name='charlie' age='50' specialty='Orthopedic Surgeon' gender='Male'/>
        <Doctorcard name='diana' age='45' specialty='Oncologist' gender='Female'/>
      </div>
      <Addnewdoctor/>
    </div>
  )
}

export default App