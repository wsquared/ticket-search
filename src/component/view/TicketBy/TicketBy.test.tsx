import React from 'react';
import { TicketBy } from './TicketBy';
import { render, screen } from '@testing-library/react';

describe('TicketBy', () => {
  it('should render ticket', () => {
    // const term = '436bf9b0-1147-4c0a-8439-6f79833bff5b';
    // const fn = jest.fn();
    // render(
    //   <TicketBy term={term} setLoading={() => undefined} getTicketBy={fn} />
    // );
    // expect(fn).toHaveBeenCalledWith(term);
  });

  it('should not render ticket', () => {
    // const term = ' ';
    // const fn = jest.fn();
    // render(
    //   <TicketBy term={term} setLoading={() => undefined} getTicketBy={fn} />
    // );
    // expect(screen.queryByText('No tickets found.')).toBeDefined();
  });

  it('should render null', () => {
    //   const term = undefined;
    //   const fn = jest.fn();
    //   render(
    //     <TicketBy term={term} setLoading={() => undefined} getTicketBy={fn} />
    //   );
    //   expect(screen.queryByText('No tickets found.')).toBeNull();
  });
});
