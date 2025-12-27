import { useTranslation } from "react-i18next";
import CartItem from "./CartItem";

export default function CartList({ lang, items, onQty, onRemove }) {
  const { t } = useTranslation("cart");

  return (
    <div className="panel panel--elevated cartList">
      <div className="panel__head cartList__head">
        <div className="cartList__headLeft">
          <span className="cartList__icon" aria-hidden="true">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <div>
            <div className="cartList__title">{t("list.title")}</div>
            <div className="cartList__subtitle">{t("list.subtitle")}</div>
          </div>
        </div>

        <button className="btn cartList__ghostBtn" type="button" aria-label="Refresh">
          <i className="fa-solid fa-arrows-rotate" aria-hidden="true"></i>
        </button>
      </div>

      <div className="panel__body cartList__body">
        <ul className="cartList__items">
          {items.map((it) => (
            <li key={it.id}>
              <CartItem lang={lang} item={it} onQty={onQty} onRemove={onRemove} />
            </li>
          ))}
        </ul>

        <div className="cartList__note" role="note">
          <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
          <span>
            {lang === "en"
              ? "Info: quantities update totals instantly."
              : "Info: al cambiar cantidades, los totales se actualizan al instante."}
          </span>
        </div>
      </div>
    </div>
  );
}