import React from "react";
import { Card } from "../common/Card";
import { Title } from "../common/Title";

const Skill = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-lg bg-sky-100 px-2 py-1 text-sm font-medium text-sky-400">
    {children}
  </div>
);

export const Skills = () => (
  <Card>
    <div className="flex w-full flex-col gap-3">
      <Title level="h2">Skills</Title>

      <div className="text-sm font-medium text-gray-500">Languages</div>
      <div className="flex flex-wrap gap-2">
        <Skill>TypeScript</Skill>
        <Skill>Rust</Skill>
        <Skill>Java</Skill>
      </div>

      <div className="text-sm font-medium text-gray-500">Frontend</div>
      <div className="flex flex-wrap gap-2">
        <Skill>React</Skill>
        <Skill>Next.js</Skill>
        <Skill>Vue</Skill>
        <Skill>Tauri</Skill>
        <Skill>Three.js</Skill>
        <Skill>TailwindCSS</Skill>
      </div>

      <div className="text-sm font-medium text-gray-500">Backend</div>
      <div className="flex flex-wrap gap-2">
        <Skill>Serverless</Skill>
        <Skill>Nest.js</Skill>
        <Skill>Temporal.io</Skill>
      </div>

      <div className="text-sm font-medium text-gray-500">Base de données</div>
      <div className="flex flex-wrap gap-2">
        <Skill>PostgreSQL</Skill>
        <Skill>MariaDB</Skill>
      </div>

      <div className="text-sm font-medium text-gray-500">
        DevOps / Infrastructure
      </div>
      <div className="flex flex-wrap gap-2">
        <Skill>AWS</Skill>
        <Skill>Scaleway</Skill>
        <Skill>Docker</Skill>
        <Skill>GitHub actions</Skill>
        <Skill>Architecture</Skill>
        <Skill>Infrastructure as Code</Skill>
      </div>

      <div className="text-sm font-medium text-gray-500">Autre</div>
      <div className="flex flex-wrap gap-2">
        <Skill>Team Lead</Skill>
        <Skill>Français</Skill>
        <Skill>Anglais</Skill>
      </div>
    </div>
  </Card>
);
