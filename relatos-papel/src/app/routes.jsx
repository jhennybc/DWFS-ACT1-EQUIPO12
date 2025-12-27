import { Navigate } from "react-router-dom";
import { lazy } from "react";
import LangLayout from "../components/layout/LangLayout";

const LandingPage = lazy(() => import("../pages/Landing/LandingPage"));
const SignUpPage = lazy(() => import("../pages/Auth/SignUp/SignUpPage"));
const SignInPage = lazy(() => import("../pages/Auth/SignIn/SignInPage"));
const RecoverStep1Page = lazy(() => import("../pages/Auth/Recover/RecoverStep1Page"));
const RecoverStep2Page = lazy(() => import("../pages/Auth/Recover/RecoverStep2Page"));
const RecoverStep3Page = lazy(() => import("../pages/Auth/Recover/RecoverStep3Page"));
const CatalogPage = lazy(() => import("../pages/Catalog/CatalogPage"));
const BookPage = lazy(() => import("../pages/Book/BookPage"));
const CartPage = lazy(() => import("../pages/Cart/CartPage"));
const CheckoutPage = lazy(() => import("../pages/Checkout/CheckoutPage"));

export const routes = [
  { path: "/", element: <Navigate to="/es" replace /> },

  {
    path: "/:lang",
    element: <LangLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "auth/sign-up", element: <SignUpPage /> },
      { path: "auth/sign-in", element: <SignInPage /> },
      { path: "auth/recover", element: <RecoverStep1Page /> },
      { path: "auth/recover/step-2", element: <RecoverStep2Page /> },
      { path: "auth/recover/step-3", element: <RecoverStep3Page /> },
      { path: "catalog", element: <CatalogPage /> },
      { path: "catalog/book/:slug", element: <BookPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
    ]
  }
];
