import VideoItem from "./VideoItem";

const VideoList = ({ videos, onToggleBookmark, onPlayVideo }) => {
  return (
    <div>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onToggleBookmark={onToggleBookmark}
          onPlayVideo={onPlayVideo}
        />
      ))}
    </div>
  );
};

export default VideoList;
