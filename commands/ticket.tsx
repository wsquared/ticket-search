import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Loading, TicketByUrl, TicketById } from '../src/component';
import { Ticket } from '../src/model';

interface ticketProps {
  id?: string;
  url?: string;
}

/// Search ticket
const ticket: React.FC<ticketProps> = ({ id, url }) => {
  const [ticket, setTicket] = useState<Ticket>();
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
    </>
  );
};

ticket.propTypes = {
  /// Search ticket by id
  id: PropTypes.string,
  /// Search ticket by url
  url: PropTypes.string,
};

export default ticket;
