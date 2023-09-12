import clsx from "clsx";

interface MainCompProps {
  mainCompClassName?: string;
  title?: string;
  paragraph?: string;
  children: React.ReactNode;
  childrenClassName?: string;
  flexType?: "col" | "row";
}

const MainComp = ({
  mainCompClassName,
  title,
  paragraph,
  children,
  childrenClassName,
  flexType
}: MainCompProps) => {
  return (
    <div
      className={clsx(
        mainCompClassName,
        "bg-greydark-50 xl:h-96 w-screen h-full my-16"
      )}
    >
      <div
        className={clsx(
          "mx-24",
          flexType === "col"
            ? "flex flex-col justify-center"
            : "md:flex md:gap-x-8 md:flex-wrap justify-center"
        )}
      >
        <div
          className={clsx(
            "flex flex-col items-center gap-y-8 h-full",
            flexType === "row" && "flex-1"
          )}
        >
          <h2 className="text-2xl font-bold text-primary-800 mt-16 h-full">
            {title}
          </h2>
          <p className="my-8">{paragraph}</p>
        </div>
        <div className={clsx(childrenClassName)}>{children}</div>
      </div>
    </div>
  );
};

export default MainComp;
