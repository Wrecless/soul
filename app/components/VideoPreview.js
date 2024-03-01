// Path: components/VideoPreview.js
export default function VideoPreview({ video }) {
 const videoId = video; // Use the video prop as the video ID

 return (
  <div className="">
   <iframe
    width="460"
    height="256"
    src={`https://www.youtube.com/embed/${videoId}`}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
   ></iframe>
   <p>Video Preview for {video}</p>
  </div>
 );
}