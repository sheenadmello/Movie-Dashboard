import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Wrap with BrowserRouter
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import SearchBar from './components/SearchBar';
import SortAndFilter from './components/SortAndFilter';
import ErrorBoundary from './components/ErrorBoundary';
import { StyledContainer, StyledCard } from './components/StyledComponents';

function RRoutes() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <BrowserRouter> {/* Ensure everything is wrapped in BrowserRouter */}
      <ErrorBoundary>
        <StyledContainer>
          
            {/* These will be displayed only on the / route */}
            <Routes>
              <Route path="/" element={<><SearchBar setSearchQuery={setSearchQuery} /><SortAndFilter /><MovieList searchQuery={searchQuery} /></>} /> 
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          
        </StyledContainer>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default RRoutes;

// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MovieList from './components/MovieList';
// import MovieDetails from './components/MovieDetails';
// import SearchBar from './components/SearchBar';
// import SortAndFilter from './components/SortAndFilter';
// import ErrorBoundary from './components/ErrorBoundary';
// import { StyledContainer, StyledCard, StyledPaginationContainer, StyledButton } from './components/StyledComponents';

// function RRoutes() {
//   const [searchQuery, setSearchQuery] = useState('');

//   return (
//     <BrowserRouter>
//       <ErrorBoundary>
//         <StyledContainer>
//           <StyledCard>
//             <SearchBar setSearchQuery={setSearchQuery} />
//             <SortAndFilter />
//           </StyledCard>
//           <Routes>
//             <Route path="/" element={<MovieList searchQuery={searchQuery} />} />
//             <Route path="/movie/:id" element={<MovieDetails />} />
//           </Routes>

//         </StyledContainer>
//       </ErrorBoundary>
//     </BrowserRouter>
//   );
// }

// export default RRoutes;

