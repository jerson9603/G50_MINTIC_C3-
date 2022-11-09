import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Login } from './componentes/usuario/login'
import { Registro } from './componentes/usuario/registro'
import { Existencias } from './componentes/existencias/existencias'
import { NuevaEntrada } from './componentes/nuevaEntrada/nuevaEntrada';
import { ListaEntradas } from './componentes/listaEntradas/listaEntradas';
import { ListaSalidas } from './componentes/salidas/listaSalidas';

function App() {
  return (
    <ListaSalidas/>

  );
}

export default App;
