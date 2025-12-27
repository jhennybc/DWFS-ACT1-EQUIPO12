import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FeaturePill from "./FeaturePill";

export default function LandingHero({ lang }) {
  const { t } = useTranslation("landing");

  const features = [
    { icon: "fa-solid fa-bolt", text: t("features.fast") },
    { icon: "fa-solid fa-universal-access", text: t("features.accessible") },
    { icon: "fa-solid fa-shield", text: t("features.secure") },
    { icon: "fa-solid fa-cart-shopping", text: t("features.easyBuy") },
  ];

  return (
    <section className="col-12 col-lg-10 col-xl-8 mx-auto">
      <div className="landingHero" role="region" aria-label={t("heroAria")}>
        <div className="landingHero__glass">
          <div className="landingHero__kicker">
            <span className="landingHero__kickerIcon" aria-hidden="true">
              <i className="fa-solid fa-star"></i>
            </span>
            <span className="landingHero__kickerText">{t("kicker")}</span>
          </div>

          <h1 className="landingHero__title">
            {t("title.pre")} <span className="landingHero__accent">{t("title.accent")}</span>
          </h1>

          <p className="landingHero__subtitle">{t("subtitle")}</p>

          <div className="landingHero__features" aria-label={t("benefitsAria")}>
            {features.map((f) => (
              <FeaturePill key={f.text} iconClass={f.icon} text={f.text} />
            ))}
          </div>

          <div className="landingHero__actions" aria-label={t("actionsAria")}>
            <Link className="btn landingHero__primaryBtn" to={`/${lang}/catalog`}>
              <i className="fa-solid fa-book-open" aria-hidden="true"></i>
              {t("goCatalog")}
            </Link>
          </div>

          <div className="landingHero__scrollCue" aria-hidden="true">
            <span className="landingHero__scrollDot"></span>
          </div>
        </div>
      </div>
    </section>
  );
}