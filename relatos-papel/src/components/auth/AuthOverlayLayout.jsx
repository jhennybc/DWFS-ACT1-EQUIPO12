import AuthLanguageSwitch from "./AuthLanguageSwitch";
import AuthProviders from "./AuthProviders";
import SignInForm from "./SignInForm";
import AuthSocialLinks from "./AuthSocialLinks";
import { useTranslation } from "react-i18next";

export default function AuthOverlayLayout() {
  const { t } = useTranslation("signin");

  return (
    <main className="auth auth--page auth--overlay min-vh-100" role="main">
      <a className="auth__skip-link" href="#login-form">
        {t("layout.skip")}
      </a>

      <section
        className="auth__overlayShell min-vh-100 d-flex justify-content-center align-items-lg-center p-3"
        aria-label={t("layout.aria")}
      >
        <div
          className="auth__dialog container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialogTitle"
        >
          <div className="row justify-content-center">
            <div className="col-12 col-sm-9 col-lg-9 mx-auto">
              <div className="auth__dialogInner">

                <AuthLanguageSwitch />

                <header className="text-center mb-3">
                  <h1 id="dialogTitle" className="auth__title mb-0">
                    {t("layout.title")}
                  </h1>
                </header>

                <AuthProviders />

                <div className="auth__divider mb-3" aria-hidden="true">
                  {t("layout.or")}
                </div>

                <SignInForm />

                <AuthSocialLinks />

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}