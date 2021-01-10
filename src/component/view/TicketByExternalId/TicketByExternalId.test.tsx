import React, { useState } from 'react';
import { Ticket } from '../../../model';
import { TicketByExternalId } from './TicketByExternalId';
import { render, screen, waitFor, act, cleanup } from '@testing-library/react';

describe('TicketByExternalId', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render ticket', async () => {
    const externalId = '4a70394c-9b1a-4766-9d41-ef7f61a01a1c';

    act(() => {
      const TestDouble: React.FC<{ externalId: string }> = ({ externalId }) => {
        const [ticket, setTicket] = useState<Ticket>();

        return (
          <TicketByExternalId
            externalId={externalId}
            setTicket={setTicket}
            setLoading={() => undefined}
            ticket={ticket}
          />
        );
      };

      render(<TestDouble externalId={externalId} />);
    });

    await waitFor(() => {
      screen.getByText(externalId);
    });
  });

  it('should not render ticket', () => {
    act(() => {
      const TestDouble: React.FC<{ externalId: string }> = ({ externalId }) => {
        const [ticket, setTicket] = useState<Ticket>();
        return (
          <TicketByExternalId
            externalId={externalId}
            setTicket={setTicket}
            setLoading={() => undefined}
            ticket={ticket}
          />
        );
      };

      render(<TestDouble externalId={' '} />);
    });

    act(() => {
      expect(screen.queryByText('No tickets found.')).toBeDefined();
    });
  });

  it('should render null', () => {
    act(() => {
      const TestDouble: React.FC<{ externalId?: string }> = ({
        externalId,
      }) => {
        const [ticket, setTicket] = useState<Ticket>();
        return (
          <TicketByExternalId
            externalId={externalId}
            setTicket={setTicket}
            setLoading={() => undefined}
            ticket={ticket}
          />
        );
      };

      render(<TestDouble externalId={undefined} />);
    });

    act(() => {
      expect(screen.queryByText('No tickets found.')).toBeNull();
    });
  });
});
