import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MovieList from '../components/MovieList'; // Adjust the import path as needed

// Create a mock reducer for the Redux store
const mockReducer = (state = { movie: {} }, action) => state;

// Create a mock store
const store = createStore(mockReducer);

// Create a QueryClient instance
const queryClient = new QueryClient();

describe('MovieList Component', () => {
  test('renders without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MovieList searchQuery="" />
        </QueryClientProvider>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});