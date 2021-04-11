export default function Slide1() {
	return (
		<section
			id="slide-1"
			className=" w-full flex-shrink-0 h-full bg-blue-50 bg-gradient-to-br from-blue-50 via-pink-50 to-pink-200">
			<div className="container mx-auto px-4 flex flex-col h-full justify-center">
				<div className="grid gap-6">
					<h2 className="max-w-2xl text-4xl md:text-5xl font-bold text-pink-500">
						A Liquid Laundry Detergent Specifically Formulated for
					</h2>
					<p
						className="max-w-xl text-4xl md:text-5xl text-white"
						style={{
							textShadow: `-1px -1px 0 rgb(236, 72, 153), 1px -1px 0 rgb(236, 72, 153), -1px 1px 0 rgb(236, 72, 153), 1px 1px 0 rgb(236, 72, 153)`
						}}>
						Babies and Children Clothings
					</p>
					<a
						href="/distributors"
						className="inline-block justify-self-start whitespace-nowrap text-white bg-green py-2 px-4 rounded-md rounded-bl-none self-start">
						Find Distributors Around You
					</a>
				</div>
			</div>
		</section>
	)
}
