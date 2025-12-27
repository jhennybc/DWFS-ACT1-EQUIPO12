import { Outlet, useParams } from "react-router-dom";
import { useRouteLanguage } from "../../hooks/useRouteLanguage";

export default function LangLayout() {
  const { lang } = useParams();

  useRouteLanguage(lang);

  return <Outlet />;
}