import { Publisher, Subjects, TicketUpdatedEvent } from "@js7ticketing/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
