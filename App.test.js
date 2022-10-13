import { render, screen } from '@testing-library/react';
import PageComponent from './App';

test('renders learn react link', () => {
  render(<PageComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
