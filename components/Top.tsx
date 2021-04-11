import { useEffect, useState } from "react"
import Slice4 from "./Slice4"
import Slide1 from "./Slide1"
import Slide2 from "./Slide2"
import Slide3 from "./Slide3"

function Top() {
	const [first, setFirst] = useState(1)
	useEffect(() => {
		const focused = document.getElementById(`slide-${first}`) as HTMLElement
		focused.classList.add("order-first")
		return () => {
			focused.classList.remove("order-first")
		}
	}, [first])
	useEffect(() => {
		const token = setInterval(() => setFirst(prev => (prev > 3 ? 1 : prev + 1)), 3999)
		return () => {
			clearInterval(token)
		}
	}, [])
	return (
		<div className="flex relative h-screen w-full overflow-hidden">
			<div className="absolute w-36 gap-1 grid grid-flow-col mx-auto bg-pink-50 py-2 px-4 rounded-full bottom-6 right-1/2 transform translate-x-1/2">
				{[1, 2, 3, 4].map(num => {
					return (
						<button
							key={num}
							onClick={() => setFirst(num)}
							className={`h-4 w-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-900 border border-pink-500 ${
								num === first ? "bg-pink-500" : ""
							}`}></button>
					)
				})}
			</div>
			<Slide1 />
			<Slide2 />
			<Slide3 />
			<Slice4 />
		</div>
	)
}

export default Top
