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
import EditarEntrada from "./componentes/nuevaEntrada/editar-entrada";
import EditarSalida from "./componentes/nuevaSalida/editar-salida";

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
        <Route exact path="/nuevaEntrada" component={(props) => <NuevaEntrada {...props}/>} />
        <Route
          exact
          path="/listaEntradas"
          component={(props) => <ListaEntradas {...props} />}
        />
        <Route exact path="/listaSalidas" component={(props) => <ListaSalidas {...props} />} />
        <Route exact path="/nuevaSalida" component={(props) => <NuevaSalida {...props}/>} />
        <Route
          exact
          path="/editarEntrada/:id"
          component={(props) => <EditarEntrada {...props} />} />
        <Route
          exact
          path="/editarSalida/:id"
          component={(props) => <EditarSalida {...props} />} />  
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
