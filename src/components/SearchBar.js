// import React, { useState } from 'react';

// function SearchBar({ setSearchQuery }) {
//     const [query, setQuery] = useState('');

//     const handleSearch = (event) => {
//         setQuery(event.target.value);
//         setSearchQuery(event.target.value); // Update the parent state
//     };

//     return (
//         <div>
//             <input 
//                 type="text" 
//                 value={query} 
//                 onChange={handleSearch} 
//                 placeholder="Search movies..."
//             />
//         </div>
//     );
// }

// export default SearchBar;


import React, { useState } from 'react';
import { StyledSearchBarContainer, StyledInput } from './StyledComponents'; // Import styled components

function SearchBar({ setSearchQuery }) {
    const [query, setQuery] = useState('');

    const handleSearch = (event) => {
        setQuery(event.target.value);
        setSearchQuery(event.target.value); // Update the parent state
    };

    return (
        <StyledSearchBarContainer>
            <StyledInput 
                type="text" 
                value={query} 
                onChange={handleSearch} 
                placeholder="Search movies..."
            />
        </StyledSearchBarContainer>
    );
}

export default SearchBar;


