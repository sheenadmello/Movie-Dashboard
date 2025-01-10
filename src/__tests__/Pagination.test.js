import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination'; // Adjust the import path accordingly

describe('Pagination Component Tests', () => {
  
  test('renders correctly with current page and total pages', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);
    
    // Check if current page and total pages are displayed correctly
    expect(screen.getByText('Page 1 of 5')).toBeInTheDocument();
  });

  test('calls onPageChange when "Next" is clicked', () => {
    const onPageChangeMock = jest.fn();
    render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChangeMock} />);
    
    // Click the "Next" button
    fireEvent.click(screen.getByText('Next'));
    
    // Check if onPageChange was called with the correct new page (2)
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  test('calls onPageChange when "Previous" is clicked', () => {
    const onPageChangeMock = jest.fn();
    render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChangeMock} />);
    
    // Click the "Previous" button
    fireEvent.click(screen.getByText('Previous'));
    
    // Check if onPageChange was called with the correct new page (1)
    expect(onPageChangeMock).toHaveBeenCalledWith(1);
  });

  test('disables "Previous" button on the first page', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);
    
    // Check if the "Previous" button is disabled on the first page
    expect(screen.getByText('Previous')).toBeDisabled();
  });

  test('disables "Next" button on the last page', () => {
    render(<Pagination currentPage={5} totalPages={5} onPageChange={() => {}} />);
    
    // Check if the "Next" button is disabled on the last page
    expect(screen.getByText('Next')).toBeDisabled();
  });

  test('does not call onPageChange if "Previous" is clicked on the first page', () => {
    const onPageChangeMock = jest.fn();
    render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChangeMock} />);
    
    // Click the "Previous" button
    fireEvent.click(screen.getByText('Previous'));
    
    // Check that onPageChange was not called since we're on the first page
    expect(onPageChangeMock).not.toHaveBeenCalled();
  });

  test('does not call onPageChange if "Next" is clicked on the last page', () => {
    const onPageChangeMock = jest.fn();
    render(<Pagination currentPage={5} totalPages={5} onPageChange={onPageChangeMock} />);
    
    // Click the "Next" button
    fireEvent.click(screen.getByText('Next'));
    
    // Check that onPageChange was not called since we're on the last page
    expect(onPageChangeMock).not.toHaveBeenCalled();
  });
});