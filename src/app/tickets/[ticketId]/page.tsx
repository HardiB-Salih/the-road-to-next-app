import { getTicketById } from "@/data";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = getTicketById(ticketId);
  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  return (
    <div>
      <h1 className="text-6xl">
        {ticket.title} {ticket.id}
      </h1>
      <h2 className="text-4xl">{ticket.status}</h2>
      <p className="text-2xl">{ticket.description}</p>
    </div>
  );
};

export default TicketPage;
