// import styled from 'styled-components';

// // Define the styled components


// export const StyledCard = styled.div`
//   background-color: #f9f9f9;
//   border-radius: 8px;
//   padding: 20px;
//   margin: 20px 0;
//   width: 100%;
//   max-width: 600px;
// `;

// export const StyledPaginationContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   max-width: 600px;
// `;

// export const StyledButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:disabled {
//     background-color: #cccccc;
//     cursor: not-allowed;
//   }
// `;


// export const StyledSearchBarContainer = styled.div`
//     margin: 20px;
//     display: flex;
//     justify-content: center;
// `;

// export const StyledInput = styled.input`
//     width: 300px;
//     padding: 10px;
//     font-size: 16px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     outline: none;
//     transition: border-color 0.3s;

//     &:focus {
//         border-color: #007BFF;
//     }

//     &::placeholder {
//         color: #aaa;
//     }
// `;

// export const StyledContainer = styled.div`
//     margin: 20px auto;      /* Center horizontally */
//     display: flex;
//     flex-direction: column;
//     gap: 15px;
//     align-items: center;    /* Center content horizontally */
//     width: 100%;            /* Full width */
//     max-width: 600px;       /* Optional: limit the maximum width */
// `;

// export const StyledLabel = styled.label`
//     font-weight: bold;
//     margin-right: 10px;
// `;

// export const StyledSelect = styled.select`
//     padding: 8px;
//     font-size: 14px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     outline: none;
//     transition: border-color 0.3s;

//     &:focus {
//         border-color: #007BFF;
//     }
// `;

// export const StyledFormControl = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 10px;
// `;
// export const StyledMovieListContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

// export const StyledMovieItem = styled.li`
//     list-style: none;
//     margin: 15px;
//     padding: 15px;
//     border: 1px solid #ddd;
//     border-radius: 5px;
//     width: 300px;
//     text-align: center;
// `;

// export const StyledMoviePoster = styled.img`
//     max-width: 100%;
//     height: auto;
//     border-radius: 5px;
//     margin-bottom: 10px;
// `;

// export const StyledMovieTitle = styled.h2`
//     font-size: 1.5em;
//     margin: 0 0 10px;
// `;

// export const StyledMovieDetails = styled.p`
//     margin: 5px 0;
//     font-size: 1em;
// `;


import styled from 'styled-components';

// Define the styled components

export const StyledCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 25px;
  margin: 20px 0;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.02);
  }
`;

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
`;

export const StyledButton = styled.button`
  background-color: #ff5733;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e64e2e;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const StyledSearchBarContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

export const StyledInput = styled.input`
  width: 300px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #ff5733;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const StyledContainer = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

export const StyledSelect = styled.select`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #ff5733;
  }
`;

export const StyledFormControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledMovieListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledMovieItem = styled.li`
  list-style: none;
  margin: 15px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  background-color: #f8f9fa;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledMoviePoster = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const StyledMovieTitle = styled.h2`
  font-size: 1.75em;
  margin: 0 0 10px;
  color: #2c3e50;
`;

export const StyledMovieDetails = styled.p`
  margin: 5px 0;
  font-size: 1em;
  color: #34495e;
  
  & strong {
    color: #ff5733;
  }
`;

export const StyledMovieDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StyledTitle = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
`;

export const StyledPoster = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
`;

export const StyledDetail = styled.p`
    font-size: 1rem;
    margin: 10px 0;
`;
