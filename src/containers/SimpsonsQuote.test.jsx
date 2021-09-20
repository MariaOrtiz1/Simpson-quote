/* eslint-disable max-len */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SimpsonsQuote from './SimpsonsQuote';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const mockServer = setupServer(
  rest.get(
    'https://thesimpsonsquoteapi.glitch.me/quotes',
    (req, res, ctx) => {
      return res(
        ctx.json([{
          character: 'Maria',
          image: 'https://lh3.googleusercontent.com/proxy/vXQ_1XAO5pnXmVul6e_YBRovf32IZ0B6a-1a48GF4CzqVEcJU1qKeuzZndx2B_r44q2LywfL9RJrtqCfBbyfpGDxmggrpSAkPx9IC9FU_4kqkkZrSUofB7Svqb14JQU',
          quote: 'OwO'
        }])
      );
    }
  )
);

describe('SimpsonQuote', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());
  
  it('should display a button that grabs a quote', async () => {
    render(<SimpsonsQuote />);
  
    const button = screen.getByRole('button', { name: 'Fetching a Simpson character quote!' });
    fireEvent.click(button);
  
    return waitFor(() => {
      screen.getByText('Maria: OwO');
    });
  });
});
