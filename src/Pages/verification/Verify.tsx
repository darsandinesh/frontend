import React, { useEffect, useState } from "react";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import VerifyContainer from "../../Container/Verify/VerifyContainer";
import { verify } from "../../Api/commonAppi";
import { AppButton } from "../../components";

const VerifyEmail: React.FC = () => {
  const [status, setStatus] = useState<"loading" | "success" | "failed">(
    "loading",
  );
  const [message, setMessage] = useState("");
  const [mainMessage, setMainMessage] = useState("");

  const headers = {
    "Content-Type": "application/json",
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const email = params.get("email");

    if (!token || !email) {
      setStatus("failed");
      setMessage("Invalid verification link.");
      setMainMessage("Please try again.");
      return;
    }

    handleVerify(token, email);
  }, []);

  const handleVerify = async (token: string, email: string) => {
    try {
      const response = await verify({ token, email }, headers);

      if (response.success) {
        setStatus("success");
        setMessage(response.message);
        setMainMessage("Email Verified Successfully!");
      } else {
        setStatus("failed");
        setMessage(response.message);
        setMainMessage("Email verification failed. Please try again.");
      }
    } catch {
      setStatus("failed");
      setMessage("Verification failed. Please try again.");
      setMainMessage("Email verification failed. Please try again.");
    }
  };

  if (status === "loading")
    return (
      <VerifyContainer
        title={mainMessage}
        icon={
          <LoadingOutlined className="text-5xl text-green-600 animate-spin" />
        }
      >
        <p className="text-gray-600">
          Please wait while we verify your account.
        </p>
      </VerifyContainer>
    );

  if (status === "success")
    return (
      <VerifyContainer
        title={mainMessage}
        icon={<CheckCircleOutlined className="text-5xl text-green-600" />}
      >
        <p className="text-gray-700 mb-6">{message}</p>
        <AppButton
          type="primary"
          size="large"
          onClick={() => (window.location.href = "/signin")}
          className="bg-gray-900 hover:bg-gray-800 h-12"
        >
          Go to Sign In
        </AppButton>
      </VerifyContainer>
    );

  return (
    <VerifyContainer
      title={mainMessage}
      icon={<CloseCircleOutlined className="text-5xl text-red-600" />}
    >
      <p className="text-gray-700 mb-6">{message}</p>
      <AppButton
        type="primary"
        size="large"
        onClick={() => (window.location.href = "/")}
        className="bg-gray-900 hover:bg-gray-800 h-12"
      >
        Back to Home
      </AppButton>
    </VerifyContainer>
  );
};

export default VerifyEmail;
