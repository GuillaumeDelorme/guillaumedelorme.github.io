import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { Card } from "../common/Card";
import { Title } from "../common/Title";
import Link from "next/link";

export const Profile = () => (
  <Card>
    <div className="flex w-full flex-col items-center justify-center gap-3">
      <Image
        src={`/avatar.png`}
        width={96}
        height={96}
        alt={"Avatar"}
        className="rounded-md drop-shadow"
      />

      <div className="flex flex-col items-center justify-center">
        <Title level="h2">Guillaume Delorme</Title>

        <div className="text-sm font-medium text-gray-500">
          Senior Lead Developer
        </div>

        <div className="text-sm font-medium text-gray-500">Rennes, France</div>
      </div>

      <div className="flex gap-2">
        <Link href="https://github.com/GuillaumeDelorme">
          <FaGithub className="h-6 w-6" />
        </Link>
        <Link href="https://www.linkedin.com/in/delormeguillaume/">
          <FaLinkedin className="h-6 w-6" />
        </Link>
        <Link href="mailto:guillaume.delorme.fr@gmail.com">
          <MdAlternateEmail className="h-6 w-6" />
        </Link>
      </div>
    </div>
  </Card>
);
