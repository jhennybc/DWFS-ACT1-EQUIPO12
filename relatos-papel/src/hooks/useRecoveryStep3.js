import { useEffect, useMemo, useState } from "react";

export function useRecoveryStep3() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [touched, setTouched] = useState({ newPassword: false, confirmPassword: false });
  const [statusMsg, setStatusMsg] = useState("");

  const minLenOk = useMemo(() => newPassword.trim().length >= 8, [newPassword]);
  const matchOk = useMemo(
    () => confirmPassword.length > 0 && newPassword === confirmPassword,
    [newPassword, confirmPassword]
  );

  const canSubmit = minLenOk && matchOk;

  useEffect(() => {
    if (statusMsg) setStatusMsg("");
  }, [newPassword, confirmPassword]);

  return {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    touched,
    setTouched,
    minLenOk,
    matchOk,
    canSubmit,
    statusMsg,
    setStatusMsg
  };
}