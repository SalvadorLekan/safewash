import { useRef } from "react"

const reff: HTMLElement | null = null

export default function Header() {
	const ref = useRef(reff)
	return (
		<header className="w-screen top-0 fixed z-50">
			<div className="container mx-auto px-4 flex flex-wrap justify-between">
				<div className="pr-6">
					<img src="/assets/logo.png" alt="logo" />
				</div>
				<button onClick={() => ref.current?.classList.remove("hidden")} className="md:hidden">
					<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M20 13.9089C20 14.4973 19.554 14.9733 19.005 14.9733H10.995C10.7311 14.9733 10.478 14.8612 10.2914 14.6616C10.1048 14.462 10 14.1912 10 13.9089C10 13.6266 10.1048 13.3559 10.2914 13.1562C10.478 12.9566 10.7311 12.8445 10.995 12.8445H19.005C19.555 12.8445 20 13.3205 20 13.9089Z"
							fill="#000100"
						/>
						<path
							d="M20 7.48899C20 8.07738 19.554 8.55343 19.005 8.55343H0.995C0.731109 8.55343 0.478028 8.44128 0.291429 8.24166C0.10483 8.04204 0 7.7713 0 7.48899C0 7.20669 0.10483 6.93595 0.291429 6.73633C0.478028 6.53671 0.731109 6.42456 0.995 6.42456H19.005C19.555 6.42456 20 6.90168 20 7.48899Z"
							fill="#000100"
						/>
						<path
							d="M19.005 2.13326C19.2689 2.13326 19.522 2.02111 19.7086 1.82149C19.8952 1.62187 20 1.35113 20 1.06883C20 0.786522 19.8952 0.515779 19.7086 0.316159C19.522 0.11654 19.2689 0.00439454 19.005 0.00439453H6.995C6.86433 0.00439453 6.73495 0.0319269 6.61423 0.0854196C6.49351 0.138912 6.38382 0.217318 6.29143 0.316159C6.19903 0.415001 6.12574 0.532344 6.07574 0.661486C6.02574 0.790629 6 0.929043 6 1.06883C6 1.20861 6.02574 1.34702 6.07574 1.47617C6.12574 1.60531 6.19903 1.72265 6.29143 1.82149C6.38382 1.92034 6.49351 1.99874 6.61423 2.05223C6.73495 2.10573 6.86433 2.13326 6.995 2.13326H19.005Z"
							fill="#000100"
						/>
					</svg>
				</button>
				<nav
					ref={el => (ref.current = el)}
					className="flex-auto hidden md:block left-0 px-10 fixed md:bg-none bg-gradient-to-b from-pink-300 to-white md:bg-transparent top-0 w-screen h-screen md:h-auto md:w-auto md:static">
					<div className="grid gap-4">
						<button
							onClick={() => ref.current?.classList.add("hidden")}
							className="md:hidden justify-self-end py-10">
							<svg
								width="16"
								height="17"
								viewBox="0 0 16 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M14.5092 0.773716C14.9179 1.16281 14.9416 1.8085 14.5636 2.21579L2.16395 15.5771C1.98226 15.7729 1.73012 15.8865 1.46297 15.8929C1.19583 15.8993 0.935568 15.7981 0.739453 15.6114C0.543338 15.4247 0.427429 15.1679 0.417225 14.8974C0.407022 14.627 0.503359 14.3651 0.685044 14.1693L13.0847 0.807987C13.4634 0.399951 14.1012 0.385331 14.5092 0.773716Z"
									fill="#000100"
								/>
								<path
									d="M0.878263 0.676685C1.2817 0.309194 1.90928 0.350271 2.27999 0.766833L14.4412 14.4322C14.6194 14.6325 14.7134 14.8945 14.7025 15.1608C14.6916 15.4271 14.5768 15.6757 14.3832 15.852C14.1896 16.0283 13.9332 16.1179 13.6703 16.101C13.4074 16.0841 13.1596 15.9621 12.9815 15.7619L0.820273 2.09648C0.448887 1.67916 0.475556 1.04351 0.878263 0.676685Z"
									fill="#000100"
								/>
							</svg>
						</button>
						<ul className="grid md:grid-flow-col text-center gap-6 text-lg w-full h-full items-center">
							<li>
								<a
									onClick={() => ref.current?.classList.add("hidden")}
									className="block py-4"
									href="/#">
									Home
								</a>
							</li>
							<li>
								<a
									onClick={() => ref.current?.classList.add("hidden")}
									className="block py-4"
									href="/#about-us">
									About Us
								</a>
							</li>
							<li>
								<a
									onClick={() => ref.current?.classList.add("hidden")}
									className="block py-4"
									href="/#be-distr">
									Become A Distributor
								</a>
							</li>
							<li>
								<a
									onClick={() => ref.current?.classList.add("hidden")}
									className="block py-4"
									href="/#contact">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	)
}
