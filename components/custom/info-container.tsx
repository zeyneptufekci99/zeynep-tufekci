import { InfoCard } from "./info-card";
import Image from "next/image";
import { aboutMe, contacts, experience, skills } from "@/data/dummy-data";
import { Badge } from "../ui/badge";

export const InfoContainer = () => {
  const mailContact = contacts.find((c) => c.key === "mail");
  const githubContact = contacts.find((c) => c.key === "github");
  const linkedinContact = contacts.find((c) => c.key === "linkedin");
  const phoneContact = contacts.find((c) => c.key === "phone");

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  };
  return (
    <div className="flex flex-col gap-4 pb-6  mb-6">
      <div className="grid grid-cols-3 gap-4 h-fit items-stretch">
        <div className="rounded-xl h-full">
          <InfoCard
            contentClassName="item-center justify-center flex flex-col"
            title="About Me"
          >
            <div className="flex flex-col gap-4 items-center justify-center">
              <Image width={150} height={200} src={aboutMe.imageUrl} alt="me" />
              <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {aboutMe.info}
              </div>
            </div>
          </InfoCard>
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-xl h-full">
          <InfoCard title="My Skills">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  className="h-9 px-4 text-sm font-medium rounded-full bg-primary-dim/40 text-foreground border border-white/10 shadow-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </InfoCard>

          <InfoCard title="Get In Touch">
            <div className="flex flex-col gap-4 text-sm">
              {mailContact && (
                <div
                  onClick={() => copyToClipboard(mailContact.info)}
                  className=" cursor-pointer flex items-center gap-3 hover:border-white/50 rounded-lg border border-white/10 bg-black/20 px-3 py-2"
                >
                  <span className="text-lg text-primary-foreground/80">
                    {mailContact.icon}
                  </span>
                  <span className="truncate text-sm">{mailContact.info}</span>
                </div>
              )}

              {phoneContact && (
                <div
                  onClick={() => copyToClipboard(phoneContact.info)}
                  className=" hover:border-white/50 cursor-pointer flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 px-3 py-2"
                >
                  <span className="text-lg text-primary-foreground/80">
                    {phoneContact.icon}
                  </span>
                  <span className="truncate text-sm">{phoneContact.info}</span>
                </div>
              )}

              <div className="flex items-center gap-3">
                {linkedinContact && (
                  <a
                    href={linkedinContact.info}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-xl text-primary-foreground hover:border-primary hover:bg-primary-dim/80 transition-colors"
                  >
                    {linkedinContact.icon}
                  </a>
                )}
                {githubContact && (
                  <a
                    href={githubContact.info}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-xl text-primary-foreground hover:border-primary hover:bg-primary-dim/80 transition-colors"
                  >
                    {githubContact.icon}
                  </a>
                )}
              </div>
            </div>
          </InfoCard>
        </div>

        <div className="rounded-xl h-full">
          <InfoCard
            contentClassName="h-full"
            title="Experience"
            className="h-full"
          >
            <div className="flex flex-col text-sm items-center w-full justify-between h-full">
              {experience.map((item, index) => (
                <div
                  key={`${item.company}-${item.time}-${item.title}`}
                  className={`flex gap-3 py-3 w-full ${
                    index !== experience.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <div className="w-24 shrink-0 text-xs font-medium text-muted-foreground">
                    {item.time}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="text-sm font-semibold">{item.company}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.title}
                    </div>
                    <div className="text-xs text-muted-foreground/80">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};
