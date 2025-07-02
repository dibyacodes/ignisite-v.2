import axios from "axios";
import { useEffect, useState } from "react";

interface bookingResponse {
    client_name : string,
}

function Booking() {

    const [bookingList, setBookingList] = useState([])

    const [name,setName] = useState("")
    const [time,setTime] = useState("")
    const [date,setDate] = useState("")
    const [phone,setPhone] = useState("")

    useEffect(() => {
        axios.get('/call/bookings').then((res) => setBookingList(res.data.message || [])).catch((err) => console.log(err))

    })
    
    function handclick(){
        const sendData = {
            name : name,
            time : time,
            date : date,
            phone : phone
        }
        
        axios.post('/call/appointment',sendData)
        .then((res)=>console.log(res.data))
        .catch((err)=>console.log(err))
        
    }

    return (
        <>
            <h1 className="flex flex-col items-center h-screen justify-center">
                {/* <div>
                {bookingList}
            </div> */}

            <div className="">
                {Array.isArray(bookingList) &&
                    bookingList.map((items : bookingResponse)=>(
                        <div>
                            {items.client_name}
                        </div>
                    ))
                }
            </div>

            {/* name time date phone */}
            <div>
                <div>
                    <input onChange={(e)=>setName(e.target.value)} placeholder="name" type="text" className="bg-gray-200"/>

                    <input onChange={(e)=>setTime(e.target.value)} placeholder="time" type="text" className="bg-gray-200"/>

                    <input onChange={(e)=>setDate(e.target.value)} placeholder="date" type="text" className="bg-gray-200"/>

                    <input onChange={(e)=>setPhone(e.target.value)} placeholder="phone" type="text" className="bg-gray-200"/>
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