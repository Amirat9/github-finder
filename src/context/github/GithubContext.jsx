import { createContext, useState } from 'react';

const GithubContext = createContext();

const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL;
const GITHUB_API_TOKEN = import.meta.env.VITE_GITHUB_API_TOKEN;

// eslint-disable-next-line react/prop-types
export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch users from the GitHub API
  const fetchUsers = async () => {
    setLoading(true);
    // Headers for the GitHub API
    const headers = {
      Authorization: `Bearer ${GITHUB_API_TOKEN}`,
    };

    const res = await fetch(`${GITHUB_API_URL}/users`, {
      headers,
    });
    const data = await res.json();
    // Initialize the users state with the fetched data
    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
