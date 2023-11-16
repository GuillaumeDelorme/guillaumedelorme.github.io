import Image from "next/image";

export type University = "iut-laval" | "le-mans-universite";

export const UniversityLogo = ({ university }: { university: University }) => (
  <Image
    src={`/universities/${university}.png`}
    width={64}
    height={64}
    alt={`${university} logo`}
    className="rounded-full drop-shadow"
  />
);
