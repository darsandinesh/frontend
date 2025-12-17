import React from "react";
import { Button } from "antd";
import type { AppButtonProps } from "../interface/components";

const AppButton: React.FC<AppButtonProps> = ({
  children,
  type = "default",
  size = "middle",
  block = false,
  className = "",
  onClick,
}) => {
  return (
    <Button
      type={type}
      size={size}
      block={block}
      onClick={onClick}
      className={`rounded-lg font-medium ${className}`}
    >
      {children}
    </Button>
  );
};

export default AppButton;
