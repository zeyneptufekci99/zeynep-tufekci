import { colors } from "@/styles/colors";

type GenerateProps = {
  degree?: number;
  from?: string;
  to?: string;
};

export const generateBG = (props: GenerateProps = {}) => {
  const fromColor = props.from ?? `${colors.primary.DEFAULT} 0%`;
  const toColor = props.to ?? `${colors.black} 100%`;

  const degree = props.degree ?? 195;

  return {
    backgroundImage: `linear-gradient(${degree}deg, ${fromColor}, ${toColor})`,
  } as const;
};
