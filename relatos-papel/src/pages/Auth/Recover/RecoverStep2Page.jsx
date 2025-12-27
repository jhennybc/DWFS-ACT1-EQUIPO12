import Head from "../../../components/utils/HeadLanding";
import RecoverStep2Layout from "../../../components/auth/recover/RecoverStep2Layout";
import { useLangRouting } from "../../../hooks/useLangRouting";
import { useTranslation } from "react-i18next";
import { APP_ORIGIN } from "../../../constants/env";
import "../../../assets/css/styles-auth.css";

export default function RecoverStep2Page() {
  const { lang } = useLangRouting();
  const { t } = useTranslation("recover2");

  const canonical = `${APP_ORIGIN}/${lang}/auth/recover/step-2`;

  return (
    <>
      <Head
        lang={lang}
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        canonical={canonical}
        ogImage="/assets/img/og-recover-step2.jpg"
        siteName="Librería dígital"
        locale={lang === "es" ? "es_EC" : "en_US"}
      />

      <RecoverStep2Layout />
    </>
  );
}