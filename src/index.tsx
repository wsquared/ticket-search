import { render } from 'ink';
import React, { useCallback, useEffect, useState } from 'react';
import { TicketRepository } from './repository/TicketRepository/TicketRepository';
import { Ticket } from './model/Ticket';
import { TicketView } from './component';
import { v4 as uuid } from 'uuid';

const App = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const ticketsByOrganizationId = useCallback(async () => {
    const repo = new TicketRepository();
    const tickets = await repo.getByTag('Illinois');

    setTickets(tickets);
  }, []);

  useEffect(() => {
    (async () => {
      ticketsByOrganizationId();
    })();
  }, [ticketsByOrganizationId]);

  return (
    <>
      {tickets.map((ticket) => (
        <TicketView ticket={ticket} key={uuid()} />
      ))}
    </>
  );
};

render(<App />);
