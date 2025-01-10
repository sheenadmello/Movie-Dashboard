describe('Movie Dashboard E2E Testing', () => {
  beforeEach(() => {
    // Visit the home page of the app on localhost
    cy.visit('http://127.0.0.1:3100/');
  });

  it('should allow searching for movies by title', () => {
    const movieTitle = 'Inception';

    // Type movie name in the search bar and click the search button
    cy.get('[data-testid="search-input"]').type(movieTitle);
    cy.get('[data-testid="search-button"]').click();

    // Verify the search results contain the movie title
    cy.get('[data-testid="movie-item"]').should('contain.text', movieTitle);
  });

  it('should display movie details when a movie is clicked', () => {
    // Search for a movie
    cy.get('[data-testid="search-input"]').type('Inception');
    cy.get('[data-testid="search-button"]').click();

    // Click the first movie to navigate to the details page
    cy.get('[data-testid="movie-item"]').first().click();

    // Verify that the details page is displayed
    cy.url().should('include', '/movie');
    cy.get('[data-testid="movie-title"]').should('contain.text', 'Inception');
    cy.get('[data-testid="movie-plot"]').should('exist');
  });

  it('should allow filtering movies by genre', () => {
    // Select a genre filter (e.g., Action)
    cy.get('[data-testid="filter-genre"]').select('Action');

    // Verify that the displayed movies match the selected genre
    cy.get('[data-testid="movie-item"]').each(($movie) => {
      cy.wrap($movie).should('contain.text', 'Action');
    });
  });

  it('should allow sorting movies by rating', () => {
    // Select sort by rating
    cy.get('[data-testid="sort-select"]').select('Rating');

    // Verify the sorting is applied by checking the rating order (highest to lowest)
    let previousRating = 10;
    cy.get('[data-testid="movie-item"]')
      .each(($movie) => {
        const ratingText = $movie.find('[data-testid="movie-rating"]').text();
        const rating = parseFloat(ratingText);
        expect(rating).to.be.lessThan(previousRating);
        previousRating = rating;
      });
  });

  it('should paginate through movie results', () => {
    // Search for movies to populate the list
    cy.get('[data-testid="search-input"]').type('Inception');
    cy.get('[data-testid="search-button"]').click();

    // Check the first page of results
    cy.get('[data-testid="movie-item"]').should('have.length', 10);  // Assuming 10 items per page

    // Click the next page button
    cy.get('[data-testid="pagination-next"]').click();

    // Verify that the next page of results is loaded
    cy.get('[data-testid="movie-item"]').should('have.length', 10);
  });

  it('should show error message for failed network requests', () => {
    // Mock a failed API response
    cy.intercept('GET', 'https://www.omdbapi.com/*', { statusCode: 500 });

    // Try to search for a movie
    cy.get('[data-testid="search-input"]').type('Inception');
    cy.get('[data-testid="search-button"]').click();

    // Verify that an error message is shown
    cy.get('[data-testid="error-message"]').should('be.visible');
    cy.get('[data-testid="error-message"]').should('contain.text', 'Failed to fetch movie data');
  });
});

