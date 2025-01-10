import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    // Update state to show the fallback UI
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service or console
    console.error("Error caught in ErrorBoundary:", error);
    console.error("Error info:", info);
  }

  render() {
    const { hasError, errorMessage } = this.state;

    if (hasError) {
      // Custom fallback UI based on error message
      if (errorMessage === 'No movies found') {
        return <div>No movies found for your search query.</div>;
      }

      if (errorMessage.includes('404')) {
        return <div>Oops! The resource was not found. Please try again later.</div>;
      }

      if (errorMessage.includes('NetworkError')) {
        return <div>Failed to load data. Please check your network connection.</div>;
      }

      return <div>An error occurred: {errorMessage}</div>;
    }

    // Render children components when there are no errors
    return this.props.children;
  }
}

export default ErrorBoundary;

