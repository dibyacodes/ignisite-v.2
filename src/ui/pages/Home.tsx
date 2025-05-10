import Card from "../components/Card"
        


function Home() {

    const servicesArray = [
        {
            title: "Custom Website Development",
            description: "From sleek landing pages to robust e-commerce platforms, our team crafts websites that are fast, secure, and tailored to your brand.",
        },

	{
	    title : "Website Redesign & Maintenance",
	    description : "check your website buddy"
	}
    ]

    // install node and other packages to make this app work

    return (
        <>
		<div className="w-[100%] h-svh pb-10 px-2 flex flex-col justify-center gap-5 bg-[linear-gradient(to_bottom,#E100FF_0%,black_30%)]">
                <div className="flex flex-col gap-2">
                    <h1 className="text-5xl font-semibold font-inter max-w-[20ch] text-left mt-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-purple-200 to-gray-100">
                        Scaling your business begins here.
                    </h1>
                    <p className="max-w-[30ch] md:flex text-left text-gray-200 leading-tight text-lg">
                        <span className="font-inter font-medium text-md capitalize">
                            professional looking websites & software custom built for your business.
                        </span>
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <button className="bg-gray-900 font-semibold rounded-md text-white font-inter text-lg px-2 py-2">
                        Book a Call
                    </button>


                    <button className="bg-gray-200 font-semibold rounded-md text-gray-950 font-inter text-lg px-2 py-2">
                        {
                            "View Services ->"
                        }
                    </button>
                </div>

            </div>
            <div className="bg-gray-950 h-screen flex flex-col items-center pt-10">
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
