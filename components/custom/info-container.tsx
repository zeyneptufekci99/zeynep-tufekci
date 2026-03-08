import { Separator } from "./separator";
import { InfoCard } from "./info-card";

export const InfoContainer = () => {
  return (
    <div className="flex flex-col gap-4">
      <Separator />

      <div className="grid grid-cols-4 grid-rows-3 gap-4 h-fit">
        {/* About */}
        <div className="row-span-3 col-span-1 rounded-xl bg-slate-800 p-4">
          <InfoCard title="About">
            <div></div>
          </InfoCard>
        </div>

        {/* Skills */}
        <div className="row-span-2 col-span-2 rounded-xl bg-slate-800 p-4">
          <InfoCard title="About">
            <div></div>
          </InfoCard>
        </div>

        {/* Experience */}
        <div className="row-span-2 col-span-1 rounded-xl bg-slate-800 p-4">
          <InfoCard title="Skills">
            <div></div>
          </InfoCard>
        </div>

        {/* Big card */}
        <div className="row-span-1 col-span-2 rounded-xl bg-slate-800 p-4">
          <InfoCard title="projects">
            <div></div>
          </InfoCard>
        </div>

        {/* Contact */}
        <div className="row-span-1 col-span-1 rounded-xl bg-slate-800 p-4">
          <InfoCard title="contacts">
            <div></div>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};
