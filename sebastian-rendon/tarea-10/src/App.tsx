import './App.css';
import { Route, Routes as Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Switch>
      <Route path="" element={<MainPage />} />
      <Route path="detail/:itemId" element={<DetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Switch>
  );
};

export default App;
