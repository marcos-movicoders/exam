import React from 'react';
import { render, screen } from '@testing-library/react';
import { Container } from 'inversify';
import { App } from './App';


test('renders learn react link', () => {
  const container = new Container()
  render(App);
  const linkElement = screen.getByText(/Hello world/i);
  expect(linkElement).toBeInTheDocument();
});

