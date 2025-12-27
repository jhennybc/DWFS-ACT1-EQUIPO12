import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Head from "../../components/utils/HeadLanding";
import BookHeader from "../../components/book/BookHeader";
import BookDetail from "../../components/book/BookDetail";
import ReviewsSection from "../../components/book/ReviewsSection";
import { useBookBySlug } from "../../hooks/useBookBySlug";
import { APP_ORIGIN } from "../../constants/env";
import "../../assets/css/styles-info-book.css";

export default function BookPage() {
  const { lang, slug } = useParams();
  const { book, loading } = useBookBySlug(slug);
  const { t } = useTranslation("book");

  const canonical = `${APP_ORIGIN}/${lang}/catalog/book/${slug}`;

  const seoTitle = book
    ? `${book.title} | ${t("seo.titleSuffix")}`
    : t("seo.title");

  const seoDescription = book
    ? (lang === "en" ? book.summaryEn : book.summaryEs) ||
      book.desc ||
      t("seo.description")
    : t("seo.description");

  const seoKeywords = t("seo.keywords");

  if (loading) {
    return (
      <div className="bookPage bookPage--full bg-white">
        <div className="container-fluid py-4">
          <div className="panel panel--elevated">
            <div className="panel__body">
              {t("ui.loading")}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="bookPage bookPage--full bg-white">
        <Head
          lang={lang}
          title={seoTitle}
          description={seoDescription}
          keywords={seoKeywords}
          canonical={canonical}
          ogImage="/assets/img/og-catalog.jpg"
          siteName="Librería dígital"
          locale={lang === "es" ? "es_EC" : "en_US"}
        />

        <BookHeader lang={lang} slug={slug} />

        <main className="bookPage__main">
          <div className="container-fluid px-0 px-lg-3">
            <div className="panel panel--elevated">
              <div className="panel__body">
                {t("ui.notFound")}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bookPage bookPage--full bg-white">
      <Head
        lang={lang}
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonical={canonical}
        ogImage="/assets/img/og-catalog.jpg"
        siteName="Librería dígital"
        locale={lang === "es" ? "es_EC" : "en_US"}
      />

      <BookHeader lang={lang} slug={slug} />

      <main className="bookPage__main">
        <div className="container-fluid px-0 px-lg-3">
          <div className="row g-3 align-items-start">
            <section
              className="col-12 col-lg-12"
              aria-label={t("ui.bookInfoAria")}
            >
              <BookDetail lang={lang} book={book} />
              <div className="mt-3" />
              <ReviewsSection lang={lang} book={book} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}