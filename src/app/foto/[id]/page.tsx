export default async function IdFotoPage({
	params,
}: {
	params: { id: number };
}) {
	return (
		<section>
			<h1>Foto Id: {params.id}</h1>
		</section>
	);
}
