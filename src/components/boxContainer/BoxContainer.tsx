import { cn } from "../../utils/utils";

interface BoxContainerProps {
  children: React.ReactNode;
  className?: string;
}

const BoxContainer = ({ children, className }: BoxContainerProps) => {
  return (
    <div
      className={cn(
        "bg-base-100 shadow-xl rounded-3xl border px-4 sm:px-6 md:px-8 lg:px-10 py-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BoxContainer;
