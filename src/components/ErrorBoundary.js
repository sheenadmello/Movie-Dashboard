// ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: '' };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error, info) {
        console.log('Error caught by Error Boundary:', error);
        console.log(info);
    }

    render() {
        const { hasError, errorMessage } = this.state;

        if (hasError) {
            // Handle specific error messages for a better user experience
            // if (errorMessage === 'No movies found') {
            //     return <div>No movies found for your search query 123.</div>;
            // }
            return <div>{errorMessage || 'Something went wrong.'}</div>;
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;

