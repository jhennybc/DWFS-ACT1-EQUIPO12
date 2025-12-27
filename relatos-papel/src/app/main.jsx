import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "../app/App";
import "../app/i18n/i18n";

/*import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";

import "../assets/css/styles-landing.scoped.css";
import "../assets/css/styles-auth.scoped.css";
import "../assets/css/styles-catalog-books.scoped.css";
import "../assets/css/styles-info-book.scoped.css";*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);