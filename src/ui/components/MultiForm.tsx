// import { useState } from "react"

// const [name,setName] = useState(null)


export function Introduction(){
    return (
        <>
        <div>
            <h1>
                Let's talk business
            </h1>
        </div>
        </>
    )
}


export function Personal(){
    return (
        <>
        <div>
            Personal
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