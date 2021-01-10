import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Loading, TicketBy, TicketsBy } from '../src/component';
import { Ticket } from '../src/model';
import { TicketRepository } from '../src/repository';

interface ticketProps {
  id?: string;
  url?: string;
  externalId?: string;
  createdAt?: string;
  type?: string;
  subject?: string;
  description?: string;
  priority?: string;
  status?: string;
  submitterId?: number;
  assigneeId?: number;
  organizationId?: number;
  tag?: string;
  hasIncidents?: boolean;
  dueAt?: string;
  via?: string;
}

/// Search ticket
const ticket: React.FC<ticketProps> = ({
  id,
  url,
  externalId,
  createdAt,
  type,
  subject,
  description,
  priority,
  status,
  submitterId,
  assigneeId,
  organizationId,
  tag,
  hasIncidents,
  dueAt,
  via,
}) => {
  const [ticket, setTicket] = useState<Ticket>();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const ticketRepository = new TicketRepository();

  return (
    <>
      <Loading isLoading={loading} />
      <TicketBy
        term={id}
        ticket={ticket}
        setLoading={setLoading}
        setTicket={setTicket}
        getTicketBy={ticketRepository.getById}
      />
      <TicketBy
        term={url}
        ticket={ticket}
        setLoading={setLoading}
        setTicket={setTicket}
        getTicketBy={ticketRepository.getByUrl}
      />
      <TicketBy
        term={externalId}
        ticket={ticket}
        setLoading={setLoading}
        setTicket={setTicket}
        getTicketBy={ticketRepository.getByExternalId}
      />
      <TicketsBy
        term={createdAt}
        tickets={tickets}
        setLoading={setLoading}
        setTickets={setTickets}
        getTicketsBy={ticketRepository.getByCreatedAt}
      />
      <TicketsBy
        term={type}
        tickets={tickets}
        setLoading={setLoading}
        setTickets={setTickets}
        getTicketsBy={ticketRepository.getByType}
      />
      <TicketsBy
        term={subject}
        tickets={tickets}
        setLoading={setLoading}
        setTickets={setTickets}
        getTicketsBy={ticketRepository.getBySubject}
      />
      <TicketsBy
        term={description}
        tickets={tickets}
        setLoading={setLoading}
        setTickets={setTickets}
        getTicketsBy={ticketRepository.getByDescription}
      />
      <TicketsBy
        term={priority}
        tickets={tickets}
        setLoading={setLoading}
        setTickets={setTickets}
        getTicketsBy={ticketRepository.getByPriority}
      />
      <TicketsBy
        term={status}
        tickets={tickets}
        setLoading={setLoading}
        setTickets={setTickets}
        getTicketsBy={ticketRepository.getByStatus}
      />
      <TicketsBy
        term={submitterId}
        tickets={tickets}
        setLoading={setLoading}
        setTickets={setTickets}
        getTicketsBy={ticketRepository.getBySubmitterId}
      />
      <TicketsBy
        term={assigneeId}
        tickets={tickets}
        setLoading={setLoading}
        setTickets={setTickets}
        getTicketsBy={ticketRepository.getByAssigneeId}
      />
      <TicketsBy
        term={organizationId}
        tickets={tickets}
        setLoading={setLoading}
        setTickets={setTickets}
        getTicketsBy={ticketRepository.getByOrganizationId}
      />
      <TicketsBy
        term={tag}
        tickets={tickets}
        setLoading={setLoading}
        setTickets={setTickets}
        getTicketsBy={ticketRepository.getByTag}
      />
      <TicketsBy
        term={hasIncidents}
        tickets={tickets}
        setLoading={setLoading}
        setTickets={setTickets}
        getTicketsBy={ticketRepository.getByHasIncidents}
      />
      <TicketsBy
        term={dueAt}
        tickets={tickets}
        setLoading={setLoading}
        setTickets={setTickets}
        getTicketsBy={ticketRepository.getByDueAt}
      />
      <TicketsBy
        term={via}
        tickets={tickets}
        setLoading={setLoading}
        setTickets={setTickets}
        getTicketsBy={ticketRepository.getByVia}
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
  /// Search tickets by type
  type: PropTypes.string,
  /// Search tickets by subject
  subject: PropTypes.string,
  /// Search tickets by description
  description: PropTypes.string,
  /// Search tickets by priority
  priority: PropTypes.string,
  /// Search tickets by status
  status: PropTypes.string,
  /// Search tickets by submitterId
  submitterId: PropTypes.number,
  /// Search tickets by assigneeId
  assigneeId: PropTypes.number,
  /// Search tickets by organizationId
  organizationId: PropTypes.number,
  /// Search tickets by tag
  tag: PropTypes.string,
  /// Search tickets by hasIncidents
  hasIncidents: PropTypes.bool,
  /// Search tickets by dueAt
  dueAt: PropTypes.string,
  /// Search tickets by via
  via: PropTypes.string,
};

export default ticket;
