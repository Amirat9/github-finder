import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
const App = () => {
  return (
    <main className='container mx-auto px-3 pb-12'>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/*'
          element={<NotFound />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/notfound'
          element={<NotFound />}
        />
      </Routes>
    </main>
  );
};

export default App;
