import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar'; 

describe('SearchBar Component Tests', () => {

  test('renders input field correctly', () => {
    render(<SearchBar setSearchQuery={() => {}} />);
    
    // Check if the input field is rendered with the correct placeholder
    expect(screen.getByPlaceholderText('Search movies...')).toBeInTheDocument();
  });

  test('calls setSearchQuery when typing in the input field', () => {
    const setSearchQueryMock = jest.fn();
    render(<SearchBar setSearchQuery={setSearchQueryMock} />);
    
    // Get the input element
    const inputElement = screen.getByPlaceholderText('Search movies...');
    
    // Simulate typing in the input field
    fireEvent.change(inputElement, { target: { value: 'batman' } });
    
    // Check if setSearchQuery was called with the correct value
    expect(setSearchQueryMock).toHaveBeenCalledWith('batman');
  });

  test('updates internal state when typing in the input field', () => {
    render(<SearchBar setSearchQuery={() => {}} />);
    
    // Get the input element
    const inputElement = screen.getByPlaceholderText('Search movies...');
    
    // Simulate typing in the input field
    fireEvent.change(inputElement, { target: { value: 'spiderman' } });
    
    // Check if the input value is updated correctly
    expect(inputElement.value).toBe('spiderman');
  });
});

