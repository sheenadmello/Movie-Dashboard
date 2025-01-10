import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RRoutes from '../RRoutes'; 

// Create a mock reducer for the Redux store
const mockReducer = (state = { movie: {} }, action) => state;

// Create a mock store
const store = createStore(mockReducer);

// Create a QueryClient instance
const queryClient = new QueryClient();

describe('RRoutes Component', () => {
  test('renders without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <RRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});



