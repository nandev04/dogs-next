export default async function PerfilUserPage({
	params,
}: {
	params: { user: string };
}) {
	return (
		<div>
			<h1>Usuario: {params.user}</h1>
		</div>
	);
}
