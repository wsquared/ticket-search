import React, { useEffect, useCallback, useState } from 'react';
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
  setLoading,
  getTicketBy,
}: TicketsByProps<T>) => {
  if (term === undefined) {
    return null;
  }

  const [ticket, setTicket] = useState<Ticket>();

  const fetchTicket = useCallback(
    async (term: T) => {
      setLoading(true);
      setTicket(await getTicketBy(term));
      setLoading(false);
    },
    [term]
  );

  useEffect(() => {
    fetchTicket(term);
  }, [term]);

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
