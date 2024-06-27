/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const pastSearchTermStyle = css`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  margin: 5px;
  background-color: #e0e0e0;
  cursor: pointer;
`;

const PastSearchTerms = ({ pastSearchTerms, onSearch }) => {
  if (!Array.isArray(pastSearchTerms) || pastSearchTerms.length === 0) {
    return null;
  }

  return (
    <div>
      <h3>Past Search Terms:</h3>
      {pastSearchTerms.map((term, index) => (
        <span
          key={index}
          css={pastSearchTermStyle}
          onClick={() => onSearch(term)}
        >
          {term}
        </span>
      ))}
    </div>
  );
};

export default PastSearchTerms;
