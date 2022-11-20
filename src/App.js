import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Login } from "./components/usuario/login";
import { Registro } from "./components/usuario/registro";
import { ListaExistencias } from "./components/existencias/listaExistencias";
import { ListaEntradas } from "./components/entradas-salidas/listaEntradas/listaEntradas";
import { ListaSalidas } from "./components/entradas-salidas/listaSalidas/listaSalidas";
import { NuevaEntrada } from "./components/entradas-salidas/nuevaEntrada/nuevaEntrada";
import { NuevaSalida } from "./components/entradas-salidas/nuevaSalida/nuevaSalida";
import EditarEntrada from "./components/entradas-salidas/nuevaEntrada/editar-entrada";
import EditarSalida from "./components/entradas-salidas/nuevaSalida/editar-salida";

function App() {
  let protejido;
  if (localStorage.getItem("authenticated") === "true") {
    protejido = (
      <>
        <Route
          exact
          path="/listaExistencias"
          component={(props) => <ListaExistencias {...props} />}
        />
        <Route
          exact
          path="/nuevaEntrada"
          component={(props) => <NuevaEntrada {...props} />}
        />
        <Route
          exact
          path="/listaEntradas"
          component={(props) => <ListaEntradas {...props} />}
        />
        <Route
          exact
          path="/listaSalidas"
          component={(props) => <ListaSalidas {...props} />}
        />
        <Route
          exact
          path="/nuevaSalida"
          component={(props) => <NuevaSalida {...props} />}
        />
        <Route
          exact
          path="/editarEntrada/:id"
          component={(props) => <EditarEntrada {...props} />}
        />
        <Route
          exact
          path="/editarSalida/:id"
          component={(props) => <EditarSalida {...props} />}
        />
      </>
    );
  }

  let html = (
    <Router>
      <Switch>
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
