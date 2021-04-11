export default function Slide2() {
	return (
		<section id="slide-2" className=" w-full flex-shrink-0 h-full">
			<div className="container mx-auto p-6 flex items-end md:items-center h-full pb-28">
				<div className="ml-auto max-w-2xl grid gap-6">
					<h2 className="text-4xl md:text-5xl text-pink-500  font-bold md:leading-normal">
						Mild and Gentle On Your Baby’s Soft Skin
					</h2>
					<p
						className="text-4xl md:text-5xl text-white md:leading-normal"
						style={{
							textShadow: `-1px -1px 0 rgb(236, 72, 153), 1px -1px 0 rgb(236, 72, 153), -1px 1px 0 rgb(236, 72, 153), 1px 1px 0 rgb(236, 72, 153)`
						}}>
						Happy Fragrance
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
