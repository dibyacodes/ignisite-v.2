import {Navigate, useLocation} from "react-router"
import Button from "../components/Button"


function Response() {

    const location = useLocation()

    const {username, service, call, callTime} = location.state || {}

    if (!location.state?.fromFrom){
        return <Navigate to={'/'}/>
    }

    return (
        <>
            <div className="min-h-screen bg-white flex flex-col items-center gap-5 pt-[5%]">
                <div className="w-full flex flex-col items-center">
                    <img className="max-w-[90%] md:w-[20%]" src="/success-image.svg" alt="" />
                </div>

                <div className="flex flex-col gap-5 justify-center items-center px-4">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-3xl md:text-5xl max-w-[30ch] capitalize leading-tight text-center font-helvetica font-semibold text-gray-900">
                            Congratulations! {username ? `${username}` : ''}, welcome to IgniSite
                        </h1>

                        <p hidden={service ? false : true} className="font-helvetica capitalize max-w-[70ch] md:text-lg text-center">
                            Your request for <b>"{service}"</b> was received. You should receive an email, confirming and guiding with the next steps. Thank you for choosing IgniSite!
                        </p>

                        <p hidden={call ? false : true} className="font-helvetica capitalize max-w-[80ch] md:text-lg text-center">
                            You scheduled a call on <b>{call} from {callTime}</b>. Please check you email Inbox or spam folder for a confirmation email. Hope to hear from your soon!.Thank you for choosing IgniSite!
                        </p>
                    </div>

                    <div>
                        <Button customs="text-gray-900 border-2 border-gray-950 px-4 py-2 hover:bg-gray-950 hover:text-gray-100 transition-all" to="/" buttonText="<- go back to home"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Response