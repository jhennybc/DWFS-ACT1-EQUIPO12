/* import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export default function FiltersPanel({ dtApi }) {
  const { t } = useTranslation("catalog");

  const [price, setPrice] = useState(50);

  const genreOptions = useMemo(
    () => [
      { value: "fiction", label: t("filters.genreOptions.fiction") },
      { value: "fantasy", label: t("filters.genreOptions.fantasy") },
      { value: "history", label: t("filters.genreOptions.history") },
      { value: "business", label: t("filters.genreOptions.business") },
      { value: "classics", label: t("filters.genreOptions.classics") }
    ],
    [t]
  );

  const yearOptions = useMemo(
    () => [
      { value: "2024", label: "2024" },
      { value: "2023", label: "2023" },
      { value: "2020-2022", label: "2020-2022" },
      { value: "2010-2019", label: "2010-2019" },
      { value: "2000-2009", label: "2000-2009" },
      { value: "before-2000", label: t("filters.yearOptions.before2000") }
    ],
    [t]
  );

  useEffect(() => {
    const el = document.getElementById("priceValue");
    if (el) el.textContent = formatCurrency(price);
  }, [price]);

  const clearAll = () => {
    setPrice(50);

    const genres = document.getElementById("genres");
    const years = document.getElementById("years");
    const sort = document.getElementById("sort");
    const stockAll = document.getElementById("stockAll");

    if (genres) selectOnlyFirstOption(genres);
    if (years) selectOnlyFirstOption(years);
    if (sort) sort.selectedIndex = 0;
    if (stockAll) stockAll.checked = true;

    if (dtApi) {
      dtApi.search("");
      dtApi.columns().search("");
      dtApi.draw();
    }
  };

  return (
    <div className="panel panel--elevated filtersPanel" aria-label={t("filters.aria")}>
      <div className="panel__head filtersPanel__head">
        <i className="fa-solid fa-sliders" aria-hidden="true"></i>

        <div className="filtersPanel__headText">
          <div className="fw-bold">{t("filters.title")}</div>
          <div className="filtersPanel__sub">{t("filters.subtitle")}</div>
        </div>

        <button
          type="button"
          className="btn filtersPanel__clearBtn ms-auto"
          id="btnClearFiltersSide"
          onClick={clearAll}
          aria-label={t("filters.clear")}
        >
          <i className="fa-solid fa-rotate-left" aria-hidden="true"></i>
          <span className="d-none d-sm-inline">{t("filters.clear")}</span>
        </button>
      </div>

      <div className="panel__body filtersPanel__body">
        <div className="filtersPanel__stack">
          <div className="filtersPanel__block">
            <label className="filtersPanel__label" htmlFor="genres">
              <i className="fa-solid fa-tags" aria-hidden="true"></i> {t("filters.genres")}
            </label>

            <select
              id="genres"
              className="form-select form-select-sm filtersPanel__control"
              multiple
              size={5}
              aria-label={t("filters.genresAria")}
              defaultValue={["all"]}
            >
              <option value="all">{t("filters.genresAll")}</option>
              {genreOptions.map((g) => (
                <option key={g.value} value={g.value}>
                  {g.label}
                </option>
              ))}
            </select>

            <div className="filtersPanel__hint">{t("filters.multiHint")}</div>
          </div>

          <div className="filtersPanel__block">
            <label className="filtersPanel__label" htmlFor="years">
              <i className="fa-solid fa-calendar-days" aria-hidden="true"></i> {t("filters.years")}
            </label>

            <select
              id="years"
              className="form-select form-select-sm filtersPanel__control"
              multiple
              size={5}
              aria-label={t("filters.yearsAria")}
              defaultValue={["all"]}
            >
              <option value="all">{t("filters.yearsAll")}</option>
              {yearOptions.map((y) => (
                <option key={y.value} value={y.value}>
                  {y.label}
                </option>
              ))}
            </select>

            <div className="filtersPanel__hint">{t("filters.rangeHint")}</div>
          </div>

          <div className="filtersPanel__block">
            <div className="d-flex align-items-center justify-content-between">
              <label className="filtersPanel__label mb-0" htmlFor="price">
                <i className="fa-solid fa-dollar-sign" aria-hidden="true"></i> {t("filters.price")}
              </label>

              <span className="filtersPanel__pillValue" aria-live="polite">
                {t("filters.priceUpTo")} <strong id="priceValue">{formatCurrency(price)}</strong>
              </span>
            </div>

            <div className="filtersPanel__rangeWrap">
              <span className="filtersPanel__rangeText">$0</span>
              <input
                id="price"
                className="form-range filtersPanel__rangeControl"
                type="range"
                min="0"
                max="100"
                value={price}
                aria-label={t("filters.priceAria")}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <span className="filtersPanel__rangeText">$100</span>
            </div>
          </div>

          <fieldset className="filtersPanel__block">
            <legend className="filtersPanel__label mb-2">
              <i className="fa-solid fa-circle-check" aria-hidden="true"></i> {t("filters.stock.title")}
            </legend>

            <div className="filtersPanel__chips" role="radiogroup" aria-label={t("filters.stock.aria")}>
              <div className="filtersPanel__chip">
                <input className="filtersPanel__chipInput" type="radio" name="stock" id="stockAll" defaultChecked />
                <label className="filtersPanel__chipLabel" htmlFor="stockAll">
                  <i className="fa-solid fa-layer-group" aria-hidden="true"></i> {t("filters.stock.all")}
                </label>
              </div>

              <div className="filtersPanel__chip">
                <input className="filtersPanel__chipInput" type="radio" name="stock" id="stockYes" />
                <label className="filtersPanel__chipLabel" htmlFor="stockYes">
                  <i className="fa-solid fa-check" aria-hidden="true"></i> {t("filters.stock.available")}
                </label>
              </div>

              <div className="filtersPanel__chip">
                <input className="filtersPanel__chipInput" type="radio" name="stock" id="stockNo" />
                <label className="filtersPanel__chipLabel" htmlFor="stockNo">
                  <i className="fa-solid fa-xmark" aria-hidden="true"></i> {t("filters.stock.soldOut")}
                </label>
              </div>
            </div>
          </fieldset>

          <div className="filtersPanel__block">
            <label className="filtersPanel__label" htmlFor="sort">
              <i className="fa-solid fa-arrow-up-wide-short" aria-hidden="true"></i> {t("filters.sort")}
            </label>

            <select
              id="sort"
              className="form-select form-select-sm filtersPanel__control"
              aria-label={t("filters.sortAria")}
              defaultValue="popular"
            >
              <option value="popular">{t("filters.sortOptions.popular")}</option>
              <option value="recent">{t("filters.sortOptions.recent")}</option>
              <option value="priceAsc">{t("filters.sortOptions.priceAsc")}</option>
              <option value="priceDesc">{t("filters.sortOptions.priceDesc")}</option>
              <option value="rating">{t("filters.sortOptions.rating")}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

function selectOnlyFirstOption(selectEl) {
  const opts = Array.from(selectEl.options);
  opts.forEach((o, idx) => (o.selected = idx === 0));
}

function formatCurrency(value) {
  return `$${Number(value).toFixed(2)}`;
} */


/* import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import $ from "jquery";

export default function FiltersPanel({ dtApi }) {
  const { t } = useTranslation("catalog");

  const [price, setPrice] = useState(50);

  const genreOptions = useMemo(
    () => [
      { value: "fiction", label: t("filters.genreOptions.fiction") },
      { value: "fantasy", label: t("filters.genreOptions.fantasy") },
      { value: "history", label: t("filters.genreOptions.history") },
      { value: "business", label: t("filters.genreOptions.business") },
      { value: "classics", label: t("filters.genreOptions.classics") }
    ],
    [t]
  );

  const yearOptions = useMemo(
    () => [
      { value: "2024", label: "2024" },
      { value: "2023", label: "2023" },
      { value: "2020-2022", label: "2020-2022" },
      { value: "2010-2019", label: "2010-2019" },
      { value: "2000-2009", label: "2000-2009" },
      { value: "before-2000", label: t("filters.yearOptions.before2000") }
    ],
    [t]
  );

  useEffect(() => {
    if (!dtApi) return;

    $.fn.dataTable.ext.search = $.fn.dataTable.ext.search.filter(
      (fn) => !fn.__filtersPanel
    );

    const filterFn = function (settings, data, dataIndex) {
      const row = dtApi.row(dataIndex).data();
      if (!row) return true;

      if (row.price > price) return false;

      const stockYes = document.getElementById("stockYes")?.checked;
      const stockNo = document.getElementById("stockNo")?.checked;

      if (stockYes && !row.inStock) return false;
      if (stockNo && row.inStock) return false;

      const genresSel = Array.from(
        document.getElementById("genres")?.selectedOptions || []
      )
        .map((o) => o.value)
        .filter((v) => v !== "all");

      if (genresSel.length && !genresSel.includes(mapGenre(row.genre)))
        return false;

      const yearsSel = Array.from(
        document.getElementById("years")?.selectedOptions || []
      )
        .map((o) => o.value)
        .filter((v) => v !== "all");

      if (yearsSel.length && !matchYear(row.year, yearsSel))
        return false;

      return true;
    };

    filterFn.__filtersPanel = true;
    $.fn.dataTable.ext.search.push(filterFn);

    dtApi.draw();

    return () => {
      $.fn.dataTable.ext.search = $.fn.dataTable.ext.search.filter(
        (fn) => fn !== filterFn
      );
    };
  }, [dtApi, price]);

  const clearAll = () => {
    setPrice(50);

    selectOnlyFirstOption(document.getElementById("genres"));
    selectOnlyFirstOption(document.getElementById("years"));
    document.getElementById("sort").selectedIndex = 0;
    document.getElementById("stockAll").checked = true;

    if (dtApi) {
      dtApi.search("");
      dtApi.columns().search("");
      dtApi.draw();
    }
  };

  return (
    <div className="panel panel--elevated filtersPanel" aria-label={t("filters.aria")}>
      <div className="panel__head filtersPanel__head">
        <i className="fa-solid fa-sliders" aria-hidden="true"></i>

        <div className="filtersPanel__headText">
          <div className="fw-bold">{t("filters.title")}</div>
          <div className="filtersPanel__sub">{t("filters.subtitle")}</div>
        </div>

        <button
          type="button"
          className="btn filtersPanel__clearBtn ms-auto"
          onClick={clearAll}
          aria-label={t("filters.clear")}
        >
          <i className="fa-solid fa-rotate-left"></i>
          <span className="d-none d-sm-inline">{t("filters.clear")}</span>
        </button>
      </div>

      <div className="panel__body filtersPanel__body">
        <div className="filtersPanel__stack">

          <div className="filtersPanel__block">
            <label className="filtersPanel__label" htmlFor="genres">
              <i className="fa-solid fa-tags"></i> {t("filters.genres")}
            </label>
            <select
              id="genres"
              className="form-select form-select-sm filtersPanel__control"
              multiple
              size={5}
              defaultValue={["all"]}
              onChange={() => dtApi?.draw()}
            >
              <option value="all">{t("filters.genresAll")}</option>
              {genreOptions.map((g) => (
                <option key={g.value} value={g.value}>{g.label}</option>
              ))}
            </select>
          </div>

          <div className="filtersPanel__block">
            <label className="filtersPanel__label" htmlFor="years">
              <i className="fa-solid fa-calendar-days"></i> {t("filters.years")}
            </label>
            <select
              id="years"
              className="form-select form-select-sm filtersPanel__control"
              multiple
              size={5}
              defaultValue={["all"]}
              onChange={() => dtApi?.draw()}
            >
              <option value="all">{t("filters.yearsAll")}</option>
              {yearOptions.map((y) => (
                <option key={y.value} value={y.value}>{y.label}</option>
              ))}
            </select>
          </div>

          <div className="filtersPanel__block">
            <label className="filtersPanel__label">
              <i className="fa-solid fa-dollar-sign"></i> {t("filters.price")}
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={price}
              className="form-range filtersPanel__rangeControl"
              onChange={(e) => {
                setPrice(Number(e.target.value));
                dtApi?.draw();
              }}
            />
          </div>

          <fieldset className="filtersPanel__block">
            <legend className="filtersPanel__label">
              <i className="fa-solid fa-circle-check"></i> {t("filters.stock.title")}
            </legend>

            <input type="radio" id="stockAll" name="stock" defaultChecked onChange={() => dtApi?.draw()} />
            <input type="radio" id="stockYes" name="stock" onChange={() => dtApi?.draw()} />
            <input type="radio" id="stockNo" name="stock" onChange={() => dtApi?.draw()} />
          </fieldset>

        </div>
      </div>
    </div>
  );
}

function selectOnlyFirstOption(selectEl) {
  if (!selectEl) return;
  Array.from(selectEl.options).forEach((o, i) => (o.selected = i === 0));
}

function mapGenre(label) {
  return {
    "Ficción": "fiction",
    "Fantasía": "fantasy",
    "Historia": "history",
    "Negocios": "business",
    "Clásicos": "classics"
  }[label];
}

function matchYear(bookYear, ranges) {
  return ranges.some((r) => {
    if (r === "before-2000") return bookYear < 2000;
    if (r.includes("-")) {
      const [a, b] = r.split("-").map(Number);
      return bookYear >= a && bookYear <= b;
    }
    return Number(r) === bookYear;
  });
} */


  import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import $ from "jquery";

export default function FiltersPanel({ dtApi }) {
  const { t } = useTranslation("catalog");
  const [price, setPrice] = useState(50);

  const genreOptions = useMemo(
    () => [
      { value: "fiction", label: t("filters.genreOptions.fiction") },
      { value: "fantasy", label: t("filters.genreOptions.fantasy") },
      { value: "history", label: t("filters.genreOptions.history") },
      { value: "business", label: t("filters.genreOptions.business") },
      { value: "classics", label: t("filters.genreOptions.classics") }
    ],
    [t]
  );

  const yearOptions = useMemo(
    () => [
      { value: "2024", label: "2024" },
      { value: "2023", label: "2023" },
      { value: "2020-2022", label: "2020-2022" },
      { value: "2010-2019", label: "2010-2019" },
      { value: "2000-2009", label: "2000-2009" },
      { value: "before-2000", label: t("filters.yearOptions.before2000") }
    ],
    [t]
  );

  /* === Actualiza solo el texto visual del precio (sin tocar diseño) === */
  useEffect(() => {
    const el = document.getElementById("priceValue");
    if (el) el.textContent = formatCurrency(price);
  }, [price]);

  /* === FILTRO ACUMULATIVO (respeta búsqueda previa) === */
  useEffect(() => {
    if (!dtApi) return;

    $.fn.dataTable.ext.search = $.fn.dataTable.ext.search.filter(
      (fn) => !fn.__filtersPanel
    );

    const filterFn = function (_settings, _data, dataIndex) {
      const row = dtApi.row(dataIndex).data();
      if (!row) return true;

      // Precio
      if (Number(row.price) > Number(price)) return false;

      // Stock
      const stockYes = document.getElementById("stockYes")?.checked;
      const stockNo = document.getElementById("stockNo")?.checked;
      if (stockYes && !row.inStock) return false;
      if (stockNo && row.inStock) return false;

      // Género
      const genres = Array.from(
        document.getElementById("genres")?.selectedOptions || []
      )
        .map((o) => o.value)
        .filter((v) => v !== "all");

      if (genres.length && !genres.includes(mapGenre(row.genre))) return false;

      // Año
      const years = Array.from(
        document.getElementById("years")?.selectedOptions || []
      )
        .map((o) => o.value)
        .filter((v) => v !== "all");

      if (years.length && !matchYear(row.year, years)) return false;

      return true;
    };

    filterFn.__filtersPanel = true;
    $.fn.dataTable.ext.search.push(filterFn);
    dtApi.draw();

    return () => {
      $.fn.dataTable.ext.search = $.fn.dataTable.ext.search.filter(
        (fn) => fn !== filterFn
      );
    };
  }, [dtApi, price]);

  const applyFilters = () => dtApi?.draw();

  const clearAll = () => {
    setPrice(50);
    selectOnlyFirstOption(document.getElementById("genres"));
    selectOnlyFirstOption(document.getElementById("years"));
    document.getElementById("stockAll").checked = true;

    if (dtApi) {
      dtApi.search("");
      dtApi.columns().search("");
      dtApi.draw();
    }
  };

  return (
    <div className="panel panel--elevated filtersPanel" aria-label={t("filters.aria")}>
      <div className="panel__head filtersPanel__head">
        <i className="fa-solid fa-sliders" aria-hidden="true"></i>

        <div className="filtersPanel__headText">
          <div className="fw-bold">{t("filters.title")}</div>
          <div className="filtersPanel__sub">{t("filters.subtitle")}</div>
        </div>

        <button
          type="button"
          className="btn filtersPanel__clearBtn ms-auto"
          onClick={clearAll}
        >
          <i className="fa-solid fa-rotate-left"></i>
          <span className="d-none d-sm-inline">{t("filters.clear")}</span>
        </button>
      </div>

      <div className="panel__body filtersPanel__body">
        <div className="filtersPanel__stack">

          {/* Género */}
          <div className="filtersPanel__block">
            <label className="filtersPanel__label" htmlFor="genres">
              <i className="fa-solid fa-tags"></i> {t("filters.genres")}
            </label>
            <select
              id="genres"
              className="form-select form-select-sm filtersPanel__control"
              multiple
              size={5}
              defaultValue={["all"]}
              onChange={applyFilters}
            >
              <option value="all">{t("filters.genresAll")}</option>
              {genreOptions.map((g) => (
                <option key={g.value} value={g.value}>{g.label}</option>
              ))}
            </select>
          </div>

          {/* Año */}
          <div className="filtersPanel__block">
            <label className="filtersPanel__label" htmlFor="years">
              <i className="fa-solid fa-calendar-days"></i> {t("filters.years")}
            </label>
            <select
              id="years"
              className="form-select form-select-sm filtersPanel__control"
              multiple
              size={5}
              defaultValue={["all"]}
              onChange={applyFilters}
            >
              <option value="all">{t("filters.yearsAll")}</option>
              {yearOptions.map((y) => (
                <option key={y.value} value={y.value}>{y.label}</option>
              ))}
            </select>
          </div>

          {/* Precio (DISEÑO ORIGINAL, INTACTO) */}
          <div className="filtersPanel__block">
            <div className="d-flex align-items-center justify-content-between">
              <label className="filtersPanel__label mb-0" htmlFor="price">
                <i className="fa-solid fa-dollar-sign"></i> {t("filters.price")}
              </label>
              <span className="filtersPanel__pillValue">
                {t("filters.priceUpTo")} <strong id="priceValue">$50</strong>
              </span>
            </div>

            <div className="filtersPanel__rangeWrap">
              <span className="filtersPanel__rangeText">$0</span>
              <input
                id="price"
                className="form-range filtersPanel__rangeControl"
                type="range"
                min="0"
                max="100"
                value={price}
                onChange={(e) => {
                  setPrice(Number(e.target.value));
                  applyFilters();
                }}
              />
              <span className="filtersPanel__rangeText">$100</span>
            </div>
          </div>

          {/* Disponibilidad (DISEÑO ORIGINAL) */}
          <fieldset className="filtersPanel__block">
            <legend className="filtersPanel__label mb-2">
              <i className="fa-solid fa-circle-check"></i> {t("filters.stock.title")}
            </legend>

            <div
              className="filtersPanel__chips"
              role="radiogroup"
              onChange={applyFilters}
            >
              <div className="filtersPanel__chip">
                <input className="filtersPanel__chipInput" type="radio" name="stock" id="stockAll" defaultChecked />
                <label className="filtersPanel__chipLabel" htmlFor="stockAll">
                  <i className="fa-solid fa-layer-group"></i> {t("filters.stock.all")}
                </label>
              </div>

              <div className="filtersPanel__chip">
                <input className="filtersPanel__chipInput" type="radio" name="stock" id="stockYes" />
                <label className="filtersPanel__chipLabel" htmlFor="stockYes">
                  <i className="fa-solid fa-check"></i> {t("filters.stock.available")}
                </label>
              </div>

              <div className="filtersPanel__chip">
                <input className="filtersPanel__chipInput" type="radio" name="stock" id="stockNo" />
                <label className="filtersPanel__chipLabel" htmlFor="stockNo">
                  <i className="fa-solid fa-xmark"></i> {t("filters.stock.soldOut")}
                </label>
              </div>
            </div>
          </fieldset>

        </div>
      </div>
    </div>
  );
}

/* Helpers */
function selectOnlyFirstOption(el) {
  if (!el) return;
  Array.from(el.options).forEach((o, i) => (o.selected = i === 0));
}

function mapGenre(label) {
  return {
    "Ficción": "fiction",
    "Fantasía": "fantasy",
    "Historia": "history",
    "Negocios": "business",
    "Clásicos": "classics"
  }[label];
}

function matchYear(year, ranges) {
  return ranges.some((r) => {
    if (r === "before-2000") return year < 2000;
    if (r.includes("-")) {
      const [a, b] = r.split("-").map(Number);
      return year >= a && year <= b;
    }
    return Number(r) === year;
  });
}

function formatCurrency(v) {
  return `$${Number(v).toFixed(2)}`;
}