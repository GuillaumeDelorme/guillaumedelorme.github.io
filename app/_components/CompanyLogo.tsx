import Image from "next/image";

export type Company =
  | "check-and-visit"
  | "orano"
  | "areva"
  | "bnpp"
  | "capgemini"
  | "edf"
  | "enedis"
  | "credit-agricole"
  | "framatome"
  | "rte"
  | "mma";

const getPxSize = (size: "small" | "medium") => (size === "small" ? 48 : 64);

export const CompanyLogo = ({
  company,
  size,
}: {
  company: Company;
  size: "small" | "medium";
}) => (
  <Image
    src={`/companies/${company}.png`}
    width={getPxSize(size)}
    height={getPxSize(size)}
    alt={`${company} logo`}
    className="rounded-full drop-shadow"
  />
);
