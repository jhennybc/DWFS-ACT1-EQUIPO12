import { useTranslation } from "react-i18next";
import CatalogDataTable from "./CatalogDataTable";

export default function CatalogPanel({ lang, rows, onReady }) {
  const { t } = useTranslation("catalog");

  return (
    <div className="catalogPanel panel panel--elevated">
      <div className="panel__head catalogPanel__head">
        <div className="catalogPanel__headLeft">
          <span className="catalogPanel__icon" aria-hidden="true">
            <i className="fa-solid fa-book"></i>
          </span>

          <div>
            <span className="catalogPanel__title">
              {t("panel.title")}
            </span>

            <span className="catalogPanel__subtitle">
              {t("panel.subtitle")}
            </span>
          </div>
        </div>

        <div
          className="catalogPanel__headRight"
          aria-label={t("panel.actions.aria")}
        >
          <button
            type="button"
            className="btn catalogPanel__ghostBtn"
            aria-label={t("panel.actions.refresh")}
          >
            <i className="fa-solid fa-arrows-rotate" aria-hidden="true"></i>
          </button>

          <button
            type="button"
            className="btn catalogPanel__ghostBtn"
            aria-label={t("panel.actions.view")}
          >
            <i className="fa-solid fa-grip" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div className="panel__body catalogPanel__body">
        <div className="table-responsive catalogPanel__tableWrap">
          <CatalogDataTable lang={lang} rows={rows} onReady={onReady} />
        </div>
      </div>
    </div>
  );
}
