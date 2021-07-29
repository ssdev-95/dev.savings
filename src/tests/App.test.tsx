import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import App from 'src/pages/Home';

test('learn testing library', () => {
  render(<App />);
  const textElement = screen.getByText(/Studies shows that/);
  expect(textElement).toBeInTheDocument();
});

test('button render', ()=>{
  render(<App/>);
  const buttonElement = screen.getByText(/Start saving today/);
  expect(buttonElement).toBeInTheDocument();
})
