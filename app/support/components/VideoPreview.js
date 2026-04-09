// Path: components/VideoPreview.js
export default function VideoPreview({ video, name }) {
  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-sm">
      <h3 className="font-body font-semibold text-base text-center">{name}</h3>
      <div className="video-wrapper w-full rounded-xl overflow-hidden shadow-md">
        <iframe
          src={`https://www.youtube.com/embed/${video}`}
          title={name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
