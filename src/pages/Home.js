import Hero from '../components/Hero';
import AboutHome from '../components/AboutHome';
import Services from '../components/Services';
import HeroImage from '../components/HeroImage';
import { useGlobalContext } from '../context';
import { useEffect } from 'react';

const Home = () => {
  const { changeTitle } = useGlobalContext();

  useEffect(() => {
    changeTitle('Hair Solon | Home');
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <HeroImage />
      <Hero />
      <AboutHome />
      <Services />
    </>
  );
};

export default Home;
