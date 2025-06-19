import { useState } from "react";

interface bookingDates {
	dates: {
		date: number,
		month: number, // for now
		day: number
	}[]
}


function DateContainer({ dates }: bookingDates) {

	const [selectedIndex, setSelectedIndex] = useState(NaN);

	const days = [
		'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'
	];

	return (
		<>
			<div className="flex gap-2 overflow-x-scroll">
				{
					dates.map((items, idx) => (

						<div onClick={() => setSelectedIndex(idx)} key={idx}
							className={`bg-gray-800 w-[5ch] p-1 rounded transition-colors ${selectedIndex === idx ? "bg-purple-500" : "bg-gray-800"
								}`}>
							<input hidden name="date"
								type="radio"
								checked={selectedIndex === idx}
								className="accent-blue-500" />

							<div className="flex flex-col items-center justify-center gap-2">
								<p className="text-white font-inter text-sm capitalize">
									{days[items.day]}
								</p>
								<p className="text-white font-inter font-semibold text-md">
									{items.date}
								</p>
							</div>
						</div>
					))
				}


			</div>
		</>
	)
}


function BookingCard() {

	const today = new Date()

	const months = [
		"january",
		"february",
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	]

	const bookingWeek = []

	for (let i = 0; i < 7; i++) {
		const nextDate = new Date(today)
		nextDate.setDate(today.getDate() + i)

		bookingWeek.push({
			date: nextDate.getDate(),
			month: nextDate.getMonth(),
			day: nextDate.getDay()
		})
	}

	return (
		<>
			<div className="bg-black p-6 rounded-2xl">
				<div className="flex flex-col gap-5">
					<h1 className="font-inter font-semibold text-2xl text-gray-200">
						Scale up your business
					</h1>
					<p className="leading-tight font-medium text-gray-400 font-inter text-sm">
						Let's hop on a 15-30 min call & discuss how we can help you achieve your business goals.
					</p>

					<div>
						<input type="text" />
					</div>
					<div className="flex flex-col gap-3">
						<h1 className="text-white font-inter capitalize font-semibold">
							{months[today.getMonth()]}
						</h1>
						<DateContainer dates={bookingWeek} />
					</div>
				</div>
			</div>
		</>
	)
}

export default BookingCard
