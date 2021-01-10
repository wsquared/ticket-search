import React, { useState } from 'react';
import { Ticket } from '../../../model';
import { TicketByUrl } from './TicketByUrl';
import { render, screen, waitFor, act, cleanup } from '@testing-library/react';

describe('TicketByUrl', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render ticket', async () => {
    const url =
      'http://initech.zendesk.com/api/v2/tickets/87db32c5-76a3-4069-954c-7d59c6c21de0.json';

    act(() => {
      const TestDouble: React.FC<{ url: string }> = ({ url }) => {
        const [ticket, setTicket] = useState<Ticket>();

        return (
          <TicketByUrl
            url={url}
            setTicket={setTicket}
            setLoading={() => undefined}
            ticket={ticket}
          />
        );
      };

      render(<TestDouble url={url} />);
    });

    await waitFor(() => {
      screen.getByText(url);
    });
  });

  it('should not render ticket', () => {
    act(() => {
      const TestDouble: React.FC<{ url: string }> = ({ url }) => {
        const [ticket, setTicket] = useState<Ticket>();
        return (
          <TicketByUrl
            url={url}
            setTicket={setTicket}
            setLoading={() => undefined}
            ticket={ticket}
          />
        );
      };

      render(<TestDouble url={' '} />);
    });

    act(() => {
      expect(screen.queryByText('No tickets found.')).toBeDefined();
    });
  });

  it('should render null', () => {
    act(() => {
      const TestDouble: React.FC<{ url?: string }> = ({ url }) => {
        const [ticket, setTicket] = useState<Ticket>();
        return (
          <TicketByUrl
            url={url}
            setTicket={setTicket}
            setLoading={() => undefined}
            ticket={ticket}
          />
        );
      };

      render(<TestDouble url={undefined} />);
    });

    act(() => {
      expect(screen.queryByText('No tickets found.')).toBeNull();
    });
  });
});
