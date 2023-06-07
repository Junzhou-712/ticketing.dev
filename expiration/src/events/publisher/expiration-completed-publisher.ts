import { ExpirationCompletedEvent, Publisher, Subjects } from "@js7ticketing/common";

export class ExpirationCompletedPublisher extends Publisher<ExpirationCompletedEvent> {
  subject: Subjects.ExpirationCompleted = Subjects.ExpirationCompleted;
}