/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonStyle = css`
  padding: 8px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

const FilterOptions = ({ showBookmarked, onToggleFilter }) => {
  return (
    <div>
      <button css={buttonStyle} onClick={onToggleFilter}>
        {showBookmarked ? "Show All" : "Show Bookmarked"}
      </button>
    </div>
  );
};

export default FilterOptions;
