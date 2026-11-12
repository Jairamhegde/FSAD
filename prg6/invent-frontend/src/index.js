import React from "react";
import ReactDOM from "react-dom/client";
import { Display_Inventory } from "./to_inventory";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <Display_Inventory />
  </React.StrictMode>
);