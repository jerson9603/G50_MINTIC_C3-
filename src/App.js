import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Login } from "./componentes/usuario/login";
import { Registro } from "./componentes/usuario/registro";
import { ListaExistencias } from "./componentes/existencias/listaExistencias";
import { NuevaEntrada } from "./componentes/nuevaEntrada/nuevaEntrada";
import { ListaEntradas } from "./componentes/listaEntradas/listaEntradas";
import { ListaSalidas } from "./componentes/salidas/listaSalidas";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={(props) => <Login {...props} />} />
        <Route
          exact
          path="/registrarse"
          component={(props) => <Registro {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
