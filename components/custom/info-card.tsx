import { colors } from "@/styles/colors";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { generateBG } from "@/utils/generate-bg";
import { ReactNode } from "react";

export interface IInfoCard {
  title: string;
  children: ReactNode;
}

export const InfoCard = ({ title, children }: IInfoCard) => {
  const bg = generateBG({
    from: `${colors.black} 0%`,
    to: `${colors.secondary.dim} 100%`,
  });

  return (
    <Card style={bg}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
