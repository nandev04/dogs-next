import { photo_get } from '@/actions/photo-get';
import Feed from '@/components/feed/Feed';

export default async function Home() {
	const data = await photo_get();
	return (
		<section className="container mainContainer">
			<h1 className="title">
				<Feed photos={data} />
			</h1>
		</section>
	);
}
