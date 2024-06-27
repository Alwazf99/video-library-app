/** @jsxImportSource @emotion/react */
import React from "react";
import ReactPlayer from "react-player";
import { css } from "@emotion/react";

const modalStyle = css`
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
`;

const closeButtonStyle = css`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const VideoPlayerModal = ({ videoUrl, onClose }) => {
  return (
    <div css={modalStyle}>
      <button css={closeButtonStyle} onClick={onClose}>
        &times;
      </button>
      <ReactPlayer url={videoUrl} playing controls />
    </div>
  );
};

export default VideoPlayerModal;
