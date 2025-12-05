import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";
import Link from "next/link";
import Heading from "@/components/heading";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTickets } from "@/data";
import { cn } from "@/lib/utils";
import { ticketPath } from "@/paths";

const TICKIT_ICON = {
  OPEN: <LucideFileText />,
  CLOSE: <LucideCircleCheck />,
  IN_PROGRESS: <LucidePencil />,
};
const TicketsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Tickets Page"
        description=" All Your Tickets at one place"
      />
      <div className="animate-fade-in-from-top flex flex-1 flex-col items-center gap-y-4">
        {getTickets().map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <span>{TICKIT_ICON[ticket.status]}</span>
                <span>
                  {ticket.title} {ticket.id}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="line-clamp-3">
              <CardDescription>{ticket.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link
                href={ticketPath(ticket.id)}
                className={cn(buttonVariants({ size: "sm" }), "w-full")}
              >
                Link to Ticket
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default TicketsPage;
