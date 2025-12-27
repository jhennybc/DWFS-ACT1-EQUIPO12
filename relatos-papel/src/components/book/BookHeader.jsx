import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BookHeader({ lang, slug }) {
  const navigate = useNavigate();
  const { t } = useTranslation("book");

  const go = (next) => {
    if (next === lang) return;
    navigate(`/${next}/catalog/book/${slug}`);
  };

  return (
    <header className="bookPage__header">
      <div className="container-fluid">
        <div className="bookPage__topRow">
          <Link
            className="bookPage__back"
            to={`/${lang}/catalog`}
            aria-label={t("header.backAria")}
          >
            <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
            <span>{t("header.back")}</span>
          </Link>

          <div
            className="bookPage__langBar d-flex justify-content-end gap-3"
            aria-label={t("header.actionsAria")}
          >
            <Link
              className="bookPage__cartLink"
              to={`/${lang}/cart`}
              aria-label={t("header.cartAria")}
            >
              <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
            </Link>

            {/* Español */}
            <a
              className="bookPage__langLink"
              href="#"
              lang="es"
              aria-label={t("header.langEsAria")}
              onClick={(e) => {
                e.preventDefault();
                go("es");
              }}
            >
              <img
                src="/assets/img/es.webp"
                alt={t("header.langEs")}
                width="20"
                height="14"
                loading="lazy"
                decoding="async"
              />
              <span>ESP</span>
            </a>

            {/* Inglés */}
            <a
              className="bookPage__langLink"
              href="#"
              lang="en"
              aria-label={t("header.langEnAria")}
              onClick={(e) => {
                e.preventDefault();
                go("en");
              }}
            >
              <img
                src="/assets/img/gb.webp"
                alt={t("header.langEn")}
                width="20"
                height="14"
                loading="lazy"
                decoding="async"
              />
              <span>ENG</span>
            </a>
          </div>
        </div>

        <div className="bookPage__titleWrap">
          <h1 className="bookPage__title text-center">
            {t("header.title.prefix")}{" "}
            <span className="bookPage__titleAccent">
              {t("header.title.accent")}
            </span>
          </h1>

          <p className="bookPage__subtitle text-center mb-0">
            {t("header.subtitle")}
          </p>
        </div>
      </div>
    </header>
  );
}