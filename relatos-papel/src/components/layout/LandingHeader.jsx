import { Link } from "react-router-dom";
import LanguageSwitcher from "../landing/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function LandingHeader() {
  const { t } = useTranslation("landing");

  return (
    <header className="landing__top">
      <div className="container-fluid px-3 px-lg-4">
        <div className="d-flex align-items-center justify-content-between gap-3">
          <div className="landing__brand" aria-label={t("brandAria")}>
            <span className="landing__logoTop">{t("brandTop")}</span>
            <span className="landing__logoBottom">{t("brandBottom")}</span>
          </div>

          <nav className="landing__nav d-flex flex-wrap align-items-center justify-content-end gap-2" aria-label={t("navAria")}>
            <LanguageSwitcher />

            <Link className="landing__navLink" to="/es/auth/sign-in">
              <i className="fa-regular fa-user" aria-hidden="true"></i>
              {t("signIn")}
            </Link>

            <Link className="landing__navLink landing__navLink--primary" to="/es/auth/sign-up">
              <i className="fa-regular fa-pen-to-square" aria-hidden="true"></i>
              {t("signUp")}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}