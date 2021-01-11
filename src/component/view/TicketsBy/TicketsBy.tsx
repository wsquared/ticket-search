import React, { useEffect, useCallback, useState } from 'react';
import { Box, Text } from 'ink';
import PropTypes from 'prop-types';
import { Ticket, User, Organization } from '../../../model';
import { TicketView, UserView } from '../../../component';
import { ISearchByProps } from '../../';
import { OrganizationRepository, UserRepository } from '../../../repository';
import { NotFound } from '../NotFound/NotFound';
import { OrganizationView } from '../Organization/Organization';

interface TicketsByProps<T> extends ISearchByProps {
  term?: T;
  getTicketsBy: (term: T) => Promise<Ticket[]>;
}

/// Search tickets by term
const TicketsBy = <T extends unknown>({
  term,
  setLoading,
  getTicketsBy,
}: TicketsByProps<T>) => {
  if (term === undefined) {
    return null;
  }

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [submittersMap, setSubmittersMap] = useState<Map<string, User>>(
    new Map()
  );
  const [assigneeMap, setAssigneeMap] = useState<Map<string, User>>(new Map());
  const [organizationMap, setOrganizationMap] = useState<
    Map<string, Organization>
  >(new Map());

  const fetchTickets = useCallback(
    async (term: T) => {
      setLoading(true);

      const tempTickets = (await getTicketsBy(term)) || [];
      const userRepo = new UserRepository();
      const organizationRepo = new OrganizationRepository();

      if (!tempTickets || tempTickets.length < 1) {
        setTickets(tempTickets);
        setLoading(false);
      }

      await Promise.all(
        tempTickets.map(async (ticket) => {
          // Get submitter and assignee in parallel
          const submitterPromise = userRepo.getById(ticket.submitterId);
          const assigneePromise = userRepo.getById(ticket.assigneeId);
          const organizationPromise = organizationRepo.getById(
            ticket.organizationId
          );

          submittersMap.set(ticket.id, await submitterPromise);
          assigneeMap.set(ticket.id, await assigneePromise);
          organizationMap.set(ticket.id, await organizationPromise);
        })
      );

      setSubmittersMap(submittersMap);
      setAssigneeMap(assigneeMap);
      setOrganizationMap(organizationMap);
      setTickets(tempTickets);
      setLoading(false);
    },
    [term]
  );

  useEffect(() => {
    fetchTickets(term);
  }, [term]);

  if (!tickets || tickets.length < 1) {
    return <NotFound item={'ticket'} />;
  }

  return (
    <>
      {tickets.map((ticket) => (
        <Box key={ticket.id} flexDirection="column">
          <Box marginLeft={2}>
            <Text color="blue">TICKET found with search term: {term}</Text>
          </Box>
          <TicketView ticket={ticket} />
          {submittersMap.get(ticket.id) ? (
            <>
              <Box marginLeft={2}>
                <Text color="yellow">Submitter</Text>
              </Box>
              <UserView user={submittersMap.get(ticket.id) as User} />
            </>
          ) : null}
          {assigneeMap.get(ticket.id) ? (
            <>
              <Box marginLeft={2}>
                <Text color="yellow">Assignee</Text>
              </Box>
              <UserView user={assigneeMap.get(ticket.id) as User} />
            </>
          ) : null}
          {organizationMap.get(ticket.id) ? (
            <>
              <Box marginLeft={2}>
                <Text color="yellow">Assignee</Text>
              </Box>
              <OrganizationView
                organization={organizationMap.get(ticket.id) as Organization}
              />
            </>
          ) : null}
        </Box>
      ))}
    </>
  );
};

TicketsBy.propTypes = {
  term: PropTypes.any,
};

export { TicketsBy as default, TicketsBy };
