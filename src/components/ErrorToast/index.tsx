import React, { useEffect } from "react";
import { Toast } from "./styles";

type Props = {
  message: string;
  onClose: () => void;
};

const ErrorToast = ({ message, onClose }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return <Toast>{message}</Toast>;
};

export default ErrorToast;
