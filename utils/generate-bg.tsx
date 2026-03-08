import { colors } from "@/styles/colors";

type GenerateProps = {
  max?: number;
  min?: number;
  degree?: number;
  from?: string;
  to?: string;
};

export const generateBG = (props: GenerateProps) => {
  const fromColor = props.from ?? `${colors.primary.DEFAULT} 0%`;
  const toColor = props.to ?? `${colors.black} 100%`;
  const maxDegree = props.max ?? 360;
  const minDegree = props.min ?? 0;
  const computedDegree =
    Math.floor(Math.random() * (maxDegree - minDegree + 1)) + minDegree;

  return {
    backgroundImage: `linear-gradient(${props.degree ?? computedDegree}deg, ${fromColor}, ${toColor})`,
  } as const;
};
