export const Title = ({
  children,
  level,
}: {
  children: React.ReactNode;
  level: "h2" | "h3";
}) => (
  <>
    {level === "h2" && <h2 className="font-semibold text-black">{children}</h2>}
    {level === "h3" && (
      <h3 className="text-base font-medium text-black">{children}</h3>
    )}
  </>
);
