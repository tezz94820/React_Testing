import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => { 
  render(<App />); //render function helps to render a fake/virtual DOM for the tests environment.
  const linkElement = screen.getByText(/learn react/i); //screen gives access to the elements present on the screen.
  expect(linkElement).toBeInTheDocument(); //expect and test both are JEST methods  . but create-react-app provides it globally.
});

