import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { TicketRepository } from '../../../repository';
import { TicketView } from '../../../component';
import { ITicketsByProps } from '../../';

interface TicketsByCreatedAtProps extends ITicketsByProps {
  createdAt?: string;
}

/// Search tickets by createdAt
const TicketsByCreatedAt: React.FC<TicketsByCreatedAtProps> = ({
  createdAt,
  tickets,
  setTickets,
  setLoading,
  ticketRepo = new TicketRepository(),
}) => {
  if (createdAt === undefined) {
    return null;
  }

  const ticketByCreatedAt = useCallback(
    async (createdAt: string) => {
      setLoading(true);
      setTickets(await ticketRepo.getByCreatedAt(createdAt));
      setLoading(false);
    },
    [createdAt]
  );

  useEffect(() => {
    (async () => {
      ticketByCreatedAt(createdAt);
    })();
  }, [ticketByCreatedAt, createdAt]);

  if (tickets.length < 1) {
    return <TicketView ticket={undefined} term={createdAt} key={uuid()} />;
  }

  return (
    <>
      {tickets.map((ticket) => (
        <TicketView ticket={ticket} term={createdAt} key={uuid()} />
      ))}
    </>
  );
};

TicketsByCreatedAt.propTypes = {
  createdAt: PropTypes.string,
};

export { TicketsByCreatedAt as default, TicketsByCreatedAt };
