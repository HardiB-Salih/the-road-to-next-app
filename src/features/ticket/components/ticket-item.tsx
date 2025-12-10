import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ticketPath } from "@/paths";
import { TICKIT_ICON } from "../constants";
import { Ticket } from "../types";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  console.log("Where am I displayed? (TicketItem)");

  const detaiButtons = (
    <Button variant="outline" size="icon" asChild>
      <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  return (
    <div
      className={cn("flex w-full gap-x-1", {
        "max-w-[580px]": isDetail,
        "max-w-[420px]": !isDetail,
      })}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-x-2">
            <span>{TICKIT_ICON[ticket.status]}</span>
            <span>
              {ticket.title} {ticket.id}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent
          className={cn("whitespace-break-spaces", {
            "line-clamp-3": !isDetail,
          })}
        >
          <CardDescription>{ticket.description}</CardDescription>
        </CardContent>
      </Card>
      {isDetail ? null : (
        <div className="flex flex-col gap-y-1">{detaiButtons}</div>
      )}
    </div>
  );
};

export default TicketItem;
