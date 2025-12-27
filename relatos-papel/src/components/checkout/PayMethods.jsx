import { useTranslation } from "react-i18next";

export default function PayMethods({ method, onChange }) {
  const { t } = useTranslation("checkout");

  return (
    <div className="panel panel--elevated payMethods" aria-label={t("methods.title")}>
      <div className="panel__head payMethods__head">
        <div className="payMethods__icon" aria-hidden="true">
          <i className="fa-solid fa-credit-card"></i>
        </div>
        <div>
          <div className="fw-bold">{t("methods.title")}</div>
          <div className="payMethods__sub">{t("methods.sub")}</div>
        </div>
      </div>

      <div className="panel__body payMethods__body">
        <fieldset className="payMethods__grid">
          <legend className="visually-hidden">{t("methods.title")}</legend>

          <MethodRadio
            value="card"
            current={method}
            onChange={onChange}
            icon="fa-regular fa-credit-card"
            name={t("method.card.name")}
            meta={t("method.card.meta")}
          />

          <MethodRadio
            value="paypal"
            current={method}
            onChange={onChange}
            icon="fa-brands fa-paypal"
            badgeClass="method__badge--paypal"
            name={t("method.paypal.name")}
            meta={t("method.paypal.meta")}
          />

          <MethodRadio
            value="bank"
            current={method}
            onChange={onChange}
            icon="fa-solid fa-building-columns"
            badgeClass="method__badge--bank"
            name={t("method.bank.name")}
            meta={t("method.bank.meta")}
          />
        </fieldset>
      </div>
    </div>
  );
}

function MethodRadio({ value, current, onChange, icon, badgeClass = "", name, meta }) {
  const id = `method-${value}`;

  return (
    <div className="method">
      <input
        className="method__input"
        type="radio"
        id={id}
        name="payMethod"
        value={value}
        checked={current === value}
        onChange={() => onChange(value)}
      />

      <label className="method__label" htmlFor={id}>
        <span className={`method__badge ${badgeClass}`} aria-hidden="true">
          <i className={icon}></i>
        </span>

        <span className="method__text">
          <span className="method__name">{name}</span>
          <span className="method__meta">{meta}</span>
        </span>

        <span className="method__check" aria-hidden="true">
          <i className="fa-solid fa-circle-check"></i>
        </span>
      </label>
    </div>
  );
}