import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { TicketRepository } from '../../../repository';
import { TicketView } from '../../../component';
import { ITicketByProps } from '../../';

interface TicketByExternalIdProps extends ITicketByProps {
  externalId?: string;
}

/// Search ticket by externalId
const TicketByExternalId: React.FC<TicketByExternalIdProps> = ({
  externalId,
  ticket,
  setTicket,
  setLoading,
  ticketRepo = new TicketRepository(),
}) => {
  if (externalId === undefined) {
    return null;
  }

  const ticketByExternalId = useCallback(
    async (externalId: string) => {
      setLoading(true);
      setTicket(await ticketRepo.getByExternalId(externalId));
      setLoading(false);
    },
    [externalId]
  );

  useEffect(() => {
    (async () => {
      ticketByExternalId(externalId);
    })();
  }, [ticketByExternalId, externalId]);

  return (
    <>
      <TicketView ticket={ticket} term={externalId} />
    </>
  );
};

TicketByExternalId.propTypes = {
  externalId: PropTypes.string,
};

export { TicketByExternalId as default, TicketByExternalId };
