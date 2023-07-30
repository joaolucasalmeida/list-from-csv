import React, { useState, useEffect } from 'react';
import UserService from '../../services/UserService';

function SearchInput() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await UserService.findUsers(query)
      if(response) {
        setData(response.data)
      }
      else {
        setData([])
      }
    };

    const timerId = setTimeout(() => {
      if (query) {
        fetchData();
      }
    }, 500); // Delay for 500 ms.

    // This is cleanup function that React will run when component gets unmounted
    // or when data-fetching effect needs to be re-run (query is changed).
    return () => clearTimeout(timerId);
  }, [query]);

  return (
    <div>
      <input 
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      {/* Displaying fetched data */}
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default SearchInput;
