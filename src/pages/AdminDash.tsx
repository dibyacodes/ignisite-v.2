import { useEffect, useState } from "react";
import axios from "axios";



interface bookingDetails {
    client_name: string,
    email: string,
    phone: number,
    meeting_date: string,
    meeting_time: string
}


interface serviceDetails {
    client_name: string,
    email: string,
    requestedService: string,
    client_phone: string
}

function AdminDash() {

    const [consultationBookings, setConsultationBookings] = useState([])
    const [serviceRequest, setServiceRequest] = useState([])
    const [isSectionHidden, setIsSectionHidden] = useState(false)
    const [isActive,setIsActive] = useState(true)

    function click(){
        setIsSectionHidden((prev)=>!prev)
        setIsActive((prev)=>!prev)
    }


    useEffect(() => {
        try {
            axios.get(`https://ignisite-backend.onrender.com/admin/allbookings`, { headers: { 'ngrok-skip-browser-warning': 'any-value' }, withCredentials: true })
                .then((res) => {
                    setConsultationBookings(res.data.message)
                }).catch((err)=>console.log(err.response.data.message))

            axios.get('https://ignisite-backend.onrender.com/admin/service/requests')
                .then((res) => setServiceRequest(res.data.message))
                .catch((err)=>console.log(err.response.data.message))

        } catch (error) {
            console.log(`An Error Occured`)
        }
    }, [])

    return (
        <>
            <div className="bg-zinc-950 py-20 gap-10 min-h-screen flex flex-col items-center pt-[10%]">

                <div className="flex flex-col gap-2 items-center">
                    <h1 className="text-gray-100 font-helvetica font-semibold capitalize text-5xl">
                        welcome to IgniSite Den
                    </h1>
                    <p className="text-gray-200 font-inter max-w-[50ch] capitalize text-center">
                        this is the admin panel. track all the bookings, and consultation calls from here.
                    </p>
                </div>

                <div className="flex flex-row gap-5">
                    <div className="w-fit bg-blue-600 rounded-xl p-5">
                        <h1 className="font-semibold text-5xl text-gray-100 font-inter">
                            {Array.isArray(consultationBookings) && consultationBookings.length}
                        </h1>
                        <p className="text-md max-w-[10ch] leading-tight font-helvetica font-semibold text-gray-200">consultation calls</p>
                    </div>

                    <div className="w-fit bg-blue-600 rounded-xl p-5">
                        <h1 className="font-semibold text-5xl text-gray-100 font-inter">
                            {Array.isArray(serviceRequest) && serviceRequest.length}
                        </h1>
                        <p className="text-md max-w-[10ch] leading-tight font-helvetica font-semibold text-gray-200">service requests</p>
                    </div>
                </div>

                <div className="flex flex-row justify-between min-w-[20%] max-w-[50%]">
                    <button onClick={click} className={`text-gray-100 font-inter flex flex-row gap-2 items-center ${isActive ? "underline" : ''}`}>
                        consultation call
                        <div hidden={consultationBookings.length > 0 ? false : true} className="bg-blue-500 font-semibold px-2 rounded-full">
                            {consultationBookings?.length}
                        </div>
                    </button>

                    <button onClick={click} className={`text-gray-100 font-inter flex flex-row gap-2 items-center ${isActive ? "" : 'underline'}`}>
                        Service Bookings
                        <div hidden={serviceRequest.length > 0 ? false : true} className="bg-blue-500 font-semibold px-2 rounded-full">
                            {serviceRequest?.length}
                        </div>
                    </button>
                </div>

                {/* bookings */}
                <div hidden={isSectionHidden} className="flex w-[80%] flex-row items-center gap-5 justify-center pt-[2%]">
                    <div className="flex flex-row gap-5">
                        {Array.isArray(consultationBookings) &&
                            consultationBookings.map((items: bookingDetails) => (
                                <div className="bg-zinc-800 p-6 min-w-[40ch] rounded-lg">
                                    <div className="flex flex-col gap-5">
                                        <div>
                                            <div className="bg-green-700/50 w-fit px-4 pt-1 rounded-full border-2 border-green-500 font-helvetica text-gray-100 flex flex-row items-center">
                                                Consultation Call
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3">

                                            <div>
                                                <h1 className="font-helvetica text-gray-100 capitalize text-2xl font-semibold">
                                                    {items.client_name}
                                                </h1>
                                                <h1 className="text-blue-100 font-semibold capitalize font-inter text-lg">

                                                    {items.meeting_date} from {items.meeting_time}

                                                </h1>
                                            </div>
                                            <hr className="border-1 border-gray-300" />
                                            <div className="flex flex-col justify-start gap-2 pt-5">
                                                <a href={`mailto:${items.email}`}>
                                                    <p className="font-helvetica w-fit text-lg font-semibold underline rounded-md text-blue-400">
                                                        {items.email}↗
                                                    </p>
                                                </a>
                                                <a href={`tel:${items.phone}`}>
                                                    <p className="font-helvetica w-fit font-semibold underline rounded-md text-gray-100">
                                                        {items.phone}
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-2">

                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* service request */}
                <div hidden={!isSectionHidden} className="flex w-[80%] flex-row items-center gap-5 justify-center pt-[2%]">
                    <div className="flex flex-row gap-5">
                        {Array.isArray(serviceRequest) &&
                            serviceRequest.map((items: serviceDetails) => (
                                <div className="bg-zinc-800 p-6 min-w-[40ch] rounded-lg">
                                    <div className="flex flex-col gap-5">
                                        <div>
                                            <div className="bg-blue-700/50 w-fit px-4 pt-1 rounded-full border-2 border-blue-500 font-helvetica text-gray-100 flex flex-row items-center">
                                                Service Requests
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3">

                                            <div>
                                                <h1 className="font-helvetica text-gray-100 capitalize text-2xl font-semibold">
                                                    {items.client_name}
                                                </h1>
                                                <h1 className="text-blue-100 font-semibold capitalize font-inter text-lg">

                                                    {items.requestedService}

                                                </h1>
                                            </div>
                                            <hr className="border-1 border-gray-300" />
                                            <div className="flex flex-col justify-start gap-2 pt-5">
                                                <a href={`mailto:${items.email}`}>
                                                    <p className="font-helvetica w-fit text-lg font-semibold underline rounded-md text-blue-400">
                                                        {items.email}↗
                                                    </p>
                                                </a>
                                                <a href={`tel:${items.client_phone}`}>
                                                    <p className="font-helvetica w-fit font-semibold underline rounded-md text-gray-100">
                                                        {items.client_phone}
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-2">

                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDash