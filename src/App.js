import React from "react";
import GaleriaEspacios from "./components/galeriaEspacios";
import { FormattedMessage } from "react-intl";

function App() {
  return (
    <div className="container mt-4">
      <h1>
        <FormattedMessage id="MyEspaces" />
      </h1>
      <GaleriaEspacios />
    </div>
  );
}

export default App;
