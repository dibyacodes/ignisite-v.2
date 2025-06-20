import { Link } from "react-router-dom"

interface profileInformation {
    name: string,
    picture?: string,
    tag?: string,
    bio: string,
    phone: number,
    email: string,
    whatsapp?: boolean
}


function TeamProfile({ name, picture = "./default_pfp.jpg", tag, bio, phone, email, whatsapp = false }: profileInformation) {
    return (
        <>
            <div className="bg-gray-900/10 backdrop-blur-3xl border-2 border-gray-500/50 py-10 px-5 rounded-2xl flex flex-col gap-5">
                {/* profile photo */}

                <div className="flex justify-between gap-5 items-start relative">
                    <img className="w-[20%] h-[20%] object-cover rounded-xl" src={picture} alt="" />
                    <div className="flex flex-row gap-3 items-center">
                        {/* contact options */}
                        <Link hidden={!whatsapp} to={`https://wa.me/${phone}`}>
                            <img className="stroke-white" src="./whatsapp.svg" alt="" />
                        </Link>

                        <Link to={`tel:${phone}`}>
                            <img src="./phone.svg" alt="" />
                        </Link>

                        <Link to={`mailto:${email}`}>
                            <img src="./email.svg" alt="" />
                        </Link>

                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <h1 className="font-inter text-2xl font-semibold text-gray-100">
                        {name}
                    </h1>
                    <p hidden={tag ? false : true} className="font-inter text-gray-900 text-sm bg-purple-100 w-fit px-4 py-1 rounded-lg">
                        <b>{tag}</b>
                    </p>
                </div>

                <div>
                    {/* bio */}
                    <h1 className="font-inter w-full text-gray-200 leading-tight">
                        {bio}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default TeamProfile