import { TICKETS_PATH } from '../../config';
import Lowdb from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import { TicketMapper } from '../../model/TicketMapper';
import { Ticket } from '../../model';

export interface ITicketRepository {
  getById: (id: string) => Promise<Ticket>;
  getByUrl: (url: string) => Promise<Ticket>;
  getByExternalId: (externalId: string) => Promise<Ticket>;
  getByCreatedAt: (createdAt: string) => Promise<Ticket[]>;
}

export class TicketRepository implements ITicketRepository {
  private lowDb: Promise<Lowdb.LowdbAsync<any>>;

  private getBy = async () => {
    return (await (await this.lowDb).read()).map((ticketRaw) =>
      TicketMapper.toDomain(ticketRaw)
    );
  };

  constructor(path = TICKETS_PATH) {
    this.lowDb = Lowdb(new FileAsync(path));
  }

  getById = async (id: string) => {
    return (await this.getBy()).find((ticket) => ticket.id === id).value();
  };

  getByUrl = async (url: string) => {
    return (await this.getBy())
      .find((ticket) => ticket.url.toLowerCase() === url.toLowerCase())
      .value();
  };

  getByExternalId = async (id: string) => {
    return (await this.getBy())
      .find((ticket) => ticket.externalId.toLowerCase() === id.toLowerCase())
      .value();
  };

  getByDescription = async (term: string) => {
    return (await this.getBy())
      .filter(
        (ticket) => ticket.description.toLowerCase() === term.toLowerCase()
      )
      .value();
  };

  getByCreatedAt = async (createdAt: string) => {
    return (await this.getBy())
      .filter(
        (ticket) => ticket.createdAt.toLowerCase() === createdAt.toLowerCase()
      )
      .value();
  };

  getByType = async (type: string) => {
    return (await this.getBy())
      .filter((ticket) => ticket.type.toLowerCase() === type.toLowerCase())
      .value();
  };

  getBySubject = async (subject: string) => {
    return (await this.getBy())
      .filter(
        (ticket) => ticket.subject.toLowerCase() === subject.toLowerCase()
      )
      .value();
  };

  getByPriority = async (priority: string) => {
    return (await this.getBy())
      .filter(
        (ticket) => ticket.priority.toLowerCase() === priority.toLowerCase()
      )
      .value();
  };

  getByStatus = async (status: string) => {
    return (await this.getBy())
      .filter((ticket) => ticket.status.toLowerCase() === status.toLowerCase())
      .value();
  };

  getBySubmitterId = async (submitterId: number) => {
    return (await this.getBy())
      .filter((ticket) => ticket.submitterId === submitterId)
      .value();
  };

  getByAssigneeId = async (assigneeId: number) => {
    return (await this.getBy())
      .filter((ticket) => ticket.assigneeId === assigneeId)
      .value();
  };

  getByTag = async (tag: string) => {
    return (await this.getBy())
      .filter(
        (ticket) =>
          ticket.tags.map((t) => t.toLowerCase()).indexOf(tag.toLowerCase()) >=
          0
      )
      .value();
  };

  getByHasIncidents = async (hasIncidents: boolean) => {
    return (await this.getBy())
      .filter((ticket) => ticket.hasIncidents === hasIncidents)
      .value();
  };

  getByDueAt = async (dueAt: string) => {
    return (await this.getBy())
      .filter((ticket) => ticket.dueAt === dueAt)
      .value();
  };

  getByVia = async (via: string) => {
    return (await this.getBy()).filter((ticket) => ticket.via === via).value();
  };

  getByOrganizationId = async (organizationId: number) => {
    return (await this.getBy())
      .filter((ticket) => ticket.organizationId === organizationId)
      .value();
  };
}
