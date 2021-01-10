import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { TicketRepository } from '../../../repository';
import { Ticket } from '../../../model';
import { TicketView } from '../../../component';

interface TicketByUrlProps {
  url?: string;
  ticket?: Ticket;
  setTicket: (ticket: Ticket) => void;
  setLoading: (isLoading: boolean) => void;
}

/// Search ticket by url
const TicketByUrl: React.FC<TicketByUrlProps> = ({
  url,
  ticket,
  setTicket,
  setLoading,
}) => {
  if (url === undefined) {
    return null;
  }

  const ticketByUrl = useCallback(async (url: string) => {
    const ticketRepo = new TicketRepository();
    setLoading(true);
    setTicket(await ticketRepo.getByUrl(url));
    setLoading(false);
  }, []);

  useEffect(() => {
    (async () => {
      ticketByUrl(url);
    })();
  }, [ticketByUrl, url]);

  return (
    <>
      <TicketView ticket={ticket} term={url} />
    </>
  );
};

TicketByUrl.propTypes = {
  url: PropTypes.string,
};

export { TicketByUrl as default, TicketByUrl };
