import styled from 'styled-components';

// Define the styled components

export const StyledCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  margin: 20px 0;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
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
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e64e2e;
    transform: translateY(-5px);
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
  width: 320px;
  padding: 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;
  font-family: 'Roboto', sans-serif;

  &:focus {
    border-color: #ff5733;
  }

  &::placeholder {
    color: #bbb;
    font-style: italic;
  }
`;

export const StyledContainer = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  margin-right: 10px;
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
`;

export const StyledSelect = styled.select`
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;
  font-family: 'Roboto', sans-serif;

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
  padding: 25px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 320px;
  text-align: center;
  background-color: #f8f9fa;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.3);
  }
`;

export const StyledMoviePoster = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const StyledMovieTitle = styled.h2`
  font-size: 1.85em;
  margin: 0 0 12px;
  color: #2c3e50;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
`;

export const StyledMovieDetails = styled.p`
  margin: 6px 0;
  font-size: 1em;
  color: #34495e;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;

  & strong {
    color: #ff5733;
  }
`;

export const StyledMovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  font-family: 'Roboto', sans-serif;
`;

export const StyledTitle = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 25px;
  color: #2c3e50;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
`;

export const StyledPoster = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 25px;
`;

export const StyledDetail = styled.p`
  font-size: 1rem;
  margin: 12px 0;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: #34495e;
`;