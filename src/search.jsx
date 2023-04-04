import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchComponent() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://example.com/search?q=${searchText}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='bg-zinc-700 grid grid-cols-10 p-0
    col-start-4 col-span-4 m-1 max-md:col-start-5 max-md:col-span-3
    rounded-3xl text-slate-200'>
      <input type="text" value={searchText}
      placeholder='Search'
      className='bg-zinc-700 p-2
      col-start-1 col-span-9 max-md:col-start-1 max-md:col-span-7
      rounded-3xl text-slate-200'
      onChange={(e) => setSearchText(e.target.value)} />
      <button
    //   className='pl-20'
        onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
