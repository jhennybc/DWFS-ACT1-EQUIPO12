import { useTranslation } from "react-i18next";

export default function PayBanner() {
  const { t } = useTranslation("checkout");

  return (
    <div className="panel panel--elevated" aria-label={t("banner.title")}>
      <div className="payBanner__body">
        <div className="payBanner__icon" aria-hidden="true">
          <i className="fa-solid fa-shield"></i>
        </div>
        <div>
          <div className="payBanner__title">{t("banner.title")}</div>
          <div className="payBanner__desc">{t("banner.desc")}</div>
        </div>
      </div>
    </div>
  );
}