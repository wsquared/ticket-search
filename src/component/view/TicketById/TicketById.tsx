import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { TicketRepository } from '../../../repository';
import { Ticket } from '../../../model';
import { TicketView } from '../../../component';

interface TicketByIdProps {
  id?: string;
  ticket?: Ticket;
  setTicket: (ticket: Ticket) => void;
  setLoading: (isLoading: boolean) => void;
}

/// Search ticket by id
const TicketById: React.FC<TicketByIdProps> = ({
  id,
  ticket,
  setTicket,
  setLoading,
}) => {
  if (id === undefined) {
    return null;
  }

  const ticketByUrl = useCallback(async (id: string) => {
    const ticketRepo = new TicketRepository();
    setLoading(true);
    setTicket(await ticketRepo.getById(id));
    setLoading(false);
  }, []);

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
