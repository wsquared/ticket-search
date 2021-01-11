import React from 'react';
import { TicketBy } from './TicketBy';
import { render, screen, waitFor } from '@testing-library/react';
import { TicketRepository } from '../../../repository';

describe('TicketBy', () => {
  it('should render ticket', async () => {
    const term = '436bf9b0-1147-4c0a-8439-6f79833bff5b';

    render(
      <TicketBy
        term={term}
        setLoading={() => undefined}
        getTicketBy={new TicketRepository().getById}
      />
    );

    const result = await waitFor(() => screen.getByText(term));

    expect(result).toBeDefined();
  });

  it('should not render ticket', () => {
    const term = ' ';

    render(
      <TicketBy
        term={term}
        setLoading={() => undefined}
        getTicketBy={jest.fn()}
      />
    );

    expect(screen.queryByText('No ticket found.')).toBeDefined();
  });

  it('should render null', () => {
    const term = undefined;

    render(
      <TicketBy
        term={term}
        setLoading={() => undefined}
        getTicketBy={jest.fn()}
      />
    );

    expect(screen.queryByText('No ticket found.')).toBeNull();
  });
});
