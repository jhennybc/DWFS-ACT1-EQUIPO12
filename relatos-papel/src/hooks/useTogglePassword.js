import { useState } from "react";

export function useTogglePassword() {
  const [visible, setVisible] = useState(false);
  return {
    type: visible ? "text" : "password",
    icon: visible ? "fa-eye" : "fa-eye-slash",
    toggle: () => setVisible(v => !v)
  };
}