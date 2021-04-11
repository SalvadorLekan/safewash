export default function Feature(props: FeatureDetails) {
	return (
		<article className="grid gap-1 py-2">
			<img src={props.icon} alt={props.title} width={48} />
			<h4 className="font-bold" style={{ color: props.color }}>
				{props.title}
			</h4>
			<p>We are moved to create a premium, harmful chemical free, sparkling clean liquid laundry soap .</p>
		</article>
	)
}
