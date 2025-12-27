import { useId, useEffect, useState } from "react";

export default function ReviewsSection({ lang, book }) {
  const formId = useId();

  const [name, setName] = useState("");
  const [rating, setRating] = useState("5");
  const [text, setText] = useState("");

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setLoading(true);

        const res = await fetch("/data/reviews.json", { cache: "no-store" });
        const data = await res.json();

        if (!Array.isArray(data)) {
          if (alive) setReviews([]);
          return;
        }

        if (alive) {
          setReviews(data);
        }
      } catch (e) {
        console.error("Error cargando reviews.json:", e);
        if (alive) setReviews([]);
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [book.id]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !text.trim() || !rating) return;

    console.log("Nueva reseña:", {
      bookId: book.id,
      name: name.trim(),
      rating: Number(rating),
      text: text.trim()
    });

    setName("");
    setRating("5");
    setText("");
  };

  return (
    <div
      className="panel panel--elevated mt-3"
      aria-label={lang === "en" ? "Book reviews" : "Reseñas del libro"}
    >
      <div className="panel__head reviews__head">
        <div className="reviews__headLeft">
          <span className="reviews__icon" aria-hidden="true">
            <i className="fa-solid fa-comments"></i>
          </span>
          <div>
            <div className="fw-bold">{lang === "en" ? "Reviews" : "Reseñas"}</div>
            <div className="reviews__sub">
              {lang === "en"
                ? `Readers opinions • Average ${book.rating}`
                : `Opiniones de lectores • Promedio ${book.rating}`}
            </div>
          </div>
        </div>
        <span className="reviews__pill">
          <i className="fa-solid fa-star" aria-hidden="true"></i> {book.rating}
        </span>
      </div>

      <div className="panel__body">
        <div
          className="reviews__list"
          aria-label={lang === "en" ? "Reviews list" : "Listado de reseñas"}
        >
          {loading ? (
            <p className="text-muted mb-0">
              {lang === "en" ? "Loading reviews…" : "Cargando reseñas…"}
            </p>
          ) : reviews.length === 0 ? (
            <p className="text-muted mb-0">
              {lang === "en"
                ? "No reviews yet. Be the first to write one."
                : "Aún no hay reseñas. Sé el primero en escribir una."}
            </p>
          ) : (
            reviews.map((r) => (
              <article key={r.id} className="review">
                <div className="review__top">
                  <div className="review__who">
                    <div className="review__avatar" aria-hidden="true">
                      {r.initial}
                    </div>
                    <div>
                      <div className="review__name">{r.name}</div>
                      <div className="review__meta">
                        {(r.when && r.when[lang]) || (lang === "en" ? r.whenEn : r.whenEs)}
                      </div>
                    </div>
                  </div>
                  <div
                    className="review__rating"
                    aria-label={
                      lang === "en"
                        ? `Rating ${r.rating} of 5`
                        : `Calificación ${r.rating} de 5`
                    }
                  >
                    <i className="fa-solid fa-star" aria-hidden="true"></i> {r.rating}
                  </div>
                </div>
                <p className="review__text">
                  {(r.text && r.text[lang]) || (lang === "en" ? r.textEn : r.textEs)}
                </p>
              </article>
            ))
          )}
        </div>

        <hr className="reviews__divider" />

        <form
          className="reviews__form"
          action="#"
          method="post"
          noValidate
          aria-label={lang === "en" ? "Add review" : "Agregar reseña"}
          onSubmit={onSubmit}
        >
          <h3 className="reviews__formTitle">
            {lang === "en" ? "Leave your review" : "Deja tu reseña"}
          </h3>

          <div className="row g-2">
            <div className="col-12 col-md-6">
              <label className="form-label reviews__label" htmlFor={`${formId}-reviewName`}>
                {lang === "en" ? "Name" : "Nombre"}
              </label>
              <input
                id={`${formId}-reviewName`}
                className="form-control form-control-sm reviews__control"
                type="text"
                placeholder={lang === "en" ? "Your name" : "Tu nombre"}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label reviews__label">
                {lang === "en" ? "Rating" : "Calificación"}
              </label>

              <div
                className="ratingStars"
                role="radiogroup"
                aria-label={
                  lang === "en"
                    ? "Rating from 1 to 5 stars"
                    : "Calificación de 1 a 5 estrellas"
                }
              >
                <input
                  type="radio"
                  id={`${formId}-star5`}
                  name={`${formId}-reviewRating`}
                  value="5"
                  required
                  checked={rating === "5"}
                  onChange={(e) => setRating(e.target.value)}
                />
                <label htmlFor={`${formId}-star5`} title={lang === "en" ? "5 stars" : "5 estrellas"}>
                  <i className="fa-solid fa-star"></i>
                </label>

                <input
                  type="radio"
                  id={`${formId}-star4`}
                  name={`${formId}-reviewRating`}
                  value="4"
                  checked={rating === "4"}
                  onChange={(e) => setRating(e.target.value)}
                />
                <label htmlFor={`${formId}-star4`} title={lang === "en" ? "4 stars" : "4 estrellas"}>
                  <i className="fa-solid fa-star"></i>
                </label>

                <input
                  type="radio"
                  id={`${formId}-star3`}
                  name={`${formId}-reviewRating`}
                  value="3"
                  checked={rating === "3"}
                  onChange={(e) => setRating(e.target.value)}
                />
                <label htmlFor={`${formId}-star3`} title={lang === "en" ? "3 stars" : "3 estrellas"}>
                  <i className="fa-solid fa-star"></i>
                </label>

                <input
                  type="radio"
                  id={`${formId}-star2`}
                  name={`${formId}-reviewRating`}
                  value="2"
                  checked={rating === "2"}
                  onChange={(e) => setRating(e.target.value)}
                />
                <label htmlFor={`${formId}-star2`} title={lang === "en" ? "2 stars" : "2 estrellas"}>
                  <i className="fa-solid fa-star"></i>
                </label>

                <input
                  type="radio"
                  id={`${formId}-star1`}
                  name={`${formId}-reviewRating`}
                  value="1"
                  checked={rating === "1"}
                  onChange={(e) => setRating(e.target.value)}
                />
                <label htmlFor={`${formId}-star1`} title={lang === "en" ? "1 star" : "1 estrella"}>
                  <i className="fa-solid fa-star"></i>
                </label>
              </div>
            </div>

            <div className="col-12">
              <label className="form-label reviews__label" htmlFor={`${formId}-reviewText`}>
                {lang === "en" ? "Comment" : "Comentario"}
              </label>
              <textarea
                id={`${formId}-reviewText`}
                className="form-control reviews__control"
                rows={3}
                placeholder={lang === "en" ? "Write your opinion…" : "Escribe tu opinión…"}
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            <div className="col-12 d-flex justify-content-end">
              <button className="btn reviews__btn" type="submit" disabled={!name.trim() || !text.trim()}>
                <i className="fa-regular fa-paper-plane" aria-hidden="true"></i>
                {lang === "en" ? "Publish review" : "Publicar reseña"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}