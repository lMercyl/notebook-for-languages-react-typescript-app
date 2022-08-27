import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './layout';
import Notebook from './pages/Notebook';
import Translation from './pages/Translation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Notebook />} />
        <Route path="translation" element={<Translation />} />
      </Route>
    </Routes>
  );
}

export default App;
