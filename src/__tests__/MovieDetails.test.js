import { render, screen, waitFor } from '@testing-library/react';
import MovieDetails from '../components/MovieDetails';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock fetch to simulate the API call
global.fetch = jest.fn();

describe('MovieDetails Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('displays movie details when data is fetched successfully', async () => {
    const movieData = {
      Title: 'Inception',
      Year: '2010',
      Genre: 'Action, Adventure, Sci-Fi',
      imdbRating: '8.8',
      Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt',
      Plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
      Poster: 'https://example.com/inception.jpg',
      Response: 'True'
    };

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(movieData),
    });

    render(
      <Router>
        <MovieDetails />
      </Router>
    );

    // Check loading state
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    // Wait for movie details to load and check content
    await waitFor(() => expect(screen.getByText(/Inception/i)).toBeInTheDocument());
    expect(screen.getByText(/2010/i)).toBeInTheDocument();
    expect(screen.getByText(/Action, Adventure, Sci-Fi/i)).toBeInTheDocument();
    expect(screen.getByText(/8.8/i)).toBeInTheDocument();
    expect(screen.getByText(/Leonardo DiCaprio, Joseph Gordon-Levitt/i)).toBeInTheDocument();
    expect(screen.getByText(/A thief who steals corporate secrets/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Inception/i)).toHaveAttribute('src', 'https://example.com/inception.jpg');
  });

  test('displays error message when movie is not found', async () => {
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({ Response: 'False' }),
    });

    render(
      <Router>
        <MovieDetails />
      </Router>
    );

    await waitFor(() => expect(screen.getByText(/Movie not found/i)).toBeInTheDocument());
  });

  test('displays error message on failed fetch', async () => {
    fetch.mockRejectedValueOnce(new Error('Failed to fetch movie details'));

    render(
      <Router>
        <MovieDetails />
      </Router>
    );

    // Wait for error message to appear
    await waitFor(() => expect(screen.getByText(/Error: Failed to fetch movie details/i)).toBeInTheDocument());
  });
});
