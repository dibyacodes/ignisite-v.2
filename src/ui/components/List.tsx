interface ListItems {
	items : string[],
	subject : string
}


export default function List({items,subject}:ListItems) {
	return(
		<>
		<div className="bg-gray-500/20 backdrop-blur-3xl px-4 py-5 rounded-2xl flex flex-col gap-5">

		<div className="text-white font-inter text-xs uppercase tracking-widest">{subject}</div>

		<div className="flex flex-col gap-3">
		{
			items.map((item)=>(
				<div className="flex flex-row gap-2 items-center">
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F3F3F3"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/></svg>				
				<p className="text-gray-200 font-inter">
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
