import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRecoveryStep2 } from "../../../hooks/useRecoveryStep2";

export default function RecoverStep2Form() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation("recover2");

  const {
    code,
    setCode,
    touched,
    setTouched,
    isValid,
    statusMsg,
    setStatusMsg
  } = useRecoveryStep2();

  const showError = touched && !isValid;

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched(true);

    if (!isValid) {
      setStatusMsg(t("form.status.invalid"));
      return;
    }

    setStatusMsg(t("form.status.ok"));

    navigate(`/${lang}/auth/recover/step-3`);
  };

  return (
    <form
      id="recovery-form"
      className="auth__form"
      noValidate
      aria-label={t("form.aria")}
      onSubmit={onSubmit}
    >
      <div className="visually-hidden" role="status" aria-live="polite">
        {statusMsg}
      </div>

      <div className="mb-3">
        <label className="auth__label form-label" htmlFor="code">
          {t("form.code.label")}
        </label>

        <input
          className={`form-control form-control-sm auth__input auth__input--code text-center ${
            showError ? "is-invalid" : ""
          }`}
          id="code"
          name="code"
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={6}
          pattern="[0-9]{6}"
          placeholder={t("form.code.placeholder")}
          required
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
          onBlur={() => setTouched(true)}
        />

        <div className="invalid-feedback">
          {t("form.code.error")}
        </div>
      </div>

      <button type="submit" className="btn auth__submit w-100">
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