import Heading from "@/components/heading";
import { getTickets } from "@/data";
import TicketItem from "@/features/ticket/components/ticket-item";

const TicketsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Tickets Page"
        description=" All Your Tickets at one place"
      />
      <div className="animate-fade-in-from-top flex flex-1 flex-col items-center gap-y-4">
        {getTickets().map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};
export default TicketsPage;
