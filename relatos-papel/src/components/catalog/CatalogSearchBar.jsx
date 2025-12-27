import { useTranslation } from "react-i18next";

export default function CatalogSearchBar({ value, onChange, onSubmit }) {
  const { t } = useTranslation("catalog");

  return (
    <form
      className="catalog__search"
      role="search"
      aria-label={t("search.aria")}
      onSubmit={onSubmit}
    >
      <div className="catalog__searchWrap">
        <span className="catalog__searchIcon" aria-hidden="true">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>

        <label className="visually-hidden" htmlFor="q">
          {t("search.label")}
        </label>

        <input
          id="q"
          className="form-control catalog__searchInput"
          type="search"
          inputMode="search"
          placeholder={t("search.placeholder")}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        <button
          className="btn catalog__searchBtn"
          type="submit"
          aria-label={t("search.buttonAria")}
        >
          {t("search.button")}
        </button>
      </div>
    </form>
  );
}