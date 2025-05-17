import { useState } from "react"


let username:string;

export function Introduction(){

    const [name,setName] = useState('')
    username = name
    return (
        <>
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl leading-9 text-gray-100 font-semibold font-inter">
                Unlock more visibility
            </h1>
            <p className="text-purple-100 font-inter font-medium leading-5">
                Let's have a quick chat & discuss how we can help you achieve your vision.
            </p>
        </div>

        <form className="bg-gray-500/25 rounded-md p-6 py-10 flex flex-col gap-10">
            <div>
                <h1 className="text-2xl text-white font-inter">
                    Personal Details
                </h1>
            </div>

            <div className="text-white font-inter flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <label className="text-gray-400">Name *</label>
                    <input onChange={(e)=>setName(e.target.value)} required autoFocus type="text" placeholder="Full Name" className="border-1 border-gray-100/10 bg-gray-950/20 rounded-md w-full outline-none px-2 py-1"/>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-gray-400">Email *</label>
                    <input required placeholder="example@gmail.com" type="email" className="border-1 border-gray-100/10 bg-gray-950/20 rounded-md w-full outline-none px-2 py-1"/>
                </div>
            </div>
        </form>
        </>
    )
}


export function Personal(){
    return (
        <>
        <div className="text-white font-inter text-3xl">
            hello {username}

            {
                username === "Mayukh Sarma" || "mayukh sarma" || "Mayukh" || "mayukh" ? `. You are gay` : ``
            }
        </div>
        <form>
            <div>
                <label>Name</label>
                <input type="text" required />
            </div>
        </form>
        </>
    )
}


export function DateAndTime(){
    return (
        <>
        <div>
            date
        </div>
        <form>
            <div>
                <label>Pick a date</label>
                <input type="date" required />
            </div>
        </form>
        </>
    )
}