import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Ticket } from '../../../model';
import { TicketView } from '../../../component';
import { ISearchByProps } from '../../';

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

  const fetchTickets = useCallback(
    async (term: T) => {
      setLoading(true);
      setTickets(await getTicketsBy(term));
      setLoading(false);
    },
    [term]
  );

  useEffect(() => {
    fetchTickets(term);
  }, [term]);

  if (!tickets || tickets.length < 1) {
    return <TicketView ticket={undefined} term={String(term)} />;
  }

  return (
    <>
      {tickets.map((ticket) => (
        <TicketView ticket={ticket} term={String(term)} key={ticket.id} />
      ))}
    </>
  );
};

TicketsBy.propTypes = {
  term: PropTypes.any,
};

export { TicketsBy as default, TicketsBy };
