type Distributor = {
	name: string
	address: string
	phone: string
	avatar: string
}

const distributors: Distributor[] = [
	{
		name: "Kudirat Bakare",
		address: "Surulere, Lagos State.",
		phone: "09030267295",
		avatar: "/assets/costumer1.png"
	},
	{
		name: "Ibikunle Ventures",
		address: "Surulere, Lagos State.",
		phone: "09030267295",
		avatar: "/assets/costumer2.png"
	},
	{
		name: "Rosemerry’s Shop",
		address: "Surulere, Lagos State.",
		phone: "09030267295",
		avatar: "/assets/costumer3.png"
	}
]
export default function TopContributors() {
	return (
		<section className="bg-gradient-to-b from-transparent via-pink-50 to-transparent">
			<div className="container mx-auto text-center gap-4 grid p-6">
				<h2 className="text-blue-green font-bold font-open-sans text-3xl md:text-5xl leading-10">
					See Our Top Distributors
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
				<p className="max-w-xl my-2 mx-auto text-xl">
					We use our knowledge and expertise to provide the most effecient, effective and environmentally
					friendly cleaning possible
				</p>
				<div>
					<a
						href="/distributors"
						className="inline-block whitespace-nowrap text-white bg-green py-2 px-4 rounded-md rounded-bl-none">
						Find Distributors Around You
					</a>
				</div>
			</div>
		</section>
	)
}

function Card(props: Distributor) {
	return (
		<div className="py-10 flex-auto">
			<div className="max-w-xs w-full bg-white h-80 relative gap-2 rounded-md shadow-md flex flex-col items-center justify-end p-6">
				<img src={props.avatar} alt="" className="absolute -top-12" />
				<h4>{props.name}</h4>
				<address>{props.address}</address>
				<p itemProp="tel">{props.phone}</p>
				<a
					href={`tel:+234${props.phone}`}
					className="text-white w-28 bg-blue-green inline-block py-2 px-4 rounded-md">
					call
				</a>
			</div>
		</div>
	)
}
