import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { TicketRepository } from '../../../repository';
import { TicketView } from '../../../component';
import { ITicketsByProps } from '../../';
import { v4 as uuid } from 'uuid';

interface TicketsByType extends ITicketsByProps {
  type?: string;
}

/// Search tickets by type
const TicketsByType: React.FC<TicketsByType> = ({
  type,
  tickets,
  setTickets,
  setLoading,
  ticketRepo = new TicketRepository(),
}) => {
  if (type === undefined) {
    return null;
  }

  const ticketsByType = useCallback(
    async (type: string) => {
      setLoading(true);
      setTickets(await ticketRepo.getByType(type));
      setLoading(false);
    },
    [type]
  );

  useEffect(() => {
    (async () => {
      ticketsByType(type);
    })();
  }, [ticketsByType, type]);

  if (tickets.length < 1) {
    return <TicketView ticket={undefined} term={type} key={uuid()} />;
  }

  return (
    <>
      {tickets.map((ticket) => (
        <TicketView ticket={ticket} term={type} key={uuid()} />
      ))}
    </>
  );
};

TicketsByType.propTypes = {
  type: PropTypes.string,
};

export { TicketsByType as default, TicketsByType };
