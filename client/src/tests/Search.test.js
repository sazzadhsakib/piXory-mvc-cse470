import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../components/header/Search';

test('Should render Search Component', () => {
  render(<Search />);
  const searchBar = screen.queryByTestId('searchbar-1');

  expect(searchBar).toBeInTheDocument();
});
