import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders html button', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/i am a button!/i);
  expect(buttonElement).toBeInTheDocument();
});
test('renders impactx button', () => {
  const { getByText } = render(<App />);
  const impactxButtonElement = getByText(/impact x button/i);
  expect(impactxButtonElement).toBeInTheDocument();
});
test('renders input field', () => {
  const { getByText } = render(<App />);
  const impactxInputElement = getByText(/all input fields must have a label/i);
  expect(impactxInputElement).toBeInTheDocument();
});