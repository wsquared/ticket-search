import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { TicketRepository } from '../../../repository';
import { TicketView } from '../../../component';
import { ITicketByProps } from '../../';

interface TicketByUrlProps extends ITicketByProps {
  url?: string;
}

/// Search tickets by url
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
