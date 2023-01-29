import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import SingleService from './pages/SingleService';
import SharedLayout from './SharedLayout';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="service/:serviceId" element={<SingleService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
