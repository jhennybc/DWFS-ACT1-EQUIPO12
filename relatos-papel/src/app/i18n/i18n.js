import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import landingES from "./locales/es/landing.json";
import landingEN from "./locales/en/landing.json";
import catalogES from "./locales/es/catalog.json";
import catalogEN from "./locales/en/catalog.json";
import signupES from "./locales/es/signup.json";
import signupEN from "./locales/en/signup.json";
import signinES from "./locales/es/signin.json";
import signinEN from "./locales/en/signin.json";
import recover1ES from "./locales/es/recover1.json";
import recover1EN from "./locales/en/recover1.json";
import recover2ES from "./locales/es/recover2.json";
import recover2EN from "./locales/en/recover2.json";
import recover3ES from "./locales/es/recover3.json";
import recover3EN from "./locales/en/recover3.json";
import bookES from "./locales/es/book.json";
import bookEN from "./locales/en/book.json";
import cartES from "./locales/es/cart.json";
import cartEN from "./locales/en/cart.json";
import checkoutES from "./locales/es/checkout.json";
import checkoutEN from "./locales/en/checkout.json";


i18n
    .use(initReactI18next)
    .init({
        resources: {
            es: {
                landing: landingES, catalog: catalogES, signup: signupES, 
                signin: signinES, recover1: recover1ES, recover2: recover2ES,
                recover3: recover3ES, book: bookES, cart: cartES, checkout: checkoutES
            },
            en: {
                landing: landingEN, catalog: catalogEN, signup: signupEN, 
                signin: signinEN, recover1: recover1EN, recover2: recover2EN,
                recover3: recover3EN, book: bookEN, cart: cartEN, checkout: checkoutEN
            },
        },
        lng: "es",
        fallbackLng: "es",
        ns: ["landing", "signup", "signin", "recover1", "recover2", "recover3", "catalog", "book", "cart", "checkout"],
        defaultNS: "landing",
        interpolation: { escapeValue: false },
    });

export default i18n;