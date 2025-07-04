import axios from "axios"
import { useEffect, useState } from "react"


interface bookingDatabaseResponse {
    client_name : string
}

function Admin(){

    const [databaseResponse,setDatabaseResponse] = useState([])

    useEffect(()=>{
        axios.get('https://25d3-2405-201-a805-e01c-10b7-23b7-3cac-dcdc.ngrok-free.app/admin/appointments')
        .then((res)=>setDatabaseResponse(res.data.message))
        .catch((err)=>console.log(err))
    })
    return(
        <>
        <div>
            {
                Array.isArray(databaseResponse) &&
                databaseResponse.map((items : bookingDatabaseResponse)=>(
                    <div>
                        {items.client_name}
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default Admin