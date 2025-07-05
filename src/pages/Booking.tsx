import axios from "axios";
import { useState } from "react";


function Booking() {

    // const [bookingList, setBookingList] = useState([])

    const [name,setName] = useState("")
    const [time,setTime] = useState("")
    const [date,setDate] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")

    
    async function handclick(){
        const sendData = {
            name : name,
            email : email,
            time : time,
            date : date,
            phone : phone,
        }
        
        await axios.post('https://dbda-2405-201-a805-e01c-b72b-b381-4adc-b75b.ngrok-free.app/call/appointment',sendData)
        .then((res)=>console.log(res.data))
        .catch((err)=>console.log(err))
        
    }

    return (
        <>
            <h1 className="flex flex-col items-center h-screen justify-center">
                {/* <div>
                {bookingList}
            </div> */}

            {/* name time date phone */}
            <div>
                <div>
                    <input onChange={(e)=>setName(e.target.value)} placeholder="name" type="text" className="bg-gray-200"/>
                    <input onChange={(e)=>setEmail(e.target.value)} placeholder="email" type="email" className="bg-gray-200"/>

                    <input onChange={(e)=>setTime(e.target.value)} placeholder="time" type="time" className="bg-gray-200"/>

                    <input onChange={(e)=>setDate(e.target.value)} placeholder="date" type="date" className="bg-gray-200"/>

                    <input onChange={(e)=>setPhone(e.target.value)} placeholder="phone" type="number" className="bg-gray-200"/>
                </div>
            </div>

                <button onClick={handclick} className="text-white bg-black p-4 cursor-pointer font-inter">
                    click me to submit form
                </button>
            </h1>
        </>
    )
}

export default Booking