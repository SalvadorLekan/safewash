export default function ReachOut() {
	return (
		<section className="from-transparent via-transparent to-pink-300 bg-gradient-to-br">
			<div className="container p-6 gap-6 mx-auto items-center flex flex-wrap lg:flex-nowrap min-h-screen">
				<div id="womanr" className="flex-shrink-0 relative flex  max-w-full justify-center items-end">
					<img src="/assets/reachoutlady.png" alt="woman" />
				</div>
				<div className="flex-auto grid justify-center gap-6">
					<h2 className="text-5xl text-red-900 font-bold">Reach Out To Us</h2>
					<p className="leading-8">
						We use our knowledge and expertise to provide the most effecient, effective and environmentally
						friendly cleaning possible. Having in mind the daily increase in percentage of children cancer
						patients world wide, skin reactions caused by harmful chemicals, high priced soaps leading to
						parents using products not ideal for children.
					</p>
					<a
						href="/distributors"
						className="inline-block justify-self-start whitespace-nowrap text-white bg-green py-2 px-4 rounded-md rounded-bl-none self-start">
						Contact Us Now!
					</a>
				</div>
			</div>
		</section>
	)
}
