type Distributor = {
	name: string
	occupation: string
	testimony: string
	avatar: string
}

const distributors: Distributor[] = [
	{
		name: "Kudirat Bakare",
		occupation: "Laundry Owner",
		testimony: "I have tried it oooo, the thickness and smell is everything.",
		avatar: "/assets/costumer1.png"
	},
	{
		name: "Ibikunle Ventures",
		occupation: "A Nursing Mother",
		testimony:
			"Yeah I have bought after I gave birth because I feel my baby’s clothes deserve bqsafewash I and to protect his skin from rashes and allergies",
		avatar: "/assets/costumer2.png"
	},
	{
		name: "Rosemerry’s Shop",
		occupation: "Laundry Owner",
		testimony: "I tried bqsafewash yesterday! It was the Bomb! My customers are happy and coming back for more ",
		avatar: "/assets/costumer3.png"
	}
]
export default function Testimonies() {
	return (
		<section className="bg-gradient-to-b from-transparent via-pink-50 to-transparent">
			<div className="container mx-auto text-center gap-4 grid p-6 md:pt-20 ">
				<h2 className="text-blue-green font-bold font-open-sans text-3xl md:text-5xl leading-10">
					Read Our Testimonies
				</h2>
				<p className="text-gray-600 font-semibold leading-8 max-w-2xl text-center mx-auto">
					We use our knowledge and expertise to provide the most effecient, effective and environmentally
					friendly cleaning possible
				</p>
				<div className="max-w-5xl w-full flex flex-wrap gap-14 mt-12 justify-around mx-auto">
					{distributors.map(dist => (
						<Card {...dist} key={dist.name} />
					))}
				</div>
			</div>
		</section>
	)
}

function Card(props: Distributor) {
	return (
		<div className="py-10 flex-auto">
			<div className="w-full max-w-xs p-6 bg-white h-80 relative gap-2 rounded-md shadow-md justify-between flex flex-col text-right">
				<img src={props.avatar} alt="" className="absolute -left-8 w-1/3 -top-8" />
				<div>
					<h4 className="text-blue-green font-bold">{props.name}</h4>
					<p>{props.occupation}</p>
				</div>
				<blockquote className="text-left relative">{props.testimony}</blockquote>
			</div>
		</div>
	)
}
