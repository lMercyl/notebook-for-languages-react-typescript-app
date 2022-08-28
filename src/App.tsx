import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './layout';
import Notebook from './pages/Notebook';
import Speech from './pages/Speech';
import Translation from './pages/Translation';

function App() {
  return (
    <Routes>
      <Route path="/notebook-for-languages-react-typescript-app" element={<Layout />}>
        <Route index element={<Notebook />} />
        <Route
          path="/notebook-for-languages-react-typescript-app/translation"
          element={<Translation />}
        />
        <Route
          path="/notebook-for-languages-react-typescript-app/speech/:id"
          element={<Speech />}
        />
      </Route>
    </Routes>
  );
}

export default App;
