import clsx from "clsx";

interface CardProps {
  cardClassName?: string;
  corner: React.ReactNode;
  cornerClassName: string;
  children: React.ReactNode;
}

const Card = ({
  corner,
  cornerClassName,
  children,
  cardClassName
}: CardProps) => {
  return (
    <div
      className={clsx(
        cardClassName,
        "w-64 h-56 max-sm:w-full relative shadow-lg flex flex-col items-center justify-center px-8 bg-white"
      )}
    >
      <div className={cornerClassName}>{corner}</div>
      <div className="break-words md:text-s text-xs">{children}</div>
    </div>
  );
};

export default Card;
