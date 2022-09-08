import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './pages/Menu';
import './index.scss';
import Main from './pages/Main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <Menu /> */}
    <Main />
  </React.StrictMode>
);
