import Header from './header';
import { Outlet } from 'react-router-dom'; 

export default function BasePage() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}
