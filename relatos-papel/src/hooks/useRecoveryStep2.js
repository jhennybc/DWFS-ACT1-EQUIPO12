import { useEffect, useMemo, useState } from "react";

export function useRecoveryStep2() {
  const [code, setCode] = useState("");
  const [touched, setTouched] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const isValid = useMemo(
    () => /^[0-9]{6}$/.test(code),
    [code]
  );

  useEffect(() => {
    if (statusMsg) setStatusMsg("");
  }, [code]);

  return {
    code,
    setCode,
    touched,
    setTouched,
    isValid,
    statusMsg,
    setStatusMsg
  };
}