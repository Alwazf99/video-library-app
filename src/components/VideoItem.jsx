/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const itemStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const buttonStyle = css`
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const VideoItem = ({ video, onToggleBookmark, onPlayVideo }) => {
  return (
    <div css={itemStyle}>
      <p>{video.url}</p>
      <div>
        <button css={buttonStyle} onClick={() => onPlayVideo(video.url)}>
          Play
        </button>
        <button css={buttonStyle} onClick={() => onToggleBookmark(video.id)}>
          {video.bookmarked ? "Unbookmark" : "Bookmark"}
        </button>
      </div>
    </div>
  );
};

export default VideoItem;
