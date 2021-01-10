import React, { useState } from 'react';
import { Ticket } from '../../../model';
import { TicketById } from './TicketById';
import { render, screen, waitFor, act, cleanup } from '@testing-library/react';

describe('TicketById', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render ticket', async () => {
    const id = '436bf9b0-1147-4c0a-8439-6f79833bff5b';

    act(() => {
      const TestDouble: React.FC<{ id: string }> = ({ id }) => {
        const [ticket, setTicket] = useState<Ticket>();

        return (
          <TicketById
            id={id}
            setTicket={setTicket}
            setLoading={() => undefined}
            ticket={ticket}
          />
        );
      };

      render(<TestDouble id={id} />);
    });

    await waitFor(() => {
      screen.getByText(id);
    });
  });

  it('should not render ticket', () => {
    act(() => {
      const TestDouble: React.FC<{ id: string }> = ({ id }) => {
        const [ticket, setTicket] = useState<Ticket>();
        return (
          <TicketById
            id={id}
            setTicket={setTicket}
            setLoading={() => undefined}
            ticket={ticket}
          />
        );
      };

      render(<TestDouble id={' '} />);
    });

    act(() => {
      expect(screen.queryByText('No tickets found.')).toBeDefined();
    });
  });

  it('should render null', () => {
    act(() => {
      const TestDouble: React.FC<{ id?: string }> = ({ id }) => {
        const [ticket, setTicket] = useState<Ticket>();
        return (
          <TicketById
            id={id}
            setTicket={setTicket}
            setLoading={() => undefined}
            ticket={ticket}
          />
        );
      };

      render(<TestDouble id={undefined} />);
    });

    act(() => {
      expect(screen.queryByText('No tickets found.')).toBeNull();
    });
  });
});
