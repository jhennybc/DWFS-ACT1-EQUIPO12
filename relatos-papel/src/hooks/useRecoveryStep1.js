import { useEffect, useMemo, useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useRecoveryStep1() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const isValid = useMemo(() => emailRegex.test(email.trim()), [email]);

  useEffect(() => {
    if (statusMsg) setStatusMsg("");
  }, [email]);

  return {
    email,
    setEmail,
    touched,
    setTouched,
    isValid,
    statusMsg,
    setStatusMsg
  };
}