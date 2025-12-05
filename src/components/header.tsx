import { LucideKanban } from "lucide-react";
import Link from "next/link";
import { homePath, ticketsPath } from "@/paths";
import { Button, buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <nav className="support-backdrop-blur:bg-background/60 bg-background/95 fixed right-0 left-0 z-20 flex w-full justify-between border-b px-5 py-2.5 backdrop-blur">
      <div>
        <Button asChild variant={"ghost"}>
          <Link href={homePath()}>
            <LucideKanban />
            <h1 className="text-lg font-semibold">Ticket Bounty</h1>
          </Link>
        </Button>
      </div>
      <div>
        <Link href={ticketsPath()} className={buttonVariants()}>
          Tickets
        </Link>
      </div>
    </nav>
  );
};

export { Header };
