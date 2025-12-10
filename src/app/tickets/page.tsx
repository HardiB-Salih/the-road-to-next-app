import { Suspense } from "react";
import Heading from "@/components/heading";
import TicketList from "@/features/ticket/components/ticket-list";

const TicketsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Tickets Page"
        description=" All Your Tickets at one place"
      />
      <Suspense>
        <TicketList />
      </Suspense>
    </div>
  );
};
export default TicketsPage;
