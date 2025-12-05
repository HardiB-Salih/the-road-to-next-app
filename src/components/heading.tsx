import { Separator } from "./ui/separator";

type HeadingProps = {
  title: string;
  description?: string;
};

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <>
      <div className="px-8">
        <h1 className="text-3xl font-bold tracking-tighter">{title}</h1>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
      <Separator />
    </>
  );
};

export default Heading;
