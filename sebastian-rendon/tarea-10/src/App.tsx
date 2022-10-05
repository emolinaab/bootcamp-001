import './App.css';
import { Route, Routes as Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Switch>
      <Route path="/" element={<MainPage />} />
    </Switch>
  );
};

export default App;
