import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { Ticket } from '../../../model';
import { TicketView } from '../../../component';
import { ITicketsByProps } from '../../';

interface TicketsByProps<T> extends ITicketsByProps {
  term?: T;
  getTicketsBy: (term: T) => Promise<Ticket[]>;
}

/// Search tickets by term
const TicketsBy = <T extends unknown>({
  term,
  tickets,
  setTickets,
  setLoading,
  getTicketsBy,
}: TicketsByProps<T>) => {
  if (term === undefined) {
    return null;
  }

  const fetchTickets = useCallback(
    async (term: T) => {
      setLoading(true);
      setTickets(await getTicketsBy(term));
      setLoading(false);
    },
    [term]
  );

  useEffect(() => {
    (async () => {
      fetchTickets(term);
    })();
  }, [fetchTickets, term]);

  if (tickets.length < 1) {
    return <TicketView ticket={undefined} term={String(term)} key={uuid()} />;
  }

  return (
    <>
      {tickets.map((ticket) => (
        <TicketView ticket={ticket} term={String(term)} key={uuid()} />
      ))}
    </>
  );
};

TicketsBy.propTypes = {
  term: PropTypes.any,
};

export { TicketsBy as default, TicketsBy };
