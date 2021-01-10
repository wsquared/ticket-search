import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Loading,
  TicketByUrl,
  TicketById,
  TicketByExternalId,
  TicketsByCreatedAt,
} from '../src/component';
import { Ticket } from '../src/model';

interface ticketProps {
  id?: string;
  url?: string;
  externalId?: string;
  createdAt?: string;
}

/// Search ticket
const ticket: React.FC<ticketProps> = ({ id, url, externalId, createdAt }) => {
  const [ticket, setTicket] = useState<Ticket>();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <Loading isLoading={loading} />
      <TicketByUrl
        ticket={ticket}
        url={url}
        setLoading={setLoading}
        setTicket={setTicket}
      />
      <TicketById
        ticket={ticket}
        id={id}
        setLoading={setLoading}
        setTicket={setTicket}
      />
      <TicketByExternalId
        ticket={ticket}
        externalId={externalId}
        setLoading={setLoading}
        setTicket={setTicket}
      />
      <TicketsByCreatedAt
        tickets={tickets}
        createdAt={createdAt}
        setLoading={setLoading}
        setTickets={setTickets}
      />
    </>
  );
};

ticket.propTypes = {
  /// Search tickets by id
  id: PropTypes.string,
  /// Search tickets by url
  url: PropTypes.string,
  /// Search tickets by external id
  externalId: PropTypes.string,
  /// Search tickets by created at
  createdAt: PropTypes.string,
};

export default ticket;
