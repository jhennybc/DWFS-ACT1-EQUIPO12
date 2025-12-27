import { useCallback, useState } from "react";

export function useQty(initial = 1) {
  const [value, setValue] = useState(String(clamp(initial, 1, 99)));

  const getVal = useCallback(() => clamp(parseInt(value || "1", 10) || 1, 1, 99), [value]);

  const plus = useCallback(() => {
    setValue(String(clamp(getVal() + 1, 1, 99)));
  }, [getVal]);

  const minus = useCallback(() => {
    setValue(String(clamp(getVal() - 1, 1, 99)));
  }, [getVal]);

  const onChange = useCallback((e) => {
    const raw = String(e.target.value || "").replace(/[^\d]/g, "");
    setValue(raw === "" ? "" : String(clamp(parseInt(raw, 10), 1, 99)));
  }, []);

  const onBlur = useCallback(() => {
    setValue(String(clamp(getVal(), 1, 99)));
  }, [getVal]);

  return { value, plus, minus, onChange, onBlur };
}

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}