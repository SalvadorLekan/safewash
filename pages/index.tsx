import AboutUs from "../components/AboutUs"
import NotableFeatures from "../components/NotableFeatures"
import ReachOut from "../components/ReachOut"
import Top from "../components/Top"
import TopContributors from "../components/TopContributors"
import Testimonies from "../components/Testimonies"
import Vid from "../components/Vid"
import Head from "next/head"

export default function App() {
	return (
		<>
			<Head>
				<title>Safewash</title>
			</Head>
			<Top />
			<NotableFeatures />
			<AboutUs />
			<TopContributors />
			<ReachOut />
			<Testimonies />
			<Vid />
		</>
	)
}
