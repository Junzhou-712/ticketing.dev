import { Publisher, Subjects, TicketCreatedEvent } from "@js7ticketing/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
