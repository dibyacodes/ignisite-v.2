
interface cardDetails {
    title: string,
    description?: string[],

}

// <div className=" flex flex-col gap-5 bg-radial-[at_50%_100%] from-gray-500 to-black to-70% border-1 border-gray-700 w-[90%] p-4 rounded-2xl">
//     <div className="flex flex-col gap-5">
//         <div className="bg-radial-[at_50%_50%] w-fit rounded-full from-black to-gray-500 to-90% border-2 border-gray-100/50 font-semibold">
//             <h1 className="text-gray-200 font-inter px-2">Save 50%</h1>
//         </div>
//         <div className="w-[90%]">
//             {/* card title */}
//             <h1 className="text-gray-200  font-inter leading-tight text-xl">
//                 {title}
//             </h1>
//         </div>

//     </div>

//     <div className="flex flex-wrap gap-5">

//         {
//             description?.map((items) => (
//                 <div className="bg-gray-300 w-[45%] flex flex-row items-center gap-4 px-4 py-1 justify-between rounded-full">
//                     <div className="font-inter text-sm">
//                         {items}
//                     </div>
//                     <div>
//                         <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
//                     </div>
//                 </div>
//             ))
//         }
//     </div>
// </div>

function Card({ title, description }: cardDetails) {
    return (
        <>
            <div className="border-2 bg-radial-[at_50%_100%] from-black to-purple-500/50 to-95% border-purple-500/50 flex flex-col items-center p-4 gap-5 py-10 justify-between rounded-2xl">
                <div className="flex gap-5 flex-row justify-between items-center">
                    <div>
                        <img src="/trophy.svg" alt="" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-white max-w-[20ch] leading-tight font-inter font-semibold text-xl">
                            {title}
                        </h1>
                    </div>
                </div>
                <hr className="border-1 w-full border-gray-500/40" />
                <div className="flex flex-wrap gap-2">
                    {
                        description?.map((items)=>(
                            <h1 className="text-white font-inter px-2 rounded-md border-1 border-gray-100/50">
                                {items}
                            </h1>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Card
