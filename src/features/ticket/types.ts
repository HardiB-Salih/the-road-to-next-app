export type TicketStatus = "OPEN" | "IN_PROGRESS" | "CLOSE";
export type Ticket = {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
};
