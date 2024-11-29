import { PhotoType } from '@/actions/photo-get';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Feed.module.css';

export default function FeedPhotos({ photos }: { photos: PhotoType[] }) {
	return (
		<ul className={`${styles.feed} animeLeft`}>
			{photos.map((photo, i) => (
				<li key={photo.id + i} className={`${styles.photo}`}>
					<Link href={`/foto/${photo.id}`} scroll={false}>
						<Image
							src={photo.src}
							alt={photo.title}
							width={1500}
							height={1500}
							sizes="80vw"
						/>
						<span className={`${styles.visualizacao}`}>{photo.acessos}</span>
					</Link>
				</li>
			))}
		</ul>
	);
}
