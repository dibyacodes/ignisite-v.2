import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

interface bookingDetails {
    client_name: string,
    email: string,
    phone: number,
    meeting_date: string,
    meeting_time: string
}


function AdminDash() {

    const [databaseData, setDatabaseDate] = useState([])

    useEffect(() => {
        axios.get('https://25d3-2405-201-a805-e01c-10b7-23b7-3cac-dcdc.ngrok-free.app/admin/allbookings').then((res) => setDatabaseDate(res.data.message)).catch((err) => console.log(err))
        console.log(databaseData)
    }, [])
    return (
        <>
            <div className="flex flex-row gap-5 flex-wrap justify-center items-center pt-[5%]">
                {Array.isArray(databaseData) &&
                    databaseData.map((items: bookingDetails) => (
                        <div className="bg-black p-6 min-w-[50ch] rounded-lg">
                            <div className="flex flex-col gap-2">
                                <h1 className="font-inter text-gray-100 capitalize text-2xl font-semibold">
                                    {items.client_name}
                                </h1>
                                <a href={`mailto:${items.email}`}>
                                    <p className="font-inter bg-gray-500/50 w-fit px-4 py-1 rounded-md text-white">
                                        {items.email}
                                    </p>
                                </a>
                                <a href={`tel:${items.phone}`}>
                                    <p className="font-inter w-fit rounded-md text-white">
                                        {items.phone}
                                    </p>
                                </a>
                            </div>

                            <div>
                                <h1 className="text-white">
                                    Time : {
                                    items.meeting_time
                                    }
                                </h1>

                                <h1 className="text-white">
                                    Date : {
                                    items.meeting_date
                                    }
                                </h1>
                            </div>

                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default AdminDash