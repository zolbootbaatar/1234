import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchComponent() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://demo.dataverse.org/api/search?q=${searchText}`);
      const data = await response.json();
      console.log(data.data.items)
      setSearchResults(data.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='bg-zinc-300 dark:bg-zinc-700 grid grid-cols-10 p-0 m-2
    col-start-4 col-span-4 max-md:col-start-5 max-md:col-span-3
    rounded-3xl text-slate-200'>
      <input type="text" value={searchText}
      placeholder='Search'
      className='bg-zinc-300 dark:bg-zinc-700 p-2
      col-start-1 col-span-9 max-md:col-start-1 max-md:col-span-7
      rounded-3xl text-slate-200'
      onChange={(e) => setSearchText(e.target.value)} />
      <button
          onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <ul>
        {searchResults && searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
