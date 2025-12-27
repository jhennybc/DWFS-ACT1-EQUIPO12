export default function AuthMedia({ variant }) {
  const isMobile = variant === "mobile";

  return (
    <aside
      className={`col-12 ${isMobile ? "d-block d-lg-none" : "d-none d-lg-block col-lg-6"} auth__media auth__media--${variant}`}
      aria-label={`Imagen promocional (${variant})`}
    >
      <div className={isMobile ? "ratio ratio-21x9 auth__ratio" : "auth__mediaWrap h-100 position-relative"}>
        <img
          src="/assets/img/background-2.webp"
          className="auth__mediaImg w-100 h-100"
          alt="Estantería con libros (imagen decorativa)"
          loading="lazy"
          decoding="async"
          style={{ objectFit: "cover" }}
        />
        <div className="auth__logoBox">
          <div className="auth__logo" aria-hidden="true">
            <div className="auth__logoText">
              <span className="auth__logoTop">Book</span>
              <span className="auth__logoBottom">LOVERS</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}