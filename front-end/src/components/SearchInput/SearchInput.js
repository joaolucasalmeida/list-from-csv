import React, { useState, useEffect } from 'react';
import UserService from '../../services/UserService';
import "./SearchInput.css";

function SearchInput({ dataChanged }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await UserService.findUsers(query)
      if (response) {
        dataChanged(response.data)
      }
      else {
        dataChanged([])
      }
    };
    fetchData();
  }, [query, dataChanged]);

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Pesquisar"
        className='search-input'
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
}

export default SearchInput;
