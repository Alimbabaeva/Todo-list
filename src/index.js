import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Edit from "./Edit";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Edit />
  </StrictMode>
);
