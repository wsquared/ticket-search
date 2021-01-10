import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { TicketRepository } from '../../../repository';
import { TicketView } from '../../../component';
import { ITicketByProps } from '../../';

interface TicketByIdProps extends ITicketByProps {
  id?: string;
}

/// Search tickets by id
const TicketById: React.FC<TicketByIdProps> = ({
  id,
  ticket,
  setTicket,
  setLoading,
  ticketRepo = new TicketRepository(),
}) => {
  if (id === undefined) {
    return null;
  }

  const ticketByUrl = useCallback(
    async (id: string) => {
      setLoading(true);
      setTicket(await ticketRepo.getById(id));
      setLoading(false);
    },
    [id]
  );

  useEffect(() => {
    (async () => {
      ticketByUrl(id);
    })();
  }, [ticketByUrl, id]);

  return (
    <>
      <TicketView ticket={ticket} term={id} />
    </>
  );
};

TicketById.propTypes = {
  id: PropTypes.string,
};

export { TicketById as default, TicketById };
