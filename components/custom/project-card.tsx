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

export interface IProjectCard {
  projectName: string;
  buttonUrl: string;
  imageUrl: string;
  description: string;
  className?: string;
}

export const ProjectCard = ({
  projectName,
  buttonUrl,
  imageUrl,
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
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          src={imageUrl}
          alt={projectName}
        />
      </CardContent>
      <CardFooter className="border-0 bg-transparent items-center justify-center">
        <Button>
          <Link href={buttonUrl}>View Project </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
