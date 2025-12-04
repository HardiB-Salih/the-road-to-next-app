import { clsx } from "clsx";
import Link from "next/link";
import Container from "@/components/global/src/components/global/container";
import { getTickets } from "@/data";
import { ticketPath } from "@/paths";

const TICKIT_ICON = {
  OPEN: "O",
  CLOSE: "X",
  IN_PROGRESS: "P",
};
const TicketsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter">Tickets Page</h1>
        <p className="text-muted-foreground text-sm">
          All Your Tickets at one place
        </p>
      </div>

      <div className="animate-fade-in-from-top flex flex-1 flex-col items-center gap-y-4">
        {getTickets().map((ticket) => (
          <Link
            key={ticket.id}
            href={ticketPath(ticket.id)}
            className="w-full max-w-[420px] rounded-xl border border-slate-100 bg-gray-600/30 p-4 hover:bg-gray-600/50"
          >
            <div>
              <h3 className="truncate text-lg font-semibold">
                {ticket.title} {ticket.id}
              </h3>
              <p
                className={clsx("text-muted-foreground truncate text-sm", {
                  "line-through": ticket.status === "CLOSE",
                })}
              >
                {ticket.description}
              </p>
              <p>Status: {TICKIT_ICON[ticket.status]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default TicketsPage;
