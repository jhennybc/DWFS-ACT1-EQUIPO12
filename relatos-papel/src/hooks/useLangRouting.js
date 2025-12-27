import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import i18n from "../app/i18n/i18n";

const SUPPORTED = new Set(["es", "en"]);

export function useLangRouting() {
  const { lang } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const safeLang = SUPPORTED.has(lang) ? lang : "es";
    if (lang !== safeLang) navigate(`/${safeLang}`, { replace: true });
    i18n.changeLanguage(safeLang);
    document.documentElement.lang = safeLang;
  }, [lang, navigate]);

  return { lang: SUPPORTED.has(lang) ? lang : "es" };
}