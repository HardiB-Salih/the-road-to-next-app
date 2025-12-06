import { Ticket } from "./features/ticket/components/types";

const initialTickets: Ticket[] = [
  {
    id: "1",
    title: "Login Issue",
    description: "Unable to login with correct credentials.",
    status: "OPEN",
  },
  {
    id: "2",
    title: "Page Load Error",
    description: "The dashboard page fails to load intermittently.",
    status: "IN_PROGRESS",
  },
  {
    id: "3",
    title: "Feature Request: Dark Mode",
    description: "Requesting dark mode for better night-time usability.",
    status: "CLOSE",
  },
];

export function getTickets() {
  return initialTickets;
}

export function getTicketById(ticketId: string) {
  return initialTickets.find((ticket) => ticket.id === ticketId);
}
