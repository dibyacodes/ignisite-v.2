
interface cardDetails {
    title: string,
    description: string,
    buttonText?: string
}


function Card({ title, description, buttonText }: cardDetails) {
    return (
        <>
            <div className="max-w-[50ch] bg-gray-200 rounded-lg p-4 w-[35ch] border-2 border-b-6">
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl text-green-900 font-semibold font-inter leading-tight">
                        {title}
                    </h1>

                    <p className="font-inter flex gap-10 font-medium text-md">
                        {
							description.map((items)=>(
								<div>
								{description}
								</div>
							))
						}
                    </p>
                </div>

                <div hidden={
                    buttonText ? false : true
                }>
                    <button>
                        {buttonText}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card
