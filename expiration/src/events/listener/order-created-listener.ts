import { Listener, OrderCancelledEvent, OrderCreatedEvent, Subjects } from "@js7ticketing/common";
import { queueGroupName } from "./queue-group-name";
import { Message } from "node-nats-streaming";
import { expirationQueue } from "../../queue/expiration-queue";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName: string = queueGroupName;
  async onMessage(data: { id: string; ticket: { id: string; }; }, msg: Message) {
    await expirationQueue.add({
      orderId: data.id
    });

    msg.ack();
  }
}