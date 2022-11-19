import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Login } from "./componentes/usuario/login";
import { Registro } from "./componentes/usuario/registro";
import { ListaExistencias } from "./componentes/existencias/listaExistencias";
import { NuevaEntrada } from "./componentes/nuevaEntrada/nuevaEntrada";
import { ListaEntradas } from "./componentes/listaEntradas/listaEntradas";
import { ListaSalidas } from "./componentes/listaSalidas/listaSalidas";
import { NuevaSalida } from "./componentes/nuevaSalida/nuevaSalida";

function App() {
  let protejido;
  if (localStorage.getItem("authenticated") === "true") {
    protejido = (
      <>
        <Route
          exact
          path="/listaExistencias"
          component={() => <ListaExistencias />}
        />
        <Route exact path="/nuevaEntrada" component={() => <NuevaEntrada />} />
        <Route
          exact
          path="/listaEntradas"
          component={() => <ListaEntradas />}
        />
        <Route exact path="/listaSalidas" component={() => <ListaSalidas />} />
        <Route exact path="/nuevaSalida" component={() => <NuevaSalida />} />
      </>
    );
  }

  let html = (
    <Router>
      <Switch>
        {/* <Route exact path="*" component={(props) => <Login {...props} />} /> */}
        <Route exact path="/" component={(props) => <Login {...props} />} />
        <Route
          exact
          path="/registrarse"
          component={(props) => <Registro {...props} />}
        />
        {protejido}
        <Redirect to="/" />
      </Switch>
    </Router>
  );

  return html;
}

export default App;
