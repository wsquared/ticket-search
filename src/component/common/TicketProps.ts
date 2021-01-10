import { ITicketRepository } from '../../repository';
import { Ticket } from '../../model';

export interface ITicketByProps {
  ticket?: Ticket;
  setTicket: (ticket: Ticket) => void;
  setLoading: (isLoading: boolean) => void;
  ticketRepo?: ITicketRepository;
}
