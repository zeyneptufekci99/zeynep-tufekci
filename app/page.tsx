import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col full min-h-screen items-center justify-center font-sans">
      <section className="w-full relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-purple-900 via-black to-indigo-900 opacity-60" />

        <div className="relative z-10 text-center">
          <h1 className="text-7xl font-bold text-white">Zeynep Tüfekçi</h1>

          <p className="text-gray-400 mt-4 text-xl">
            Building modern web & mobile experiences
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <button className="px-6 py-3 bg-purple-600 rounded-lg text-white">
              View Projects
            </button>

            <button className="px-6 py-3 border border-gray-600 rounded-lg text-white">
              Contact
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 w-full ">
        <div className="flex gap-4 w-full items-center justify-center">
          <h3 className="text-4xl">Projects</h3>
          <div className="h-0.5 w-full bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(89,22,139,1)_100%)] " />
        </div>

        <div>
          <div className=""></div>
        </div>
      </section>
      <div>projects</div>
      <div>info</div>
    </div>
  );
}
