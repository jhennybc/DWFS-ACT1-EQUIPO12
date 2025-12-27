import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRecoveryStep1 } from "../../../hooks/useRecoveryStep1";

export default function RecoverStep1Form() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation("recover1");

  const {
    email,
    setEmail,
    touched,
    setTouched,
    isValid,
    statusMsg,
    setStatusMsg
  } = useRecoveryStep1();

  const showError = touched && !isValid;

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched(true);

    if (!isValid) {
      setStatusMsg(t("form.status.invalid"));
      return;
    }

    setStatusMsg(t("form.status.ok"));

    navigate(`/${lang}/auth/recover/step-2`);
  };

  return (
    <form
      id="recovery-form"
      className="auth__form"
      noValidate
      aria-label={t("form.aria")}
      onSubmit={onSubmit}
    >
      <div className="visually-hidden" id="formStatus" role="status" aria-live="polite">
        {statusMsg}
      </div>

      <div className="mb-3">
        <label className="auth__label form-label" htmlFor="email">
          {t("form.email.label")}
        </label>

        <input
          className={`form-control form-control-sm auth__input ${showError ? "is-invalid" : ""}`}
          id="email"
          name="email"
          type="email"
          inputMode="email"
          placeholder={t("form.email.placeholder")}
          autoComplete="email"
          required
          aria-describedby="emailError"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
        />

        <div id="emailError" className="invalid-feedback">
          {t("form.email.error")}
        </div>
      </div>

      <button type="submit" className="btn auth__submit w-100" id="btnSolicitar">
        {t("form.submit")}
      </button>

      <p className="auth__footerLine mt-3 mb-0">
        {t("form.footer.question")}{" "}
        <Link to={`/${lang}/auth/sign-in`} className="text-decoration-none">
          {t("form.footer.link")}
        </Link>
      </p>
    </form>
  );
}