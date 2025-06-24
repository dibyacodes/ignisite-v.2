interface cardContent {
    serviceToOffer: {
        "name": string,
        "description": string,
        "categoryTag": string,
        "icon": string,
        "features": string[], // a string array
    }, // an object array

}

function OfferCard({ serviceToOffer }: cardContent) {
    return (
        <>
            <div className="bg-purple-100 px-5 py-6 rounded-2xl min-w-xs md:min-w-[50ch] md:max-w-[50ch] flex flex-col gap-5 justify-start">
                <div className="flex flex-col gap-5">
                    <div>
                        <img src={serviceToOffer.icon} alt="" />
                    </div>
                    <div className="font-inter font-semibold py-[0.14rem] bg-purple-300 text-purple-800 px-4 w-fit rounded-full">
                        {serviceToOffer.categoryTag}
                    </div>
                    <div className="flex flex-row items-center gap-5 justify-between">
                        <h1 className="text-2xl leading-7 text-gray-900 md:max-w-[60%] font-inter font-semibold">
                            {serviceToOffer.name}
                        </h1>

                        {/* <button className="bg-black text-white py-1 px-6 h-fit rounded-full font-inter uppercase font-semibold">
                            get
                        </button> */}

                    </div>
                    <p className="text-md font-inter leading-tight text-gray-500">
                        {serviceToOffer.description}
                    </p>
                    <hr className="border-1 border-gray-300 rounded-full" />
                </div>


                <div>
                    <ul className="flex flex-col gap-2">
                        {
                            serviceToOffer.features.map((arrayItems) => (
                                <div className="flex flex-row items-center gap-1">
                                    <img src="/plus.svg" alt="" />
                                    <li className="font-inter font-medium text-gray-600">{arrayItems}</li>
                                </div>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}


export default OfferCard
