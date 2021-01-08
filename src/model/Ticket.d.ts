export interface TicketDto {
  _id: string;
  url: string;
  external_id: string;
  created_at: string;
  type: string;
  subject: string;
  description?: string;
  priority: string;
  status: string;
  submitter_id: number;
  assignee_id: number;
  tags: string[];
  has_incidents: boolean;
  due_at: string;
  via: string;
  organization_id: number;
}

export interface Ticket {
  id: string;
  url: string;
  externalId: string;
  createdAt: string;
  type: string;
  subject: string;
  description: string;
  priority: string;
  status: string;
  submitterId: number;
  assigneeId: number;
  tags: string[];
  hasIncidents: boolean;
  dueAt: string;
  via: string;
  organizationId: number;
}
