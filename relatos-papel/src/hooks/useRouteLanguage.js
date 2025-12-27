import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useRouteLanguage(lang) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!lang) return;
    if (i18n.resolvedLanguage === lang) return;

    i18n.changeLanguage(lang);
  }, [lang, i18n]);
}