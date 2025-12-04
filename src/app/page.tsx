import Link from "next/link";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter">Home Page</h1>
        <p className="text-muted-foreground text-sm">
          Your home place to start
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Link href={ticketsPath()} className="text-blue-600 hover:underline">
          Go to Tickets Page
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
