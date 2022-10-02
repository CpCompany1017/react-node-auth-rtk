import { useState } from "react";
import { toast } from "react-toastify";

export const useCopyPassword = (text) => {
  const [copiedPassword, setCopiedPassword] = useState(null);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPassword(text);
      toast.success("Password copied to clipboard");
    } catch (err) {
      toast.error("Failed to copy password");
    }
  };

  return [copiedPassword, copyToClipboard];
};
