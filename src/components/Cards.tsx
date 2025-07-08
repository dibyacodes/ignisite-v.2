
import Button from "./Button"

interface cardProperties {
    cardTag?: string,
    cardTitle: string,
    cardDesc?: string,
    cardImage?: string,
    cardButtonText?: string,

    customTitleStyle?: string,
    cardIcon?: string,

    buttonRedirectLocation ?: string

    // paragraphChildren ?: HTMLParagraphElement
}

function Cards({ cardTag, cardTitle, cardDesc, cardImage, cardButtonText, customTitleStyle, cardIcon, buttonRedirectLocation = '/' }: cardProperties) {
    return (
        <>
            <div className="bg-[#3d3d3d] snap-center md:snap-none  backdrop-blur-2xl text-white flex flex-col justify-between min-w-[95%] max-w-[95%] md:min-w-[50ch] md:max-w-[50ch] rounded-2xl">
                <div className="px-6 pt-7 flex flex-col gap-5">

                    <div hidden={cardIcon ? false : true}>
                        <img className="w-[10%]" src={cardIcon} alt="" />
                    </div>

                    <div hidden={cardTag || cardButtonText ? false : true} className="flex flex-row md:flex-row justify-between items-center">
                        <span hidden={cardTag ? false : true} className="capitalize w-fit rounded-xl font-medium text-sm font-helvetica text-[#d1d1d1]">
                            {cardTag}
                        </span>

                        <div hidden={cardButtonText ? false : true}>
                            <Button to={buttonRedirectLocation} customs="px-0 text-sm md:text-md bg-[#efefef] rounded-md px-2 py-1 text-gray-900 font-semibold" buttonText={cardButtonText || ""} />
                        </div>

                    </div>
                    <div>
                        <h1 className={`text-2xl min-w-[10ch] max-w-[20ch] uppercase ${customTitleStyle ? customTitleStyle : "text-[#f6f6f6]"} font-helvetica capitalize font-semibold`}>
                            {cardTitle}
                        </h1>
                    </div>


                    <div hidden={cardDesc ? false : true}>
                        <p className="font-helvetica text-gray-300 font-medium leading-tight text-sm md:text-lg">
                            {cardDesc}
                            {/* {paragraphChildren ? paragraphChildren} */}
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img className="w-[90%]" src={cardImage} alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cards