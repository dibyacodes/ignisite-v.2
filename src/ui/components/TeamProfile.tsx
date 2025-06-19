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
            <div className="bg-gray-200 py-10 px-5 rounded-2xl flex flex-col gap-5">
                {/* profile photo */}

                <div className="flex justify-between gap-5 items-start relative">
                    <img className="w-[20%] h-[20%] object-cover rounded-xl" src={picture} alt="" />
                    <div className="flex flex-row gap-3 items-center">
                        {/* contact options */}
                        <Link hidden={!whatsapp} to={`https://wa.me/${phone}`}>
                            <img src="./whatsapp.svg" alt="" />
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
                    <h1 className="font-inter text-2xl font-semibold text-gray-900">
                        {name}
                    </h1>
                    <p hidden={tag ? false : true} className="font-inter text-purple-600 text-sm bg-purple-200 w-fit px-4 py-1 rounded-lg">
                        <b>{tag}</b>
                    </p>
                </div>

                <div>
                    {/* bio */}
                    <h1 className="font-inter w-full leading-tight">
                        {bio}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default TeamProfile