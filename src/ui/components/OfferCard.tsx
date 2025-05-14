interface cardContent {
    serviceToOffer: {
        "name": string,
        "description": string
    }[]
}

function OfferCard({serviceToOffer}:cardContent) {
    return (
        <>
            <div className="bg-purple-100 px-3 py-6 rounded-2xl max-w-[50ch]">
                <h1 className="text-3xl text-gray-900 font-inter font-semibold">
                    {
                        serviceToOffer.map((items)=>(
                            items.name
                        ))
                    }
                </h1>

                <p className="text-md font-inter text-gray-900">
                    {
                        serviceToOffer.map((items)=>(
                            items.description
                        ))
                    }
                </p>
            </div>
        </>
    )
}


export default OfferCard