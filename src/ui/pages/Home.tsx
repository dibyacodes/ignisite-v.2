
function Home() {
    return (
        <>
            <div className="w-[100%] px-2 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-semibold font-inter max-w-[20ch] text-left mt-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-500 to-gray-700">
                        One Stop Web Agency To 10x Your Business
                    </h1>
                    <p className="max-w-[30ch] hidden md:flex text-left">
                        <span className="text-green-900 font-inter font-medium text-md capitalize leading-tight">
                            professional looking industry standard website that converts visitors into customers
                        </span>
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <button className="bg-gray-900 font-semibold rounded-md text-white font-inter text-lg px-2 py-2">
                        Book A Call
                    </button>

                    <button className="font-inter font-semibold text-lg">
                        {
                            "View Services ->"
                        }
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home