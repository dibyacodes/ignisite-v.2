// import { useState } from "react"
import { useMultiForm } from "../../customHooks/useMultiForm"
import { DateAndTime, Introduction, Personal } from "../components/MultiForm"


function Booking() {
    // const today = new Date()
    // const [date, setDate] = useState(today)

    // const [name, setName] = useState("")
    // const [agenda,setAgenda] = useState("")


    const { onStep, next, prev, isFirstStep, isLastStep} = useMultiForm([
        <Introduction />,
        <Personal />,
        <DateAndTime />
    ])

    // const subjectMatter = [
    //     {
    //         name: 'custom website design & development',
    //         description: "We're here to deliver web & software solutions, custom made for your business that stands out.",

    //     },

    //     {
    //         name: "Website Redesign & Maintenance",
    //         description: "Not satisfied with the design you already have? No worries, we value transparency & working closely with your expectations.",


    //     },

    //     {
    //         name: "Custom Software Development",
    //         description: "Our software, don't only look good, but also solves the problems, that needs to be solved.",

    //     },

    //     {
    //         name: "SEO Optimization Services",
    //         description: "Rank in the top most possible rank in google searches, and land in your customer's minds.",


    //     }]




    return (
        <>
            <div className="bg-black h-screen py-10 px-4 flex flex-col gap-5">
                {/* <Calendar value={date} onChange={(e)=>setDate(e.value)} selectRange/> */}


                {/* <div className="flex flex-col gap-4">
                    <h1 className="text-gray-950 font-inter font-semibold text-3xl capitalize">
                        Discuss Possibilities & Visions
                    </h1>

                    <p className="text-gray-800 font-inter leading-tight max-w-[90%]">
                        Book a call with us & talk about what you expect and let us know how may we help you.
                    </p>
                </div> */}


                <div className="">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-gray-100 font-semibold font-inter text-4xl">
                            Book a call with us
                        </h1>
                        <p className="text-gray-200 font-inter leading-tight">
                            Have an idea that you wanna sell? Sure let's see what we got to help you
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-end gap-5 bg-radial-[at_0%_50%] from-black to-purple-600 to-100% backdrop-blur-3xl p-6 rounded-xl">
                    <div>

                        <div className="relative">
                            {onStep}
                        </div>


                    </div>

                    <div className="flex pt-5 flex-col gap-5 justify-center">
                        {
                            !isLastStep &&
                            <button className="bg-white/30 text-white text-lg font-inter px-4 py-1 rounded-md" type="button" onClick={next}>
                                {"Next"}
                            </button>
                        }
                        {
                            !isFirstStep &&
                            <button className="text-white text-sm font-inter px-4 py-1 rounded-md" type="button" onClick={prev}>
                               {"Back"}
                            </button>
                        }




                        {
                            isLastStep &&
                            <button className="bg-black/50 text-black text-lg font-inter px-4 py-1 rounded-md">
                                Book
                            </button>
                        }
                    </div>


                </div>




            </div >
        </>
    )
}

export default Booking







// < div >
// <div className=" rounded-2xl flex flex-col gap-5">
//     <div className="flex flex-col">
//         <label className="font-inter text-gray-500" htmlFor="date">Name *</label>

//         <input className="text-black border-1 border-gray-950/25 px-2 py-1 rounded-md font-inter outline-none" required type="text" value={name} placeholder="Full Name"
//             onChange={(e) => setName(e.target.value)} />
//     </div>

//     <div className="flex flex-col">
//         <label className="font-inter text-gray-500" htmlFor="date">Pick a date *</label>

//         <input className="text-black border-1 border-gray-950/25 max-w-fit px-4 py-1 rounded-md font-inter outline-none" required type="date" value={date ? date.toISOString().split('T')[0] : ""}
//             onChange={(e) => setDate(new Date(e.target.value))
//             } />
//     </div>

//     <div className="flex flex-col">
//         <label className="font-inter text-gray-500" htmlFor="date">Choose an agenda *</label>

//         <div className="flex flex-col gap-2">

//             {
//                 subjectMatter.map((items) => (
//                     <div className={`flex flex-row items-center border-1 border-gray-600/50 py-1 rounded-md gap-2 px-2 capitalize bg-purple-200`}>
//                         <input readOnly id="element" className={``} type="checkbox" name="choice" value={items.name} />
//                         <label>{items.name}</label>
//                     </div>
//                 ))
//             }
//         </div>

//     </div>
// </div>
//             </div >

// <button onClick={() => console.log(String(date))
// }>
//     click
// </button>