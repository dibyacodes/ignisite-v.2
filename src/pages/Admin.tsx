import axios from "axios"
import { useEffect, useState } from "react"


interface bookingDatabaseResponse {
    client_name : string
}

function Admin(){

    const [databaseResponse,setDatabaseResponse] = useState([])

    useEffect(()=>{
        axios.get('https://2medx1om4qnk.share.zrok.io/admin/appointments')
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