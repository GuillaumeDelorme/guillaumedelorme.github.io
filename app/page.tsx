import { Education } from "./_components/education/Education";
import { Experience } from "./_components/experience/Experience";
import { Profile } from "./_components/profile/Profile";
import { Skills } from "./_components/profile/Skills";

export default function Home() {
  return (
    <main className="flex max-w-screen-lg items-start justify-center gap-6 p-10">
      <div className="flex flex-col gap-6">
        <Profile />
        <Skills />
      </div>
      <div className="flex flex-col gap-6">
        <Experience />
        <Education />
      </div>
    </main>
  );
}
