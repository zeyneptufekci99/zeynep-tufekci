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
  const bg = generateBG({
    max: 260,
    min: 140,
  });

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
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                src={item.url}
                alt={`${projectName}-${item.id}`}
              />
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
