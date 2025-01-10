import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import SortAndFilter from '../components/SortAndFilter'; 
import store from '../store'; 

describe('SortAndFilter Component', () => {
    test('renders sorting dropdown correctly', () => {
        render(
            <Provider store={store}>
                <SortAndFilter />
            </Provider>
        );

        // Check if the sorting dropdown is rendered with the correct options
        expect(screen.getByLabelText(/Sort by:/)).toBeInTheDocument();

    });

    test('renders genre filter dropdown correctly', () => {
        render(
            <Provider store={store}>
                <SortAndFilter />
            </Provider>
        );

        // Check if the genre filter dropdown is rendered with the correct options
        expect(screen.getByLabelText(/Filter by Genre:/)).toBeInTheDocument();

    });

    test('renders rating filter dropdown correctly', () => {
        render(
            <Provider store={store}>
                <SortAndFilter />
            </Provider>
        );

        // Check if the rating filter dropdown is rendered with the correct options
        expect(screen.getByLabelText(/Filter by Rating:/)).toBeInTheDocument();
        
    });
});
