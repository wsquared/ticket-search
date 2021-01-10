import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { Ticket } from '../../../model';
import { TicketView } from '../../../component';
import { ITicketByProps } from '../../';

interface TicketsByProps<T> extends ITicketByProps {
  term?: T;
  getTicketBy: (term: T) => Promise<Ticket>;
}

/// Search tickets by term
const TicketBy = <T extends unknown>({
  term,
  ticket,
  setTicket,
  setLoading,
  getTicketBy,
}: TicketsByProps<T>) => {
  if (term === undefined) {
    return null;
  }

  const fetchTicket = useCallback(
    async (term: T) => {
      setLoading(true);
      setTicket(await getTicketBy(term));
      setLoading(false);
    },
    [term]
  );

  useEffect(() => {
    (async () => {
      fetchTicket(term);
    })();
  }, [fetchTicket, term]);

  return (
    <>
      <TicketView ticket={ticket} term={String(term)} key={uuid()} />
    </>
  );
};

TicketBy.propTypes = {
  term: PropTypes.any,
};

export { TicketBy as default, TicketBy };
