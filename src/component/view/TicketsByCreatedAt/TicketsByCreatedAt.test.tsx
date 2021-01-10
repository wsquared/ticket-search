import React, { useState } from 'react';
import { Ticket } from '../../../model';
import { TicketsByCreatedAt } from './TicketsByCreatedAt';
import { render, screen, waitFor, act, cleanup } from '@testing-library/react';

describe('TicketsByCreatedAt', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render tickets', async () => {
    const createdAt = '2016-07-16T12:05:12 -10:00';

    act(() => {
      const TestDouble: React.FC<{ createdAt: string }> = ({ createdAt }) => {
        const [tickets, setTickets] = useState<Ticket[]>([]);

        return (
          <TicketsByCreatedAt
            createdAt={createdAt}
            setTickets={setTickets}
            setLoading={() => undefined}
            tickets={tickets}
          />
        );
      };

      render(<TestDouble createdAt={createdAt} />);
    });

    await waitFor(() => {
      screen.getByText(createdAt);
    });
  });

  it('should not render tickets', () => {
    act(() => {
      const TestDouble: React.FC<{ createdAt: string }> = ({ createdAt }) => {
        return (
          <TicketsByCreatedAt
            createdAt={createdAt}
            setTickets={() => []}
            setLoading={() => undefined}
            tickets={[]}
          />
        );
      };

      render(<TestDouble createdAt={' '} />);
    });

    act(() => {
      expect(screen.queryByText('No tickets found.')).toBeDefined();
    });
  });

  it('should render null', () => {
    act(() => {
      const TestDouble: React.FC<{ createdAt?: string }> = ({ createdAt }) => {
        const [tickets, setTickets] = useState<Ticket[]>([]);
        return (
          <TicketsByCreatedAt
            createdAt={createdAt}
            setTickets={setTickets}
            setLoading={() => undefined}
            tickets={tickets}
          />
        );
      };

      render(<TestDouble createdAt={undefined} />);
    });

    act(() => {
      expect(screen.queryByText('No tickets found.')).toBeNull();
    });
  });
});
