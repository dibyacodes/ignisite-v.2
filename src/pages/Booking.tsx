import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";

// interface backendResponses {
//     success?: boolean,
//     message?: string,
// }

function Booking() {


    const { tab } = useParams()

    const defaultSelectedTab = tab ? parseInt(tab) : 0

    const [name, setName] = useState("")
    const [time, setTime] = useState("")
    const [date, setDate] = useState({})
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const callServices = ['book a consultation', 'send request for a service']
    const [selectedCallService, setselectedCallService] = useState(callServices[defaultSelectedTab] || callServices[0])

    const [selectedService, setSelectedService] = useState('')
    const ignisiteServices = ['build a custom website', 'website redesign & maintenance', 'SEO optimization service', 'web automation']

    const tarikh = new Date()

    const meeting_date = []
    const days = ['sun', 'mon', 'tues', 'wed', 'thu', 'fri', 'sat']
    // const month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

    const [buttonLoading, setButtonLoading] = useState(false)

    const timeSlots = ['4:30 to 5:00 PM', '5:30 to 6:00 PM']


    // const [serverResponse, setServerResponse] = useState<backendResponses>({})

    for (let i = 0; i < days.length; i++) {
        const dayIndex = (tarikh.getDay() + i) % 7
        const meetingDateData = {
            day: days[dayIndex],
            dates: tarikh.getDate() + i
        }
        meeting_date.push(meetingDateData)
    }




    async function handclick() {
        setButtonLoading(true)
        setTimeout(() => {
            setButtonLoading(false)
        }, 5000);

        if (selectedCallService === callServices[0]) {
            try {
                const consultationData = {
                    name: name,
                    email: email,
                    time: time,
                    date: date,
                    phone: phone,
                }
                await axios.post('/call/appointment', consultationData)
                    .then((res) => toast.success(res.data.message || "Request Sent Successfully"))
                    .catch((err) => toast.error(err.response.data.message || "Something went wrong, Please try again."))
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const serviceRequestData = {
                    client_name: name,
                    email: email,
                    requestedService: selectedService,
                    phone: phone
                }

                await axios.post('/service/request', serviceRequestData)
                    .then((res) => toast.success(res.data.message || "Request Sent Successfully")).catch((err) => toast.error(err.response.data.message || "Something went wrong, Please try again."))
            } catch (error) {
                console.log(error)
            }
        }

    }


    return (
        <>
            {/* <div hidden={serverResponse ? false : true} className={`${serverResponse.success === true ? "bg-blue-500" : "bg-red-500"} w-full`}>
                <h1 className="font-helvetica text-white flex flex-col items-center">
                    {
                        serverResponse.message
                    }
                </h1>
            </div> */}
            <div className="flex flex-col xl:flex-row gap-10 bg-[#1a1a1a]  p-6 items-center min-h-screen md:min-h-screen xl:min-h-screen lg:justify-center">

                <div className="flex flex-col justify-start h-full gap-5 xl:w-[50%] md:w-[90%] xl:p-10">
                    <div className="text-start flex flex-col gap-5">
                        <h1 hidden={selectedCallService !== callServices[0]} className="text-white font-meiland text-3xl xl:text-5xl capitalize font-semibold">
                            book a free session with the founders
                        </h1>

                        <h1 hidden={selectedCallService !== callServices[1]} className="text-white font-meiland text-3xl xl:text-5xl capitalize font-semibold">
                            select an igniSite service to launch your success
                        </h1>

                        <div className="text-white flex flex-row gap-5 w-full md:w-[90%]">
                            {
                                callServices.map((item) => {
                                    const isSelected = selectedCallService === item
                                    return (
                                        <label key={item} className={`${isSelected ? "bg-blue-900/50 border-2 border-blue-700" : "border-2 border-gray-100/50"} p-3 md:p-6 w-[50%] rounded-xl text-center flex flex-row justify-center items-center`}>
                                            <input checked={isSelected} onChange={(e) => setselectedCallService(e.target.value)} className={`sr-only`} name="day" type="radio" value={item} />
                                            <p className="font-inter capitalize text-md xl:text-xl">
                                                {item}
                                            </p>
                                        </label>
                                    )
                                })
                            }
                        </div>

                    </div>





                    <div hidden={selectedCallService !== callServices[0]} className="flex flex-col gap-7 font-inter md:max-w-[90%]">
                        <input onChange={(e) => setName(e.target.value)} placeholder="name" type="text" className="bg-gray-950/50 px-2 outline-none border-2 border-gray-500/50 rounded-lg py-3 text-white capitalize" />
                        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="bg-gray-950/50 px-2 outline-none border-2 border-gray-500/50 rounded-lg py-3 text-white" />


                        <div className="text-white gap-3 flex flex-col">
                            <h1 className="font-inter capitalize font-semibold">
                                Pick a date this week
                            </h1>
                            <div className="flex flex-wrap md:flex-nowrap flex-row gap-4 w-full">

                                {
                                    meeting_date.map((items) => {

                                        const value = items.dates + " " + items.day
                                        const isSelected = date === value

                                        return (

                                            <label key={items.dates} className={`${isSelected ? "bg-blue-900/50 border-2 border-blue-700" : "border-2 border-gray-100/25"} px-3 py-4 md:w-full rounded-xl text-center`}>
                                                <input checked={isSelected} onChange={(e) => setDate(e.target.value)} className={`sr-only`} name="day" type="radio" value={value} />
                                                <p className="font-inter capitalize">
                                                    {items.day}
                                                </p>

                                                <p>
                                                    {items.dates}
                                                </p>
                                            </label>

                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-white rounded-lg font-semibold font-inter flex flex-row items-center gap-2">Pick a time slot ( IST )</label>
                            <div className="flex flex-row gap-4">
                                {
                                    timeSlots.map((item) => {
                                        const isSelected = time === item
                                        return (
                                            <label className={`text-white ${isSelected ? "bg-blue-900/50 border-2 border-blue-700" : "border-2 border-gray-100/25"} rounded-lg px-4 py-2 font-inter flex flex-row items-center gap-2`}>
                                                <input value={item} onChange={(e) => setTime(e.target.value)} name="time" placeholder="time" type="radio" className="sr-only" />
                                                {item}
                                            </label>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <input onChange={(e) => setPhone(e.target.value)} placeholder="phone" type="tel" className="bg-gray-950/50 px-2 outline-none border-2 border-gray-500/50 rounded-lg py-3 text-white capitalize" required />
                        <div className="flex flex-col pt-4">
                            <button onClick={handclick} className="text-black rounded-xl font-inter bg-white p-4 cursor-pointer text-xl font-semibold capitalize">
                                <p hidden={buttonLoading}>Book the slot</p>
                                <p hidden={!buttonLoading} className="animate-pulse">Processing, please wait...</p>
                            </button>
                        </div>
                    </div>


                    <div hidden={selectedCallService !== callServices[1]} className="flex flex-col gap-7 font-inter md:max-w-[90%]">
                        <input onChange={(e) => setName(e.target.value)} placeholder="name" type="text" className="bg-gray-950/50 px-2 outline-none border-2 border-gray-500/50 rounded-lg py-3 text-white capitalize" />
                        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="bg-gray-950/50 px-2 outline-none border-2 border-gray-500/50 rounded-lg py-3 text-white" />

                        <div className="flex flex-col gap-2">
                            <label className="text-white rounded-lg font-semibold font-inter flex flex-row items-center gap-2">What are you looking for?</label>
                            <div className="flex flex-row flex-wrap gap-2">
                                {
                                    ignisiteServices.map((item) => {
                                        const isSelected = selectedService === item
                                        return (
                                            <label className={`text-white ${isSelected ? "bg-blue-900/50 border-2 border-blue-700" : "border-2 border-gray-100/25"} rounded-lg px-4 py-2 font-inter flex flex-row items-center gap-2`}>
                                                <input value={item} onChange={(e) => setSelectedService(e.target.value)} name="time" placeholder="time" type="radio" className="sr-only" />
                                                {item}
                                            </label>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <input onChange={(e) => setPhone(e.target.value)} placeholder="phone" type="number" className="bg-gray-950/50 px-2 outline-none border-2 border-gray-500/50 rounded-lg py-3 text-white capitalize" required />
                        <div className="flex flex-col pt-4">
                            <button onClick={handclick} className="text-black rounded-xl font-inter bg-white p-4 cursor-pointer text-xl font-semibold capitalize">
                                <p hidden={buttonLoading}>Send Request</p>
                                <p hidden={!buttonLoading} className="animate-pulse">Processing, please wait...</p>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <ToastContainer position="top-center"/>
            </div>
        </>
    )
}

export default Booking