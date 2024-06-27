/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";

const searchBarStyle = css`
  margin-bottom: 20px;
`;

const inputStyle = css`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch();
  };

  return (
    <div css={searchBarStyle}>
      <input
        css={inputStyle}
        type="text"
        placeholder="Search users by name"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
