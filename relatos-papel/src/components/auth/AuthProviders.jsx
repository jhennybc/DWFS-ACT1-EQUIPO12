export default function AuthProviders() {
  return (
    <div
      className="auth__providers mb-3"
      role="group"
      aria-label="Registro con proveedores"
    >
      <div className="row g-2">
        <div className="col-12 col-md-4">
          <button
            type="button"
            className="btn auth__providerBtn w-100"
            aria-label="Crear cuenta con Google"
          >
            <img
              src="/assets/img/icons-google.png"
              alt=""
              width="20"
              height="20"
              className="auth__providerImg"
              loading="lazy"
              decoding="async"
            />
            <span>Google</span>
          </button>
        </div>

        <div className="col-12 col-md-4">
          <button
            type="button"
            className="btn auth__providerBtn w-100"
            aria-label="Crear cuenta con Facebook"
          >
            <img
              src="/assets/img/icons-facebook.png"
              alt=""
              width="20"
              height="20"
              className="auth__providerImg"
              loading="lazy"
              decoding="async"
            />
            <span>Facebook</span>
          </button>
        </div>

        <div className="col-12 col-md-4">
          <button
            type="button"
            className="btn auth__providerBtn w-100"
            aria-label="Crear cuenta con Apple"
          >
            <img
              src="/assets/img/icons-apple.png"
              alt=""
              width="20"
              height="20"
              className="auth__providerImg"
              loading="lazy"
              decoding="async"
            />
            <span>Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
}