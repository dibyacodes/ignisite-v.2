interface ListItems {
	items: string[],
	subject?: string, // sometimes the user might provide tag like strings instead of a subject string.
	subjectTag?: string,
	listIcon?: string,
	cardTopicIcon ?: string,

	urgent ?: boolean
}


export default function List({ items, subject, subjectTag, listIcon = "/listItem.svg",cardTopicIcon, urgent = false}: ListItems) {


	return (
		<>
			<div className="bg-gray-500/20 backdrop-blur-xl px-4 py-5 rounded-2xl flex flex-col gap-5">

				<div hidden={cardTopicIcon ? false : true}>
					<img className="w-[20%] md:w-[5%]" src={cardTopicIcon} alt="" />
				</div>

				<div hidden={subjectTag ? false : true} className={`font-medium ${urgent ? "bg-red-500/25 text-red-200 border-red-500" : "bg-blue-500/25 text-blue-200 border-blue-500"}  w-fit px-2 py-1 rounded-md border-2 font-inter text-sm capitalize`}>{subjectTag}</div>

				<div hidden={subject ? false : true} className="text-white font-inter text-xs uppercase tracking-widest">{subject}</div>

				<div className="flex flex-col gap-4">
					{
						items.map((item) => (
							<div className="flex flex-row gap-2 items-stretch">
								<img src={listIcon} alt={subject || subjectTag} />
								<p className="text-gray-200 font-inter capitalize">
									{item}
								</p>

							</div>
						))
					}
				</div>

			</div>
		</>
	)
}
