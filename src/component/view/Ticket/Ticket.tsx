import { Text, Box } from 'ink';
import React from 'react';
import { v4 as uuid } from 'uuid';
import type { Ticket } from '../../../model/Ticket';

export const TicketView: React.FC<{ ticket: Ticket }> = ({ ticket }) => {
  const width = 15;

  const ticketProperties = [
    ['Id', ticket.id],
    ['Url', ticket.url],
    ['ExternalId', ticket.externalId],
    ['CreatedAt', ticket.createdAt],
    ['Type', ticket.type],
    ['Subject', ticket.subject],
    ['Description', ticket.description],
    ['Priority', ticket.priority],
    ['Status', ticket.status],
    ['SubmitterId', ticket.submitterId],
    ['AssigneeId', ticket.assigneeId],
    ['OrganizationId', ticket.organizationId],
    ['Tags', ticket.tags.join(' ')],
    ['HasIncidents', String(ticket.hasIncidents)],
    ['DueAt', ticket.dueAt],
    ['Via', ticket.via],
  ];

  return (
    <>
      <Box margin={2} flexDirection="column" justifyContent="flex-start">
        <Box marginBottom={2}>
          <Text color="greenBright">TICKETS</Text>
        </Box>
        {ticketProperties.map(ticket => (
          <Box flexDirection="row" key={uuid()}>
            <Box width={width}>
              <Text color="green">{ticket[0]}</Text>
            </Box>
            <Text color="white">{ticket[1]}</Text>
          </Box>
        ))}
      </Box>
    </>
  );
};
