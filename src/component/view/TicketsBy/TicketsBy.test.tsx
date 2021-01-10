import React, { useState } from 'react';
import { Ticket } from '../../../model';
import { TicketsBy } from './TicketsBy';
import { render, screen, waitFor, act, cleanup } from '@testing-library/react';
import { TicketRepository } from '../../../repository';

describe('TicketsBy', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render tickets', async () => {
    const term = 'incident';

    act(() => {
      const TestDouble: React.FC<{ term: string }> = ({ term }) => {
        const [tickets, setTickets] = useState<Ticket[]>([]);

        return (
          <TicketsBy
            term={term}
            setTickets={setTickets}
            setLoading={() => undefined}
            tickets={tickets}
            getTicketsBy={new TicketRepository().getByType}
          />
        );
      };

      render(<TestDouble term={term} />);
    });

    await waitFor(() => {
      screen.getAllByText(term);
    });
  });

  it('should not render tickets', () => {
    act(() => {
      const TestDouble: React.FC<{ term: string }> = ({ term }) => {
        return (
          <TicketsBy
            term={term}
            setTickets={() => []}
            setLoading={() => undefined}
            tickets={[]}
            getTicketsBy={new TicketRepository().getByType}
          />
        );
      };

      render(<TestDouble term={' '} />);
    });

    act(() => {
      expect(screen.queryAllByText('No tickets found.')).toHaveLength(0);
    });
  });

  it('should render null', () => {
    act(() => {
      const TestDouble: React.FC<{ term?: string }> = ({ term }) => {
        const [tickets, setTickets] = useState<Ticket[]>([]);
        return (
          <TicketsBy
            term={term}
            setTickets={setTickets}
            setLoading={() => undefined}
            tickets={tickets}
            getTicketsBy={new TicketRepository().getByType}
          />
        );
      };

      render(<TestDouble term={undefined} />);
    });

    act(() => {
      expect(screen.queryAllByText('No tickets found.')).toHaveLength(0);
    });
  });
});
