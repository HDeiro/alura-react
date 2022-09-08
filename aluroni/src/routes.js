import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import BasePage from './components/base-page';
import Navigation from './components/navigation';
import About from './pages/About';
import Main from './pages/Main';
import Menu from './pages/Menu';

export function getRoutesDefinitions() {
  return [
    {
      title: 'Início',
      path: '/',
    },
    {
      title: 'Cardápio',
      path: '/menu',
    },
    {
      title: 'Sobre',
      path: '/about',
    }
  ];
}

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Navigation />
        <Routes>
          <Route to='/' element={<BasePage />}>
            <Route index element={<Main />}/>
            <Route path='menu' element={<Menu />}/>
            <Route path='about' element={<About />}/>
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
