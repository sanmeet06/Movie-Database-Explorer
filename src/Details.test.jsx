
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import Details from './Details';
// import '@testing-library/jest-dom';


// describe('Details Component', () => {
//   it('renders Details component with movie details', () => {
//     const movieDetails = {
//       title: 'Test Movie',
//       backdrop_path: '/test-backdrop.jpg',
//       popularity: 7.5,
//       release_date: '2022-01-01',
//       overview: 'This is a test movie.',
//     };

//     render(
//       <MemoryRouter initialEntries={['/details/123']} initialIndex={0}>
//         <Details />
//       </MemoryRouter>
//     );
//      expect(screen.getByText(movieDetails.title)).toBeInTheDocument();
//   expect(screen.getByText('Popularity: 7.5')).toBeInTheDocument();
//   expect(screen.getByText('Release Date: 2022-01-01')).toBeInTheDocument();
//   expect(screen.getByText('Overview: This is a test movie.')).toBeInTheDocument();
   
//   });

//   it('renders "No movie details found" when no details are provided', () => {
//     render(
//       <MemoryRouter>
//         <Details />
//       </MemoryRouter>
//     );
//     expect(screen.getByText('No movie details found.')).toBeInTheDocument();
//   });
// });
