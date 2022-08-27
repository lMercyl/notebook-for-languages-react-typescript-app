import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './layout';
import Notebook from './pages/Notebook';
import Translation from './pages/Translation';

function App() {
  return (
    <Routes>
      <Route path="/notebook-for-languages-react-typescript" element={<Layout />}>
        <Route index element={<Notebook />} />
        <Route
          path="/notebook-for-languages-react-typescript/translation"
          element={<Translation />}
        />
      </Route>
    </Routes>
  );
}

export default App;
