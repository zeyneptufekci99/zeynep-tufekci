import { cva, VariantProps } from "class-variance-authority";
import { buttonVariants, Button as SHDButton } from "../ui/button";

export const Button = ({
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) => {
  return <SHDButton {...props} />;
};
