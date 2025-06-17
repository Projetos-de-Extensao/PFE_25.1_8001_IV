import HeaderPerfil from './HeaderPerfil';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function PerfilLayout() {
  return (
    <>
      <HeaderPerfil />
      <Outlet />
      <Footer />
    </>
  );
}

export default PerfilLayout;
