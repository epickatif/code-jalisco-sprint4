import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Diseno from './components/Diseno';
import Inicio from './pages/Inicio';
import SobreNosotros from './pages/SobreNosotros';
import Programas from './pages/Programas';
import Calendario from './pages/Calendario';
import Atletas from './pages/Atletas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Diseno />}>
          <Route index element={<Inicio />} />
          <Route path="sobre-nosotros" element={<SobreNosotros />} />
          <Route path="programas" element={<Programas />} />
          <Route path="calendario" element={<Calendario />} />
          <Route path="atletas" element={<Atletas />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

