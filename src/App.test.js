import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
 const {getByText} = render(<App />)
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders its fun', () => {
  const {getByText} = render(<App />)
   const linkElement = getByText(/it's fun/i);
   expect(linkElement).toBeInTheDocument();
 });
 