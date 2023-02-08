import logo from './logo.svg';
import './App.css';
import Resultado from './componentes/Resultado';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  const [recurso, setRecurso] = useState("people");
  const [id, setId] = useState("");
  const [resultado, setResultado] = useState({});
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Formulario recurso={recurso} setRecurso={setRecurso} id={id} setId={setId} resultado={resultado} setResultado={setResultado} />
            <Resultado resultado={resultado} setResultado={setResultado} /></>}></Route>
          <Route path='/:id' element={<Resultado resultado={resultado} setResultado={setResultado}/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
