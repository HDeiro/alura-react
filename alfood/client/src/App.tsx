import { Routes, Route } from 'react-router-dom';
import AdminRestaurantes from './paginas/Admin/Restaurantes';
import FormRestaurante from './paginas/Admin/Restaurantes/FormRestaurante';
import BasePage from './paginas/Base/BasePage';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      
      <Route path="/admin" element={<BasePage />}>
        <Route path="restaurantes" element={<AdminRestaurantes />} />
        <Route path="restaurantes/novo" element={<FormRestaurante />} />
        <Route path="restaurantes/:id" element={<FormRestaurante />} />
      </Route>
    </Routes>
  );
}

export default App;
