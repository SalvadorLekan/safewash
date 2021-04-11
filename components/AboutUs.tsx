export default function AboutUs() {
	return (
		<section id="about-us">
			<div className="container p-6 mx-auto items-center flex flex-wrap-reverse md:flex-nowrap min-h-screen">
				<div className="flex-auto grid justify-center gap-6">
					<h2 className="text-5xl text-red-900 font-bold">About Us</h2>
					<p className="leading-8">
						We use our knowledge and expertise to provide the most effecient, effective and environmentally
						friendly cleaning possible. Having in mind the daily increase in percentage of children cancer
						patients world wide, skin reactions caused by harmful chemicals, high priced soaps leading to
						parents using products not ideal for children.
					</p>
					<a
						href="/#"
						className="inline-block justify-self-start whitespace-nowrap text-white bg-green-700 py-2 px-4 rounded-md rounded-bl-none self-start">
						Become A Distributor
					</a>
				</div>
				<div id="woman" className="flex-shrink-0 max-w-full relative flex justify-center items-end">
					<img src="/assets/woman.png" alt="woman" />
				</div>
			</div>
		</section>
	)
}
