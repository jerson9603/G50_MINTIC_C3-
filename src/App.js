import "./styles/App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { SignIn } from "./components/user/sign-in";
import { SignUp } from "./components/user/sign-up";
import { HomePage } from "./pages/home-page";
import { ListaEntradas } from "./pages/entradas/listaEntradas";
import { NuevaEntrada } from "./pages/entradas/nuevaEntrada";
import { EditarEntrada } from "./pages/entradas/editarEntrada";
import { ListaSalidas } from "./pages/salidas/listaSalidas";
import { NuevaSalida } from "./pages/salidas/nuevaSalida";
import { EditarSalida } from "./pages/salidas/editarSalida";

function App() {
  let protejido;
  if (localStorage.getItem("authenticated") === "true") {
    protejido = (
      <>
        <Route
          exact
          path="/home"
          component={(props) => <HomePage {...props} />}
        />
        <Route
          path="/nuevaEntrada"
          component={(props) => <NuevaEntrada {...props} />}
        />
        <Route
          path="/listaEntradas"
          component={(props) => <ListaEntradas {...props} />}
        />
        <Route
          path="/listaSalidas"
          component={(props) => <ListaSalidas {...props} />}
        />
        <Route
          path="/nuevaSalida"
          component={(props) => <NuevaSalida {...props} />}
        />
        <Route
          path="/editarEntrada/:id"
          component={(props) => <EditarEntrada {...props} />}
        />
        <Route
          path="/editarSalida/:id"
          component={(props) => <EditarSalida {...props} />}
        />
      </>
    );
  }

  let html = (
    <Router>
      <Switch>
        <Route exact path="/" component={(props) => <SignIn {...props} />} />
        <Route
          exact
          path="/registrarse"
          component={(props) => <SignUp {...props} />}
        />
        {protejido}
        <Redirect to="/" />
      </Switch>
    </Router>
  );

  return html;
}

export default App;
