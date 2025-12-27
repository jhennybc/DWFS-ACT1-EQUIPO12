import Head from "../../../components/utils/HeadLanding";
import AuthOverlayLayout from "../../../components/auth/AuthOverlayLayout";
import { useLangRouting } from "../../../hooks/useLangRouting";
import { useTranslation } from "react-i18next";
import { APP_ORIGIN } from "../../../constants/env";
import "../../../assets/css/styles-auth.css";

export default function SignInPage() {
  const { lang } = useLangRouting();
  const { t } = useTranslation("signin");

  const canonical = `${APP_ORIGIN}/${lang}/auth/sign-in`;

  return (
    <>
      <Head
        lang={lang}
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        canonical={canonical}
        ogImage="/assets/img/og-signin.jpg"
        siteName="Librería dígital"
        locale={lang === "es" ? "es_EC" : "en_US"}
      />

      <AuthOverlayLayout />
    </>
  );
}