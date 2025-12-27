import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTogglePassword } from "../../../hooks/useTogglePassword";
import { useRecoveryStep3 } from "../../../hooks/useRecoveryStep3";

export default function RecoverStep3Form() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation("recover3");

  const np = useTogglePassword();
  const cp = useTogglePassword();

  const {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    touched,
    setTouched,
    minLenOk,
    matchOk,
    canSubmit,
    statusMsg,
    setStatusMsg
  } = useRecoveryStep3();

  const showNewPassError = touched.newPassword && !minLenOk;
  const showConfirmError = touched.confirmPassword && !matchOk;

  const onSubmit = (e) => {
    e.preventDefault();

    setTouched({ newPassword: true, confirmPassword: true });

    if (!canSubmit) {
      setStatusMsg(t("form.status.invalid"));
      return;
    }

    setStatusMsg(t("form.status.ok"));

    navigate(`/${lang}/auth/sign-in`, { replace: true });
  };

  return (
    <form
      id="recovery-form-3"
      className="auth__form"
      noValidate
      aria-label={t("form.aria")}
      onSubmit={onSubmit}
    >
      <div className="visually-hidden" id="formStatus" role="status" aria-live="polite">
        {statusMsg}
      </div>

      <div className="mb-3">
        <label className="auth__label form-label" htmlFor="newPassword">
          {t("form.newPassword.label")}
        </label>

        <div className="position-relative auth__inputGroup">
          <input
            className={`form-control form-control-sm auth__input pe-5 ${showNewPassError ? "is-invalid" : ""}`}
            id="newPassword"
            name="newPassword"
            type={np.type}
            autoComplete="new-password"
            placeholder={t("form.newPassword.placeholder")}
            minLength={8}
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            onBlur={() => setTouched((p) => ({ ...p, newPassword: true }))}
            aria-describedby="newPasswordError"
          />

          <button
            type="button"
            className="auth__togglePass"
            onClick={np.toggle}
            aria-label={np.type === "text" ? t("form.hide") : t("form.show")}
            aria-pressed={np.type === "text"}
          >
            <i className={`far ${np.icon}`} aria-hidden="true"></i>
          </button>

          <div id="newPasswordError" className="invalid-feedback">
            {t("form.newPassword.error")}
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label className="auth__label form-label" htmlFor="confirmPassword">
          {t("form.confirmPassword.label")}
        </label>

        <div className="position-relative auth__inputGroup">
          <input
            className={`form-control form-control-sm auth__input pe-5 ${showConfirmError ? "is-invalid" : ""}`}
            id="confirmPassword"
            name="confirmPassword"
            type={cp.type}
            autoComplete="new-password"
            placeholder={t("form.confirmPassword.placeholder")}
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={() => setTouched((p) => ({ ...p, confirmPassword: true }))}
            aria-describedby="confirmPasswordError"
          />

          <button
            type="button"
            className="auth__togglePass"
            onClick={cp.toggle}
            aria-label={cp.type === "text" ? t("form.hide") : t("form.show")}
            aria-pressed={cp.type === "text"}
          >
            <i className={`far ${cp.icon}`} aria-hidden="true"></i>
          </button>

          <div id="confirmPasswordError" className="invalid-feedback">
            {t("form.confirmPassword.error")}
          </div>
        </div>
      </div>

      <button type="submit" className="btn auth__submit w-100" id="btnActualizar">
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