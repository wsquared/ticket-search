import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Loading, TicketBy, TicketsBy, ErrorBoundary } from '../src/component';
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

/// Search tickets
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
  const [loading, setLoading] = useState<boolean>(false);
  const ticketRepository = new TicketRepository();

  return (
    <>
      <ErrorBoundary>
        <Loading isLoading={loading} />
        <TicketBy
          term={id}
          setLoading={setLoading}
          getTicketBy={ticketRepository.getById}
        />
        <TicketBy
          term={url}
          setLoading={setLoading}
          getTicketBy={ticketRepository.getByUrl}
        />
        <TicketBy
          term={externalId}
          setLoading={setLoading}
          getTicketBy={ticketRepository.getByExternalId}
        />
        <TicketsBy
          term={createdAt}
          setLoading={setLoading}
          getTicketsBy={ticketRepository.getByCreatedAt}
        />
        <TicketsBy
          term={type}
          setLoading={setLoading}
          getTicketsBy={ticketRepository.getByType}
        />
        <TicketsBy
          term={subject}
          setLoading={setLoading}
          getTicketsBy={ticketRepository.getBySubject}
        />
        <TicketsBy
          term={description}
          setLoading={setLoading}
          getTicketsBy={ticketRepository.getByDescription}
        />
        <TicketsBy
          term={priority}
          setLoading={setLoading}
          getTicketsBy={ticketRepository.getByPriority}
        />
        <TicketsBy
          term={status}
          setLoading={setLoading}
          getTicketsBy={ticketRepository.getByStatus}
        />
        <TicketsBy
          term={submitterId}
          setLoading={setLoading}
          getTicketsBy={ticketRepository.getBySubmitterId}
        />
        <TicketsBy
          term={assigneeId}
          setLoading={setLoading}
          getTicketsBy={ticketRepository.getByAssigneeId}
        />
        <TicketsBy
          term={organizationId}
          setLoading={setLoading}
          getTicketsBy={ticketRepository.getByOrganizationId}
        />
        <TicketsBy
          term={tag}
          setLoading={setLoading}
          getTicketsBy={ticketRepository.getByTag}
        />
        <TicketsBy
          term={hasIncidents}
          setLoading={setLoading}
          getTicketsBy={ticketRepository.getByHasIncidents}
        />
        <TicketsBy
          term={dueAt}
          setLoading={setLoading}
          getTicketsBy={ticketRepository.getByDueAt}
        />
        <TicketsBy
          term={via}
          setLoading={setLoading}
          getTicketsBy={ticketRepository.getByVia}
        />
      </ErrorBoundary>
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
