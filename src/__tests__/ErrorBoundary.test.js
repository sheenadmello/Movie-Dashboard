import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorBoundary from '../components/ErrorBoundary';  // Adjust the import path as needed

// A test component that throws an error
const ProblematicComponent = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary', () => {
  test('displays an error message when a child component throws an error', () => {
    render(
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>
    );
    
    // Check that the error message is displayed
    expect(screen.getByText(/Test error/i)).toBeInTheDocument();
  });

  test('renders child components when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Test child component</div>
      </ErrorBoundary>
    );
    
    // Check that the child component is displayed
    expect(screen.getByText(/Test child component/i)).toBeInTheDocument();
  });
});
