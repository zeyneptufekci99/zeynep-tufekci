"use client";

import { projects } from "@/data/dummy-data";
import { ProjectCard } from "./project-card";
import { Separator } from "./separator";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";

export const ProjectContainer = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-4 w-full items-center justify-center">
        <h3 className="text-4xl">Projects</h3>
        <Separator />
      </div>

      <div className="w-full max-w-full overflow-hidden">
        <Swiper
          loop={true}
          modules={[Keyboard, Autoplay]}
          keyboard={{ enabled: true }}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!overflow-hidden"
        >
          {projects.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto">
              <ProjectCard
                className="max-w-full"
                projectName={item.projectName}
                buttonUrl={item.buttonUrl}
                imageUrl={item.imageUrl}
                description={item.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
