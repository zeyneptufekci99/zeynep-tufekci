import { ProjectContainer, Hero, InfoContainer } from "@/components/index";

export default function Home() {
  return (
    <div className="flex flex-col full min-h-screen items-center justify-center font-sans">
      <Hero></Hero>
      <section className="flex flex-col gap-4 w-full ">
        <ProjectContainer />
        <InfoContainer />
      </section>
    </div>
  );
}
