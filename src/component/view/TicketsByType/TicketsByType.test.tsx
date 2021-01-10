import React, { useState } from 'react';
import { Ticket } from '../../../model';
import { TicketsByType } from './TicketsByType';
import { render, screen, waitFor, act, cleanup } from '@testing-library/react';

describe('TicketsByType', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render tickets', async () => {
    const type = 'incident';

    act(() => {
      const TestDouble: React.FC<{ type: string }> = ({ type }) => {
        const [tickets, setTickets] = useState<Ticket[]>([]);

        return (
          <TicketsByType
            type={type}
            setTickets={setTickets}
            setLoading={() => undefined}
            tickets={tickets}
          />
        );
      };

      render(<TestDouble type={type} />);
    });

    await waitFor(() => {
      screen.getAllByText(type);
    });
  });

  it('should not render tickets', () => {
    act(() => {
      const TestDouble: React.FC<{ type: string }> = ({ type }) => {
        return (
          <TicketsByType
            type={type}
            setTickets={() => []}
            setLoading={() => undefined}
            tickets={[]}
          />
        );
      };

      render(<TestDouble type={' '} />);
    });

    act(() => {
      expect(screen.queryAllByText('No tickets found.')).toHaveLength(0);
    });
  });

  it('should render null', () => {
    act(() => {
      const TestDouble: React.FC<{ type?: string }> = ({ type }) => {
        const [tickets, setTickets] = useState<Ticket[]>([]);
        return (
          <TicketsByType
            type={type}
            setTickets={setTickets}
            setLoading={() => undefined}
            tickets={tickets}
          />
        );
      };

      render(<TestDouble type={undefined} />);
    });

    act(() => {
      expect(screen.queryAllByText('No tickets found.')).toHaveLength(0);
    });
  });
});
