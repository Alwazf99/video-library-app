/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { Global } from "@emotion/react";
import AddVideoForm from "./components/AddVideoForm";
import VideoList from "./components/VideoList";
import VideoPlayerModal from "./components/VideoPlayerModal";
import FilterOptions from "./components/FilterOptions";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import PastSearchTerms from "./components/PastSearchTerms";
import { saveVideos, getVideos } from "./utils/videoStorage";
import { saveSearchTerms, getSearchTerms } from "./utils/searchStorage";
import { globalStyles } from "./styles/global";

const App = () => {
  const [videos, setVideos] = useState(getVideos() || []);
  const [showBookmarked, setShowBookmarked] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [pastSearchTerms, setPastSearchTerms] = useState(
    getSearchTerms() || []
  );

  const addVideo = (video) => {
    const updatedVideos = [...videos, video];
    setVideos(updatedVideos);
    saveVideos(updatedVideos);
  };

  const toggleBookmark = (id) => {
    const updatedVideos = videos.map((video) =>
      video.id === id ? { ...video, bookmarked: !video.bookmarked } : video
    );
    setVideos(updatedVideos);
    saveVideos(updatedVideos);
  };

  const toggleFilter = () => {
    setShowBookmarked(!showBookmarked);
  };

  const playVideo = (url) => {
    setPlayingVideo(url);
  };

  const closeVideoPlayer = () => {
    setPlayingVideo(null);
  };

  const addSearchTerm = (term) => {
    const updatedTerms = [...pastSearchTerms, term];
    setPastSearchTerms(updatedTerms);
    saveSearchTerms(updatedTerms);
  };

  const filteredVideos = showBookmarked
    ? videos.filter((video) => video.bookmarked)
    : videos;

  return (
    <div className="container">
      <Global styles={globalStyles} />
      <h1>Video Library</h1>
      <AddVideoForm onAddVideo={addVideo} />
      <FilterOptions
        showBookmarked={showBookmarked}
        onToggleFilter={toggleFilter}
      />
      <VideoList
        videos={filteredVideos}
        onToggleBookmark={toggleBookmark}
        onPlayVideo={playVideo}
      />
      {playingVideo && (
        <>
          <div className="overlay" onClick={closeVideoPlayer}></div>
          <VideoPlayerModal
            videoUrl={playingVideo}
            onClose={closeVideoPlayer}
          />
        </>
      )}
      <h2>User Info</h2>
      <SearchBar onSearch={setSearchQuery} />
      <PastSearchTerms
        pastSearchTerms={pastSearchTerms}
        onSearch={setSearchQuery}
      />
      <UserList
        searchQuery={searchQuery}
        pastSearchTerms={pastSearchTerms}
        onAddSearchTerm={addSearchTerm}
      />
    </div>
  );
};

export default App;
