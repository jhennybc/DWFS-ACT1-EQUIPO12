import AuthMedia from "./AuthMedia";
import AuthLanguageSwitch from "./AuthLanguageSwitch";
import AuthProviders from "./AuthProviders";
import SignUpForm from "./SignUpForm";
import { useTranslation } from "react-i18next";

export default function AuthLayout() {
  const { t } = useTranslation("signup");

  return (
    <>
      <a className="auth__skip-link" href="#registro-form">
        {t("layout.skip")}
      </a>

      <main className="auth auth--page min-vh-100" role="main">
        <div className="container-fluid h-100 px-0">
          <section
            className="auth__shell h-100"
            aria-label={t("layout.aria")}
          >
            <div className="row g-0 h-100">

              <AuthMedia variant="mobile" />
              <AuthMedia variant="desktop" />

              <section className="col-12 col-lg-6 bg-white">
                <div className="auth__panel h-100 d-flex flex-column justify-content-center">
                  <div className="auth__panelInner px-3 px-sm-4 px-md-2 py-4 py-md-5">

                    <AuthLanguageSwitch />

                    <header className="text-center mb-3">
                      <h1 className="auth__title mb-0">
                        {t("layout.title")}
                      </h1>
                    </header>

                    <AuthProviders />

                    <div
                      className="auth__divider mb-3"
                      aria-hidden="true"
                    >
                      {t("layout.or")}
                    </div>

                    <SignUpForm />

                  </div>
                </div>
              </section>

            </div>
          </section>
        </div>
      </main>
    </>
  );
}