import { useTranslation } from "react-i18next";

export default function CardForm({
  cardName,
  setCardName,
  cardNumber,
  setCardNumber,
  cardExp,
  setCardExp,
  cardCvc,
  setCardCvc
}) {
  const { t } = useTranslation("checkout");

  const maskedNumber = (cardNumber || "").replace(/[^\d]/g, "").padEnd(16, "•").slice(0, 16);
  const prettyNumber = maskedNumber.replace(/(.{4})/g, "$1 ").trim();

  return (
    <div className="panel panel--elevated cardForm" aria-label={t("cardForm.title")}>
      <div className="panel__head cardForm__head">
        <div className="cardForm__icon" aria-hidden="true">
          <i className="fa-solid fa-id-card"></i>
        </div>
        <div>
          <div className="fw-bold">{t("cardForm.title")}</div>
          <div className="cardForm__sub">{t("cardForm.sub")}</div>
        </div>
      </div>

      <div className="panel__body cardForm__body">
        <div className="cardMock" aria-label="Vista previa de tarjeta">
          <div className="cardMock__top">
            <i className="fa-solid fa-wifi cardMock__wifi" aria-hidden="true"></i>
            <i className="fa-solid fa-lock cardMock__lock" aria-hidden="true"></i>
          </div>

          <div className="cardMock__number">{prettyNumber}</div>

          <div className="cardMock__bottom">
            <div>
              <div className="cardMock__label">{t("cardForm.labels.name")}</div>
              <div className="cardMock__value">{(cardName || "—").toUpperCase()}</div>
            </div>
            <div>
              <div className="cardMock__label">{t("cardForm.labels.exp")}</div>
              <div className="cardMock__value">{cardExp || "—"}</div>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="cardForm__label form-label" htmlFor="cardName">
            {t("cardForm.labels.name")}
          </label>
          <div className="input-group cardForm__group">
            <span className="input-group-text cardForm__addon" aria-hidden="true">
              <i className="fa-regular fa-user"></i>
            </span>
            <input
              id="cardName"
              className="form-control cardForm__control"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder={t("cardForm.placeholders.name")}
              autoComplete="cc-name"
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="cardForm__label form-label" htmlFor="cardNumber">
            {t("cardForm.labels.number")}
          </label>
          <div className="input-group cardForm__group">
            <span className="input-group-text cardForm__addon" aria-hidden="true">
              <i className="fa-solid fa-credit-card"></i>
            </span>
            <input
              id="cardNumber"
              className="form-control cardForm__control"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder={t("cardForm.placeholders.number")}
              inputMode="numeric"
              autoComplete="cc-number"
            />
          </div>
        </div>

        <div className="row g-2">
          <div className="col-6">
            <label className="cardForm__label form-label" htmlFor="cardExp">
              {t("cardForm.labels.exp")}
            </label>
            <input
              id="cardExp"
              className="form-control cardForm__control"
              value={cardExp}
              onChange={(e) => setCardExp(e.target.value)}
              placeholder={t("cardForm.placeholders.exp")}
              autoComplete="cc-exp"
            />
          </div>

          <div className="col-6">
            <label className="cardForm__label form-label" htmlFor="cardCvc">
              {t("cardForm.labels.cvc")}
            </label>
            <input
              id="cardCvc"
              className="form-control cardForm__control"
              value={cardCvc}
              onChange={(e) => setCardCvc(e.target.value)}
              placeholder={t("cardForm.placeholders.cvc")}
              inputMode="numeric"
              autoComplete="cc-csc"
            />
          </div>
        </div>

        <div className="cardForm__footNote" role="note">
          <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
          <span>{t("cardForm.note")}</span>
        </div>
      </div>
    </div>
  );
}