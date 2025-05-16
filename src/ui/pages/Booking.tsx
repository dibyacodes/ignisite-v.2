import { useState } from "react"

function Booking() {
    const today = new Date()
    const [date, setDate] = useState(today)

    const [name,setName] = useState("")
    // const [agenda,setAgenda] = useState("")

    return (
        <>
            <div className="bg-radial-[at_100%_-50%] from-purple-500 to-white to-70% h-screen px-4 flex flex-col justify-center gap-5">
                {/* <Calendar value={date} onChange={(e)=>setDate(e.value)} selectRange/> */}
                <div>
                    <h1 className="text-5xl font-inter animate-bounce rotate-x-1">
                        🚀
                    </h1>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-gray-950 font-inter font-semibold text-3xl capitalize">
                        Discuss Possibilities & Visions
                    </h1>

                    <p className="text-gray-800 font-inter leading-tight max-w-[90%]">
                        Book a call with us & talk about what you expect and let us know how may we help you.
                    </p>
                </div>

                <hr className="border-1 border-black/50 rounded-full" />

                <div>
                    <div className=" rounded-2xl">
                        <div className="flex flex-col">
                            <label className="font-inter text-gray-500" htmlFor="date">Name *</label>

                            <input className="text-black border-1 border-gray-950/25 px-2 py-1 rounded-md font-inter outline-none" required type="text" value={name} placeholder="Full Name"
                            onChange={(e)=>setName(e.target.value)} />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-inter text-gray-500" htmlFor="date">Pick a date *</label>

                            <input className="text-black border-1 border-gray-950/25 max-w-fit px-4 py-1 rounded-md font-inter outline-none" required type="date" value={date ? date.toISOString().split('T')[0] : ""}
                            onChange={(e)=>setDate(new Date(e.target.value))
                             } />
                        </div>
                    </div>
                </div>

                <button onClick={()=>console.log(String(date))
                }>
                    click
                </button>

            </div>
        </>
    )
}

export default Booking