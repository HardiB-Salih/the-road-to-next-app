import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Wrapper = ({ children, className }: Props) => {
  return (
    <div
      className={cn("mx-auto h-full w-full max-w-7xl px-4 xl:px-20", className)}
    >
      {children}
    </div>
  );
};

export default Wrapper;
