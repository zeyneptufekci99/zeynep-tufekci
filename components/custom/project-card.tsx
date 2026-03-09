"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { generateBG } from "@/utils/generate-bg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Keyboard } from "swiper/modules";

export interface IProjectCard {
  projectName: string;
  buttonUrl: string;
  images: {
    id: string;
    url: string;
  }[];
  description: string;
  className?: string;
}

export const ProjectCard = ({
  projectName,
  buttonUrl,
  images,
  description,
  className,
}: IProjectCard) => {
  const bg = generateBG();

  return (
    <Card className={className} style={bg}>
      <CardHeader>
        <CardTitle>{projectName}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
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
          className="!overflow-hidden"
        >
          {images.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto">
              <div className="relative w-full h-48">
                <Image
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  src={item.url}
                  alt={`${projectName}-${item.id}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardContent>
      <CardFooter className="border-0 bg-transparent items-center justify-center">
        <Button>
          <Link target="__blank" href={buttonUrl}>
            View Project{" "}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
