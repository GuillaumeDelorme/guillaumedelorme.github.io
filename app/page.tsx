import { Education } from "./_components/Education";
import { Experience } from "./_components/Experience";

export default function Home() {
  return (
    <main className="flex max-w-screen-lg items-center justify-center p-10">
      <div className="flex flex-col gap-6">
        <Experience />
        <Education />
      </div>
    </main>
  );
}
