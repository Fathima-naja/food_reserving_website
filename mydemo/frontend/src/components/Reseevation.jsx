import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import axios from 'axios'
import toast from "react-hot-toast"


const Reseevation = () => {
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [date,SetDate]=useState("")
    const [time,SetTime]=useState("")
    const [phone,SetPhone]=useState(0)
    const navigate=useNavigate()

    const handleReservation= async (e)=>{
        e.preventDefault()
        try{
            const {data} = await axios.post("http://localhost:4000/api/v1/reservations/send",
            {firstName,lastName,email,phone,date,time},
            {
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true
            }
            ) 
            toast.success(data.message)
            setFirstName("")
            setLastName("")
            SetPhone(0)
            setEmail("")
            SetTime("")
            SetDate("")
            navigate("/success")
        }
        catch(error){
            toast.error(error.response.data.message)
        }
    }

  return (
    <section className='reservation' id='reservation'>
        <div className="container">
            <div className="banner">
                <img src='/reservation.png' alt='res'/>
            </div>
            <div className="banner">
                <div className="reservation_form_box">
                    <h1>MAKE A RESERVATION</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias veniam cupiditate molestias autem aut blanditiis magni facilis natus iusto. Inventore quo natus quibusdam saepe possimus neque id unde voluptate blanditiis.</p>

                    <form>
                        <div>
                            <input type='text' placeholder='firstname' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                            <input type='text' placeholder='lastname' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>

                        </div>
                        <div>
                            <input type='date' placeholder='date' value={date} onChange={(e)=>SetDate(e.target.value)}/>
                            <input type='time' placeholder='time' value={time} onChange={(e)=>SetTime(e.target.value)}/>
                        </div>
                        <div>
                            <input type='email' placeholder='email' value={email} className='email_tag' onChange={(e)=>setEmail(e.target.value)}/>
                            <input type='phone' placeholder='phone' value={phone}  onChange={(e)=>SetPhone(e.target.value)}/>

                        </div>

                        <button type='submit' onClick={handleReservation}>RESERVE NOW{""}<span><HiOutlineArrowNarrowRight/></span></button>
                    </form>
                </div>
            </div>
        </div>

    </section>
 
  )
}

export default Reseevation