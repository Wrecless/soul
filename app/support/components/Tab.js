// Path: components/Tab.js
import VideoPreview from './VideoPreview';

export default function Tab({ videos, title, titleClass = 'text-white/70' }) {
  return (
    <div className="py-6 px-4 md:px-8">
      <h2 className={`font-display text-3xl md:text-4xl font-light mb-6 text-center ${titleClass}`}>
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {videos.map((video, index) => (
          <VideoPreview key={video.id} video={video.id} name={video.name} />
        ))}
      </div>
    </div>
  );
}
