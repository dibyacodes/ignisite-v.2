import { useState } from "react"
import { useMultiForm } from "../../customHooks/useMultiForm";




let username: string;

export function Introduction() {

    const [name, setName] = useState('')


    username = name
    return (
        <>
            <div className="rounded-lg flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <h1 className="text-gray-100 text-2xl leading-tight font-inter font-semibold">
                        Want to discuss about your business?
                    </h1>

                    <p className="text-gray-300 leading-tight font-inter">
                        Let's talk about how <b>webconsolers</b> can help you achiever your visions.
                    </p>

                </div>

                <div className="text-white font-inter flex flex-col gap-5">

                    <div className="flex flex-col gap-2">
                        <label className="text-gray-100">Duration : </label>
                        <div className="flex gap-2">
                            <div className="flex flex-row gap-2 border-1 border-white/50 w-fit px-2 py-1 rounded-lg">
                                <input onChange={(e)=>console.log(e.target.value)} required value={"15 Min"}  name="durationRadio" className="outline-none" autoFocus type="radio" />
                                <label htmlFor="15min">15 min</label>
                            </div>

                            <div className="flex flex-row gap-2 border-1 border-white/50 w-fit px-2 py-1 rounded-lg">
                                <input onChange={(e)=>console.log(e.target.value)} value={"30 Min"} required name="durationRadio" className="outline-none" autoFocus type="radio"/>
                                <label htmlFor="30min">30 min</label>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export function Personal() {
    return (
        <>
            <div className="text-white font-inter text-3xl">
                hello {username}
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


export function DateAndTime() {
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