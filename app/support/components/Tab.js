// Path: components/Tab.js
import React from 'react';
import VideoPreview from './VideoPreview';

export default function Tab({ videos, title }) {
	return (
		<div className="tab-content">
			<h2 className="VIDEO_TAB_TITLE
				text-xl
				font-semibold
				mb-4
				justify-center
				text-center
				pt-4
			">
				{title}
			</h2>
			<div className="
			flex
			flex-wrap
			justify-center
			gap-4
			">
				{videos.map((video, index) => (
					<VideoPreview key={index} video={video.id} name={video.name} />
				))}
			</div>
		</div>
	);
}
