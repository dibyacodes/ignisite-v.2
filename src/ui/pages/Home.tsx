// import Card from "../components/Card"
import Card from "../components/Card"
import List from "../components/List"

// testing

function Home() {

	// const servicesArray = [
	//     {
	//         title: "Custom Website Development",
	//         description: ['Making', 'Element', 'Advanced'],
	//     },

	//     {
	//         title: "Website Redesign & Maintenance",
	//         description: "check your website buddy"
	//     }
	// ]

	const services = [
		'Ecommerce',
		'Portfolio',
		'Education',
		'Restaurant',
		'Personal',
		'Product'
	]

	const list = [
		'Custom Website Designs',
		'Website Redesign & Maintenance',
		'Custom Software Development',
		'SEO Optimization Services'
	]

	// install node and other packages to make this app work

	return (
		// bg-[radial-gradient(to_bottom,#E100FF_0%,black_30%)]
		<>
			{/* bg-radial-[at_x_y] */}
			<div className="w-[100%] z-10 h-svh pb-10 px-2 flex flex-col bg-radial-[at_50%_0%] from-[#E100FF] to-black to-70% justify-center gap-5 ">

				<div className="flex flex-col gap-2">
					<h1 className="text-5xl font-semibold font-inter max-w-[20ch] text-left mt-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-purple-200 to-gray-100">

						Scaling your business begins here.
					</h1>
					<p className="max-w-[30ch] md:flex text-left text-gray-200 leading-tight text-lg">
						<span className="font-inter font-medium text-md capitalize">
							plan it. build it. ship it.
						</span>
					</p>
				</div>
				<div>
					<List subject="we help you with" items={list} />
				</div>
				<div className="flex flex-col gap-3">
					<button className="border-2 border-gray-400/50 capitalize font-semibold rounded-full text-white font-inter text-lg px-2 py-2">
						Book a Call
					</button>
				</div>
			</div>

			{/* <div className="bg-black px-4">
				<div className="flex flex-col gap-4">
					<h1 className="text-purple-200 font-inter text-4xl capitalize font-medium">
						an internet home for your business
					</h1>
					<p className="text-gray-400 font-inter font-medium text-md leading-tight">
						Let your customers access you & your brand online, while you focus on your vision.
					</p>
				</div>
			</div> */}

			<div className="bg-black flex flex-col justify-center items-center gap-5">
				<div>
					<h1 className="text-white font-inter text-3xl font-semibold">We got you covered.</h1>
				</div>
				<Card title="There's a website for every idea" description={services} />
			</div>

			<div className="bg-black px-4 py-20 flex flex-col gap-10">
				<div className="flex flex-col gap-2">
					<h1 className="text-4xl font-inter text-gray-100 font-semibold capitalize">
						Your business, your choice.
					</h1>
					<p className="text-white uppercase font-inter text-sm">
						Which one would you choose?
					</p>
				</div>
				<div className="p-4 border-2 border-red-600/80 rounded-2xl bg-radial-[at_50%_50%] from-black to-red-600/50 flex flex-col gap-5">
					<div>
						<h1 className="text-white font-inter text-2xl font-semibold pb-2">The Red Team</h1>
						<hr className="border-1 border-red-400/20" />
						<h2 className="pt-4 text-red-100 leading-tight font-inter">
							<ul className="flex flex-col gap-4">
								<li>Use the power of the Internet & <b>make your business accessible 24/7</b>.</li>
								<li>Get more customers.</li>
								<li><b>Move ahead</b> of your competitors.</li>
								<li>Get <b>organic marketing</b> & traffic to your business</li>
								<li>Highlight your <b>brand & identity</b> as a professional</li>
							</ul>
						</h2>
					</div>
				</div>

				<div className="flex flex-col items-center justify-center">
					<h1 className="text-transparent px-4 bg-clip-text bg-linear-to-r from-red-500 to-blue-500 text-4xl font-inter font-bold italic">
						- VS -
					</h1>
				</div>

				<div className="p-4 border-2 border-blue-600/80 rounded-2xl bg-radial-[at_50%_50%] from-black to-blue-600/50 flex flex-col gap-5">
					<div>
						<h1 className="text-white font-inter text-2xl font-semibold pb-2">The Blue Team</h1>
						<hr className="border-1 border-red-400/20" />
						<h2 className="pt-4 text-blue-100 leading-tight font-inter">
							<ul className="flex flex-col gap-4">
								<li><b>Ignore the power of the internet</b> & keep yourself hidden</li>
								<li>Get limited customers</li>
								<li>Let your <b>competitors win</b>.</li>
								<li><b>Spend 10x in the name of marketing</b> & get no results</li>
								<li><b>Have no professional identity</b> of your business</li>
							</ul>
						</h2>
					</div>
					
				</div>
			</div>
		</>
	)
}

export default Home
