// Path: components/VideoPreview.js
export default function VideoPreview({ video, name }) {
    // Directly use the props `video` and `name` without reassigning them
    const videoId = video; // Although directly using `video` in your JSX works too

    return (
        <div className="
        flex
        flex-col
        items-center
        justify-center
        text-center
        space-y-2
        ">
            <h1 className="text-xl font-bold">
                {name} {/* Display the video name dynamically */}
            </h1>
            <iframe
                width="500" // Specify a default width or make it responsive
                height="275" // Specify a default height
                src={`https://www.youtube.com/embed/${videoId}`}
                title={name} // Use the video name for the iframe title for better accessibility
                allow="accelerometer;
                autoplay;
                access-control-allow-origin;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
                fullscreen;
                allowFullScreen" // Allow the video to be played in fullscreen mode
                className="VIDEO_IFRAME
                max-w-full
                "
            ></iframe>
        </div>
    );
}
