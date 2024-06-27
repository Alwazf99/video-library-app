/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { css } from "@emotion/react";

const formStyle = css`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const inputStyle = css`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const buttonStyle = css`
  padding: 8px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const AddVideoForm = ({ onAddVideo }) => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleAddVideo = () => {
    if (videoUrl) {
      const newVideo = {
        id: uuidv4(),
        url: videoUrl,
        bookmarked: false,
      };
      onAddVideo(newVideo);
      setVideoUrl("");
    }
  };

  return (
    <div css={formStyle}>
      <input
        css={inputStyle}
        type="text"
        placeholder="Enter video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button css={buttonStyle} onClick={handleAddVideo}>
        Add Video
      </button>
    </div>
  );
};

export default AddVideoForm;
