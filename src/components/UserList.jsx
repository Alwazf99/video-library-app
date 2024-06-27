/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";

const userListStyle = css`
  margin-top: 20px;
  padding: 0;
  list-style-type: none;
`;

const listItemStyle = css`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const sortButtonStyle = css`
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

const UserList = ({ searchQuery, pastSearchTerms, onAddSearchTerm }) => {
  const [users, setUsers] = useState([]);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSort = () => {
    const sortedUsers = [...filteredUsers].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setUsers(sortedUsers);
    setSorted(true);
  };

  useEffect(() => {
    if (searchQuery && !pastSearchTerms.includes(searchQuery)) {
      onAddSearchTerm(searchQuery);
    }
  }, [searchQuery, pastSearchTerms, onAddSearchTerm]);

  return (
    <div>
      <button css={sortButtonStyle} onClick={handleSort}>
        Sort by Name
      </button>
      <ul css={userListStyle}>
        {filteredUsers.map((user) => (
          <li key={user.id} css={listItemStyle}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
