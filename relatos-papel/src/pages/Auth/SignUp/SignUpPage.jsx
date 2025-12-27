import Head from "../../../components/utils/HeadLanding";
import AuthLayout from "../../../components/auth/AuthLayout";
import { useLangRouting } from "../../../hooks/useLangRouting";
import { useTranslation } from "react-i18next";
import { APP_ORIGIN } from "../../../constants/env";
import "../../../assets/css/styles-auth.css";

export default function SignUpPage() {
  const { lang } = useLangRouting();
  const { t } = useTranslation("signup");

  const canonical = `${APP_ORIGIN}/${lang}/auth/sign-up`;

  return (
    <>
      <Head
        lang={lang}
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        canonical={canonical}
        ogImage="/assets/img/og-signup.jpg"
        siteName="Librería dígital"
        locale={lang === "es" ? "es_EC" : "en_US"}
      />

      <AuthLayout />
    </>
  );
}