export default function AuthSocialLinks() {
  return (
    <nav className="auth__social mt-2" aria-label="Redes sociales">
      <a className="auth__socialLink" href="#" aria-label="Facebook">
        <i className="fab fa-facebook-f" aria-hidden="true"></i>
      </a>
      <a className="auth__socialLink" href="#" aria-label="X (Twitter)">
        <i className="fab fa-x-twitter" aria-hidden="true"></i>
      </a>
      <a className="auth__socialLink" href="#" aria-label="Instagram">
        <i className="fab fa-instagram" aria-hidden="true"></i>
      </a>
      <a className="auth__socialLink" href="#" aria-label="LinkedIn">
        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
      </a>
    </nav>
  );
}
