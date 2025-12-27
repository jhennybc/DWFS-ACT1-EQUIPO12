import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HelpPanel({ lang }) {
  const { t } = useTranslation("cart");
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div className="panel panel--elevated" aria-label={t("help.title")}>
      <div className="panel__head">
        <span className="help__icon" aria-hidden="true">
          <i className="fa-regular fa-circle-question"></i>
        </span>
        <div>
          <div className="fw-bold">{t("help.title")}</div>
          <div className="help__sub">{t("help.subtitle")}</div>
        </div>
      </div>

      <div className="panel__body">
        <div className="help__actions">
          <button className="btn help__btn help__btn--ghost" type="button">
            <i className="fa-regular fa-envelope" aria-hidden="true"></i>
            {t("help.contact")}
          </button>

          <button
            className="btn help__btn help__btn--primary"
            type="button"
            onClick={() => navigate(`/${params.lang || lang}/catalog`)}
          >
            <i className="fa-solid fa-book" aria-hidden="true"></i>
            {t("help.continue")}
          </button>
        </div>
      </div>
    </div>
  );
}