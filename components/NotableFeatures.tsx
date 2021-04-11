import Feature from "./Feature"

const features: FeatureDetails[] = [
	{
		body: "",
		icon: "/assets/shield.png",
		title: "Protection",
		color: "#21A4C4"
	},
	{
		body: "",
		icon: "/assets/biodegradable.png",
		title: "Eco-Friendly",
		color: "#6EB245"
	},
	{
		body: "",
		icon: "/assets/special.png",
		title: "Unique",
		color: "#02998A"
	}
]

export default function NotableFeatures() {
	return (
		<section className="min-h-screen py-20 bg-gradient-to-br from-transparent via-pink-50 to-pink-100">
			<div className="container p-6 mx-auto">
				<h2 className="text-5xl text-blue-green font-bold font-open-sans text-center">Notable Features</h2>
				<p className="text-center my-5">
					We are moved to create a premium, harmful chemical free, sparkling clean liquid laundry soap
					clinically safe for babies and children’s health.
				</p>
				<div className="grid md:grid-cols-2 gap-6">
					<div className="">
						<div id="baby" className="relative flex justify-center items-center">
							<img src="/assets/babybasket.png" alt="baby in a basket" />
						</div>
						<Feature color="#9D3E89" title="High Concentration" icon="/assets/bubbles.png" body="" />
					</div>
					<div className="flex flex-col justify-between">
						{features.map(feature => (
							<Feature {...feature} key={feature.title} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
