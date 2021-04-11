import Head from "next/head"

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

export default function Distributors() {
	return (
		<>
			<Head>
				<title>Distributors</title>
			</Head>
			<div id="search-area" className="flex flex-col justify-center items-center px-6 py-10">
				<form className="grid gap-4" onSubmit={e => e.preventDefault()}>
					<h2 className="md:text-5xl text-4xl text-red-900">Find Distributors Around You</h2>
					<select
						name="sort"
						id="sort"
						className="focus:outline-none justify-self-start bg-transparent ring-1 focus:ring-pink-400 rounded-md py-2 px-3">
						<option value="">Default Sort</option>
					</select>
					<fieldset className="grid w-full md:grid-cols-11 gap-6 py-4">
						<select
							className="col-span-4 focus:outline-none bg-transparent ring-1 focus:ring-pink-400 rounded-md py-2 px-3"
							name=""
							id=""></select>
						<select
							className="col-span-4 my-4 focus:outline-none bg-transparent ring-1 focus:ring-pink-400 rounded-md py-2 px-3"
							name=""
							id=""></select>
						<button className="col-span-3 text-white py-2 px-3 bg-green rounded-md">Search</button>
					</fieldset>
				</form>
				<div className="py-11 gap-6 grid">
					<p>Search Results &#8702;</p>
					<div className="max-w-5xl w-full flex flex-wrap gap-14 mt-12 justify-around mx-auto">
						{distributors.map(dist => (
							<Card {...dist} key={dist.name} />
						))}
					</div>
				</div>
			</div>
		</>
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
					className="text-white w-28 bg-blue-green text-center inline-block py-2 px-4 rounded-md">
					call
				</a>
			</div>
		</div>
	)
}
