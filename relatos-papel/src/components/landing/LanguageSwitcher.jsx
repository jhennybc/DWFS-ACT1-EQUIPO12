import { useNavigate, useParams } from "react-router-dom";

export default function LanguageSwitcher() {
  const { lang } = useParams();
  const navigate = useNavigate();

  const go = (next) => {
    if (next === lang) return;
    navigate(`/${next}`);
  };

  return (
    <>
      <button
        type="button"
        className="landing__navLink landing__navLink--lang"
        onClick={() => go("es")}
        aria-label="Cambiar idioma a Español"
      >
        <img src="/assets/img/es.webp" alt="Español" width="20" height="14" loading="lazy" />
        <span>ESP</span>
      </button>

      <button
        type="button"
        className="landing__navLink landing__navLink--lang"
        onClick={() => go("en")}
        aria-label="Switch language to English"
      >
        <img src="/assets/img/gb.webp" alt="English" width="20" height="14" loading="lazy" />
        <span>ENG</span>
      </button>
    </>
  );
}