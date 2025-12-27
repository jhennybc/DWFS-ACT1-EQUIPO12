import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AuthLanguageSwitch() {
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const changeLang = (nextLang) => {
    if (nextLang === lang) return;

    i18n.changeLanguage(nextLang);

    const newPath = location.pathname.replace(
      /^\/(es|en)/,
      `/${nextLang}`
    );

    navigate(newPath, { replace: true });
  };

  return (
    <div
      className="auth__langSwitch d-flex justify-content-center gap-3 mb-3"
      aria-label="Selector de idioma"
    >
      <button
        type="button"
        className="auth__langLink"
        onClick={() => changeLang("es")}
        aria-label="Cambiar idioma a Español"
      >
        <img src="/assets/img/es.webp" alt="Español" width="20" height="14" />
        <span>ESP</span>
      </button>

      <button
        type="button"
        className="auth__langLink"
        onClick={() => changeLang("en")}
        aria-label="Switch language to English"
      >
        <img src="/assets/img/gb.webp" alt="English" width="20" height="14" />
        <span>ENG</span>
      </button>
    </div>
  );
}
