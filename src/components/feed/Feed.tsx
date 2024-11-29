import { PhotoType } from '@/actions/photo-get';
import FeedPhotos from './Feed-photos';

export default function Feed({ photos }: { photos: PhotoType[] }) {
	return (
		<div>
			<FeedPhotos photos={photos} />
		</div>
	);
}
