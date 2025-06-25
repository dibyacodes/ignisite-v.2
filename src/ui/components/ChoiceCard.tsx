interface choicesContent {
    subject : string,
    description : string,
    buttonText ?: string
}



function ChoiceCard({subject,description,buttonText}:choicesContent) {
    return (
        <>

            <div className="bg-gray-200/10 p-6 border-t-2 border-gray-100/50 rounded-xl flex flex-col gap-10">
                <h1 className="text-white text-3xl font-medium capitalize">
                    {/* if Not Sure... */}
                    {subject}
                </h1>
                <p className="text-gray-400 font-inter font-medium capitalize leading-tight">
                    {/* don't know what best for your business? Let's discuss. */}
                    {description}
                </p>

                <button hidden={buttonText ? false : true} className="capitalize bg-purple-100 font-semibold rounded-full text-black font-inter text-lg px-2 py-2">
                    {/* Get a Free Consultation */}
                    {buttonText}
                </button>
            </div>

        </>
    )
}


export default ChoiceCard