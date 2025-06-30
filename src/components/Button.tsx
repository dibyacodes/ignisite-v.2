import { Link } from "react-router"

interface buttonProperties {
    isDark?: boolean,
    buttonText: string,
    customs?: string,
    to ?: string
}

function Button({ isDark = false, buttonText, customs, to }: buttonProperties) {

    const darkButton = "text-gray-200 border-2"
    const lightButton = "text-gray-300"


    return (
        <>
            <Link to={to || ""}>
                <button className={`${isDark ? darkButton : lightButton} ${customs ? "p-0" : "px-6 py-3"} ${customs} font-inter font-medium rounded-full capitalize`}>
                    {buttonText}
                </button>
            </Link>
        </>
    )
}

export default Button