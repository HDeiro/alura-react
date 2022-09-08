import Header from './header';
import { Outlet } from 'react-router-dom'; 
import theme from 'styles/theme.module.scss';

export default function BasePage() {
  return (
    <>
      <Header />
      <div className={theme.container}>
        <Outlet />
      </div>
    </>
  );
}
