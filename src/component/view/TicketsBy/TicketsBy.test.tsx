import React from 'react';
import { TicketsBy } from './TicketsBy';
import { render, screen, waitFor } from '@testing-library/react';
import { TicketRepository } from '../../../repository';

describe('TicketsBy', () => {
  it('should render tickets', async () => {
    const term = 'incident';

    render(
      <TicketsBy
        term={term}
        setLoading={() => undefined}
        getTicketsBy={new TicketRepository().getByType}
      />
    );

    await waitFor(() => screen.getAllByText(term));
  });

  it('should not render tickets', async () => {
    const term = ' ';

    render(
      <TicketsBy
        term={term}
        setLoading={() => undefined}
        getTicketsBy={jest.fn()}
      />
    );

    const result = await waitFor(() => screen.getByText('No ticket found.'));

    expect(result).toBeDefined();
  });

  it('should render null', () => {
    render(
      <TicketsBy
        term={undefined}
        setLoading={() => undefined}
        getTicketsBy={jest.fn()}
      />
    );

    const result = screen.queryByText('No ticket found.');

    expect(result).toBeNull();
  });
});
