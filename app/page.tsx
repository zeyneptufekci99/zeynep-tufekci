"use client";
import {
  ProjectContainer,
  Hero,
  InfoContainer,
  Separator,
} from "@/components/index";
import { useRef } from "react";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);

  const onClickConnect = () => {
    infoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col full min-h-screen items-center justify-center font-sans">
      <Hero onClickConnect={onClickConnect} onClickProjects={onClickProjects} />
      <section className="flex flex-col gap-4 w-full  p-4">
        <div ref={projectsRef}>
          <ProjectContainer />
        </div>
        <Separator />
        <div ref={infoRef}>
          <InfoContainer />
        </div>
      </section>
    </div>
  );
}
