import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/header/Header';

test('Home Button Works', () => {
  render(<Header />);
  const logo = screen.getByRole('heading', {
    name: /pixory/i,
  });

  expect(logo).toBeInTheDocument();
});
