import { FC } from "react";

import Typography, { TypographyProps } from "@mui/material/Typography";

interface AppTextProps extends TypographyProps {
  children: string;
  colorType?: "primary" | "secondary";
}

const AppText: FC<AppTextProps> = ({
  fontFamily = "Vollkorn",
  children,
  variant = "h4",
  component = "span",
  colorType = "primary",
  ...props
}) => {
  return (
    <Typography
      style={{
        color: colorType === "primary" ? "var(--primary-color)" : "var(--secondary-color)",
      }}
      fontFamily={fontFamily}
      variant={variant}
      component={component}
      {...props}>
      {children}
    </Typography>
  );
};

export default AppText;
