import Placeholder from "@/components/placeholder";
import { getTicketById } from "@/data";
import TicketItem from "@/features/ticket/components/ticket-item";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = getTicketById(ticketId);
  if (!ticket) {
    return <Placeholder lable="Ticket not found" />;
  }

  return (
    <div className="animate-fade-in-from-top flex justify-center">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};

export default TicketPage;
