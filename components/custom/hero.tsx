"use client";

import { Button } from "../ui/button";

interface IHero {
  onClickProjects: () => void;
  onClickConnect: () => void;
}
export const Hero = ({ onClickConnect, onClickProjects }: IHero) => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/ZeynepTufekciCV.pdf";
    link.download = "Zeynep-Tufekci-CV.pdf";
    link.click();
  };

  return (
    <section className="w-full relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(195deg,rgba(89,22,139,1)_0%,rgba(0,0,0,1)_100%)] opacity-60" />

      <div className="relative z-10 text-center">
        <h1 className="text-7xl font-bold text-white">Zeynep Tüfekçi</h1>

        <p className="text-gray-400 mt-4 text-xl">
          Building modern web & mobile experiences
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <Button
            onClick={onClickProjects}
            className="hover:bg-[linear-gradient(30deg,rgba(89,22,139,1)_0%,rgba(0,0,0,1)_100%)] hover:text-primary-foreground"
            size="lg"
          >
            View Projects
          </Button>
          <Button
            onClick={onClickConnect}
            variant="outline"
            className="hover:bg-[linear-gradient(135deg,rgba(0,0,0,1)_0%,rgba(89,22,139,1)_100%)] hover:text-primary-foreground"
            size="lg"
          >
            Contact
          </Button>

          <Button
            variant="link"
            className="hover:bg-[linear-gradient(135deg,rgba(0,0,0,1)_0%,rgba(89,22,139,1)_100%)] text-primary-foreground hover:text-primary-foreground"
            size="lg"
            onClick={downloadCV}
          >
            Download Cv
          </Button>
        </div>
      </div>
    </section>
  );
};
