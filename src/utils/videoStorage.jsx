export const saveVideos = (videos) => {
  localStorage.setItem("videos", JSON.stringify(videos));
};

export const getVideos = () => {
  const videos = localStorage.getItem("videos");
  return videos ? JSON.parse(videos) : [];
};
