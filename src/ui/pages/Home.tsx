import Card from "../components/Card"

function Home() {

    const servicesArray = [
        {
            title: "Custom Website Development",
            description: "From sleek landing pages to robust e-commerce platforms, our team crafts websites that are fast, secure, and tailored to your brand.",
        }
    ]

    return (
        <>
            <div className="w-[100%] pb-10 px-2 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h1 className="text-5xl font-semibold font-inter max-w-[20ch] text-left mt-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-green-700 to-gray-700">
                        Scaling your business begins here.
                    </h1>
                    <p className="max-w-[30ch] md:flex text-left leading-tight text-lg">
                        <span className="text-green-900 font-inter font-medium text-md capitalize">
                            professional looking websites & software custom built for your business.
                        </span>
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <button className="bg-gray-900 font-semibold rounded-md text-white font-inter text-lg px-2 py-2">
                        Book a call
                    </button>

                    <button className="bg-gray-200 font-semibold rounded-md text-gray-950 font-inter text-lg px-2 py-2">
                        {
                            "View Services ->"
                        }
                    </button>
                </div>

            </div>
            <div className="bg-gray-950 h-screen rounded-t-2xl flex flex-col items-center pt-10">
                <div>
                    {
                        servicesArray.map((items, index) => (
                            <Card key={index} title={items.title} description={items.description} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home