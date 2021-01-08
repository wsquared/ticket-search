import type { TicketDto, Ticket } from './Ticket';

export class TicketMapper {
  static toDomain(raw: TicketDto): Ticket {
    return {
      id: raw._id,
      url: raw.url,
      externalId: raw.external_id,
      createdAt: raw.created_at,
      type: raw.type || '',
      subject: raw.subject,
      description: raw.description || '',
      priority: raw.priority,
      status: raw.status,
      submitterId: raw.submitter_id,
      assigneeId: raw.assignee_id,
      tags: raw.tags,
      hasIncidents: raw.has_incidents,
      dueAt: raw.due_at,
      via: raw.via,
      organizationId: raw.organization_id,
    };
  }
}
