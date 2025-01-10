import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary'; 

// A component that throws an error for testing
const ProblematicComponent = () => {
  throw new Error('No movies found');
};

describe('ErrorBoundary Tests', () => {
  
  test('renders fallback UI for "No movies found" error message', () => {
    render(
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>
    );
    
    // Check if the "No movies found" message appears
    expect(screen.getByText(/No movies found for your search query/i)).toBeInTheDocument();
  });

  test('renders fallback UI for 404 error', () => {
    const ProblematicComponent404 = () => {
      throw new Error('404 Not Found');
    };

    render(
      <ErrorBoundary>
        <ProblematicComponent404 />
      </ErrorBoundary>
    );
    
    // Check if the "resource not found" message appears
    expect(screen.getByText(/Oops! The resource was not found. Please try again later/i)).toBeInTheDocument();
  });

  test('renders fallback UI for network error', () => {
    const ProblematicComponentNetwork = () => {
      throw new Error('NetworkError: Failed to fetch');
    };

    render(
      <ErrorBoundary>
        <ProblematicComponentNetwork />
      </ErrorBoundary>
    );
    
    // Check if the "network error" message appears
    expect(screen.getByText(/Failed to load data. Please check your network connection/i)).toBeInTheDocument();
  });

  test('renders generic error message for other errors', () => {
    const ProblematicComponentGeneric = () => {
      throw new Error('Something went wrong');
    };

    render(
      <ErrorBoundary>
        <ProblematicComponentGeneric />
      </ErrorBoundary>
    );
    
    // Check if the generic error message appears
    expect(screen.getByText(/An error occurred: Something went wrong/i)).toBeInTheDocument();
  });

  test('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>No error here!</div>
      </ErrorBoundary>
    );
    
    // Check if the child component renders correctly
    expect(screen.getByText(/No error here!/i)).toBeInTheDocument();
  });
});

