import React, { useState } from 'react';
import { Ticket } from '../../../model';
import { TicketBy } from './TicketBy';
import { render, screen, waitFor, act, cleanup } from '@testing-library/react';
import { TicketRepository } from '../../../repository';

describe('TicketBy', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render ticket', async () => {
    const term = '436bf9b0-1147-4c0a-8439-6f79833bff5b';

    act(() => {
      const TestDouble: React.FC<{ term: string }> = ({ term }) => {
        const [ticket, setTicket] = useState<Ticket>();

        return (
          <TicketBy
            term={term}
            setTicket={setTicket}
            setLoading={() => undefined}
            ticket={ticket}
            getTicketBy={new TicketRepository().getById}
          />
        );
      };

      render(<TestDouble term={term} />);
    });

    await waitFor(() => {
      screen.getByText(term);
    });
  });

  it('should not render ticket', () => {
    act(() => {
      const TestDouble: React.FC<{ term: string }> = ({ term }) => {
        const [ticket, setTicket] = useState<Ticket>();
        return (
          <TicketBy
            term={term}
            setTicket={setTicket}
            setLoading={() => undefined}
            ticket={ticket}
            getTicketBy={new TicketRepository().getById}
          />
        );
      };

      render(<TestDouble term={' '} />);
    });

    act(() => {
      expect(screen.queryByText('No tickets found.')).toBeDefined();
    });
  });

  it('should render null', () => {
    act(() => {
      const TestDouble: React.FC<{ term?: string }> = ({ term }) => {
        const [ticket, setTicket] = useState<Ticket>();
        return (
          <TicketBy
            term={term}
            setTicket={setTicket}
            setLoading={() => undefined}
            ticket={ticket}
            getTicketBy={new TicketRepository().getById}
          />
        );
      };

      render(<TestDouble term={undefined} />);
    });

    act(() => {
      expect(screen.queryByText('No tickets found.')).toBeNull();
    });
  });
});
