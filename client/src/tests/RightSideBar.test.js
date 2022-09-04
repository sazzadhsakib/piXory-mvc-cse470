import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RightSideBar from '../components/header/home/post_card/RightSideBar';

test('Should render Search Component', () => {
  render(<RightSideBar />);
  const rightSideBar = screen.getAllByAltText('sidebar');

  expect(rightSideBar).toBeInTheDocument();
});
