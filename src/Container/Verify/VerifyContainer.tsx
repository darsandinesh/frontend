import React from "react";
import type { VerifyContainerProps } from "../../interface/components";

const VerifyContainer: React.FC<VerifyContainerProps> = ({
  title,
  icon,
  children,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl max-w-md w-full p-8 text-center border-2 border-green-300">
        <div className="mb-4 flex items-center justify-center">{icon}</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default VerifyContainer;
