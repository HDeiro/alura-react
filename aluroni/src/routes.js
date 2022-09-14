import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import BasePage from './components/base-page';
import Footer from './components/footer';
import Navigation from './components/navigation';
import About from './pages/About';
import Dish from './pages/dish';
import Main from './pages/Main';
import Menu from './pages/Menu';
import NotFound from './pages/NotFound';

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
    <main className='container'>
      <Router>
        <Navigation />
        <Routes>
          <Route to='/' element={<BasePage />}>
            <Route index element={<Main />}/>
            <Route path='menu' element={<Menu />}/>
            <Route path='about' element={<About />}/>
            <Route path='dish/:id' element={<Dish />}/>
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
