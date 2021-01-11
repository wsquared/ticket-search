import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Text, Box } from 'ink';
import { Organization, Ticket, User } from '../../../model';
import { TicketView } from '../../../component';
import { ISearchByProps } from '../../';
import { OrganizationView } from '../Organization/Organization';
import { OrganizationRepository, UserRepository } from '../../../repository';
import { UserView } from '../User/User';
import { NotFound } from '../NotFound/NotFound';

interface TicketsByProps<T> extends ISearchByProps {
  term?: T;
  getTicketBy: (term: T) => Promise<Ticket>;
}

/// Search tickets by term
const TicketBy = <T extends unknown>({
  term,
  setLoading,
  getTicketBy,
}: TicketsByProps<T>) => {
  if (term === undefined) {
    return null;
  }

  const [ticket, setTicket] = useState<Ticket>();
  const [organization, setOrganization] = useState<Organization>();
  const [submitter, setSubmitter] = useState<User>();
  const [assignee, setAssignee] = useState<User>();

  const fetchTicket = useCallback(
    async (term: T) => {
      setLoading(true);

      const tempTicket = await getTicketBy(term);

      if (!tempTicket) {
        setLoading(false);
        return;
      }

      const userRepository = new UserRepository();

      const organizationPromise = new OrganizationRepository().getById(
        tempTicket.organizationId
      );

      const submitterPromise = userRepository.getById(tempTicket.submitterId);

      const assigneePromise = userRepository.getById(tempTicket.assigneeId);

      setSubmitter(await submitterPromise);
      setAssignee(await assigneePromise);
      setOrganization(await organizationPromise);
      setTicket(tempTicket);

      setLoading(false);
    },
    [term]
  );

  useEffect(() => {
    fetchTicket(term);
  }, [term]);

  if (!ticket) {
    return <NotFound item={'ticket'} />;
  }

  return (
    <>
      <Box marginLeft={2}>
        <Text color="blue">TICKET found with search term: {term}</Text>
      </Box>
      <TicketView ticket={ticket} />
      <>
        {organization ? (
          <>
            <Box marginLeft={2}>
              <Text color="yellow">Organization</Text>
            </Box>
            <OrganizationView organization={organization} />
          </>
        ) : null}
        {submitter ? (
          <>
            <Box marginLeft={2}>
              <Text color="yellow">Submitter</Text>
            </Box>
            <UserView user={submitter} />
          </>
        ) : null}
        {assignee ? (
          <>
            <Box marginLeft={2}>
              <Text color="yellow">Assignee</Text>
            </Box>
            <UserView user={assignee} />
          </>
        ) : null}
      </>
    </>
  );
};

TicketBy.propTypes = {
  term: PropTypes.any,
};

export { TicketBy as default, TicketBy };
