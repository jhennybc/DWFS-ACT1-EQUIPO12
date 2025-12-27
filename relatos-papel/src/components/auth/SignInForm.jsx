import { useTogglePassword } from "../../hooks/useTogglePassword";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SignInForm() {
  const { lang } = useParams();
  const { t } = useTranslation("signin");
  const pass = useTogglePassword();

  return (
    <form
      id="login-form"
      className="auth__form"
      noValidate
      aria-label={t("form.aria")}
    >
      <div className="mb-3">
        <label className="auth__label form-label" htmlFor="email">
          {t("form.email.label")}
        </label>
        <input
          id="email"
          className="form-control form-control-sm auth__input"
          type="email"
          placeholder={t("form.email.placeholder")}
          autoComplete="email"
          required
        />
      </div>

      <div className="mb-3">
        <label className="auth__label form-label" htmlFor="password">
          {t("form.password.label")}
        </label>

        <div className="position-relative auth__inputGroup">
          <input
            id="password"
            className="form-control form-control-sm auth__input pe-5"
            type={pass.type}
            placeholder={t("form.password.placeholder")}
            autoComplete="current-password"
            minLength={8}
            required
          />

          <button
            type="button"
            className="auth__togglePass"
            onClick={pass.toggle}
            aria-label={
              pass.type === "text"
                ? t("form.password.hide")
                : t("form.password.show")
            }
            aria-pressed={pass.type === "text"}
          >
            <i className={`far ${pass.icon}`} />
          </button>
        </div>
      </div>

      <p className="auth__footerLine m-3">
        <Link to={`/${lang}/auth/recover`} className="text-decoration-none">
          {t("form.forgot")}
        </Link>
      </p>

      <button type="submit" className="btn auth__submit w-100">
        {t("form.submit")}
      </button>

      <p className="auth__footerLine mt-3 mb-0">
        {t("form.footer.question")}{" "}
        <Link to={`/${lang}/auth/sign-up`} className="text-decoration-none">
          {t("form.footer.link")}
        </Link>
      </p>
    </form>
  );
}