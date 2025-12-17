import React from "react";
import { Card } from "antd";
import type { AppCardProps } from "../interface/components";

const AppCard: React.FC<AppCardProps> = ({
  children,
  className = "",
  hoverable = true,
}) => {
  return (
    <Card
      className={`rounded-xl border-2 transition-shadow ${
        hoverable ? "hover:shadow-lg" : ""
      } ${className}`}
    >
      {children}
    </Card>
  );
};

export default AppCard;