import { Education } from "./_components/Education";
import { Experiences } from "./_components/Experiences";

export default function Home() {
  return (
    <main className="flex max-w-screen-lg items-center justify-center p-10">
      <div className="flex flex-col gap-6">
        <Experiences />
        <Education />
      </div>
    </main>
  );
}
