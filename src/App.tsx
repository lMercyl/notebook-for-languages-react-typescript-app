import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './layout';
import Notebook from './pages/Notebook';
import Translation from './pages/Translation';
import Speed from './pages/Speed';

const App = () => {
  return (
    <Routes>
      <Route path="/notebook-for-languages-react-typescript-app" element={<Layout />}>
        <Route index element={<Notebook />} />
        <Route
          path="/notebook-for-languages-react-typescript-app/translation"
          element={<Translation />}
        />
        <Route
          path="/notebook-for-languages-react-typescript-app/speed/:size"
          element={<Speed />}
        />
      </Route>
    </Routes>
  );
};

export default App;
