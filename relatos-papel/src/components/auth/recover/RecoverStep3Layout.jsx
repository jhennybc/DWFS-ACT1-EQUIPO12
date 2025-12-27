import AuthLanguageSwitch from "../AuthLanguageSwitch";
import RecoverStep3Form from "./RecoverStep3Form";
import AuthSocialLinks from "../AuthSocialLinks";
import { useTranslation } from "react-i18next";

export default function RecoverStep3Layout() {
  const { t } = useTranslation("recover3");

  return (
    <main className="auth auth--page auth--overlay min-vh-100" role="main">
      <a className="auth__skip-link" href="#recovery-form-3">
        {t("layout.skip")}
      </a>

      <section
        className="auth__overlayShell min-vh-100 d-flex justify-content-center align-items-lg-center p-3"
        aria-label={t("layout.aria")}
      >
        <div className="auth__dialog container" role="dialog" aria-modal="true" aria-labelledby="dialogTitle">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-10 col-lg-9 mx-auto">
              <div className="auth__dialogInner">
                <AuthLanguageSwitch />

                <header className="text-center mb-3">
                  <h1 id="dialogTitle" className="auth__title mb-0">
                    {t("layout.title")}
                  </h1>
                </header>

                <div className="row justify-content-center">
                  <div className="col-12 col-md-12 col-lg-12">
                    <RecoverStep3Form />
                    <AuthSocialLinks />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}