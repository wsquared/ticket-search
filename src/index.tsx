import { render } from 'ink';
import React, { useCallback, useEffect, useState } from 'react';
import { TicketRepository, UserRepository } from './repository';
import { Ticket, User } from './model';
import { TicketView, UserView } from './component';
import { v4 as uuid } from 'uuid';

const App = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const ticketsByOrganizationId = useCallback(async () => {
    const ticketRepo = new TicketRepository();

    setTickets(await ticketRepo.getByOrganizationId(103));
  }, []);

  const userByName = useCallback(async () => {
    const userRepo = new UserRepository();

    setUsers(await userRepo.getByName('Ingrid Wagner'));
  }, []);

  useEffect(() => {
    (async () => {
      ticketsByOrganizationId();
    })();
  }, [ticketsByOrganizationId]);

  useEffect(() => {
    (async () => {
      userByName();
    })();
  }, [userByName]);

  return (
    <>
      {tickets.map((ticket) => (
        <TicketView ticket={ticket} key={uuid()} />
      ))}

      {users.map((user) => (
        <UserView user={user} key={uuid()} />
      ))}
    </>
  );
};

render(<App />);
