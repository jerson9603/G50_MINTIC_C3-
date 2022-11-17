import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Login } from './componentes/usuario/login'
import { Registro } from './componentes/usuario/registro'
import { ListaExistencias } from './componentes/existencias/listaExistencias'
import { NuevaEntrada } from './componentes/nuevaEntrada/nuevaEntrada';
import { ListaEntradas } from './componentes/listaEntradas/listaEntradas';
import { ListaSalidas } from './componentes/salidas/listaSalidas';

function App() {
  return (
    <Registro/>

  );
}

export default App;
