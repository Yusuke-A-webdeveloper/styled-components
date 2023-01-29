import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Location from './components/Location';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Location />
      <Footer />
    </>
  );
};

export default SharedLayout;
