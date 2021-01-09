import { render } from 'ink';
import React, { useCallback, useEffect, useState } from 'react';
import {
  TicketRepository,
  UserRepository,
  OrganizationRepository,
} from './repository';
import { Ticket, User, Organization } from './model';
import { OrganizationView, TicketView, UserView } from './component';
import { v4 as uuid } from 'uuid';

const App = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [organizations, setOrganizations] = useState<Organization[]>([]);

  const ticketsByOrganizationId = useCallback(async () => {
    const ticketRepo = new TicketRepository();

    setTickets(await ticketRepo.getByOrganizationId(103));
  }, []);

  const userByName = useCallback(async () => {
    const userRepo = new UserRepository();

    setUsers(await userRepo.getByName('Ingrid Wagner'));
  }, []);

  const organizationByName = useCallback(async () => {
    const orgRepo = new OrganizationRepository();

    setOrganizations([await orgRepo.getByName('Enthaze')]);
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

  useEffect(() => {
    (async () => {
      organizationByName();
    })();
  }, [organizationByName]);

  return (
    <>
      {tickets.map((ticket) => (
        <TicketView ticket={ticket} key={uuid()} />
      ))}

      {users.map((user) => (
        <UserView user={user} key={uuid()} />
      ))}

      {organizations.map((organization) => (
        <OrganizationView organization={organization} key={uuid()} />
      ))}
    </>
  );
};

render(<App />);
