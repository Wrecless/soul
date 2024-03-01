// Path: components/Tab.js
import VideoPreview from './VideoPreview';

export default function Tab({ videos }) {
	return (
		<div className="flex flex-wrap justify-around">
			{videos.map((video, index) => (
				<VideoPreview key={index} video={video} />
			))}
		</div>
	);
}
