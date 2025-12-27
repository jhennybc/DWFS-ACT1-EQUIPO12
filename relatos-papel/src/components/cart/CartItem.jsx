import { useTranslation } from "react-i18next";

export default function CartItem({ lang, item, onQty, onRemove }) {
  const { t } = useTranslation("cart");

  const unit = formatCurrency(item.price, lang);
  const total = formatCurrency(Number(item.price || 0) * Number(item.qty || 1), lang);

  return (
    <article className="cartItem" aria-label={item.title}>
      <img
        className="cartItem__img"
        src={item.cover}
        alt={`Cover ${item.title}`}
        width="72"
        height="96"
        loading="lazy"
        decoding="async"
      />

      <div className="cartItem__main">
        <div className="cartItem__top">
          <div>
            <h3 className="cartItem__name">{item.title}</h3>
            <p className="cartItem__author">{item.author}</p>
          </div>

          <button
            className="cartItem__remove"
            type="button"
            aria-label={t("item.remove")}
            onClick={() => onRemove(item.id)}
          >
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>

        <div className="cartItem__bottom">
          <div className="qty" role="group" aria-label={t("qty.aria")}>
            <button
              className="qty__btn"
              type="button"
              onClick={() => onQty(item.id, Number(item.qty || 1) - 1)}
              aria-label={t("qty.dec")}
            >
              <i className="fa-solid fa-minus" aria-hidden="true"></i>
            </button>

            <input
              className="qty__value"
              type="text"
              inputMode="numeric"
              value={item.qty}
              onChange={(e) => onQty(item.id, e.target.value)}
              aria-label={t("qty.aria")}
              autoComplete="off"
            />

            <button
              className="qty__btn"
              type="button"
              onClick={() => onQty(item.id, Number(item.qty || 1) + 1)}
              aria-label={t("qty.inc")}
            >
              <i className="fa-solid fa-plus" aria-hidden="true"></i>
            </button>
          </div>

          <div className="cartItem__price">
            <div className="cartItem__unit">
              {t("item.unit")}: <strong>{unit}</strong>
            </div>
            <div className="cartItem__total">{total}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

function formatCurrency(value, lang) {
  return new Intl.NumberFormat(lang === "en" ? "en-US" : "es-EC", {
    style: "currency",
    currency: "USD"
  }).format(Number(value) || 0);
}