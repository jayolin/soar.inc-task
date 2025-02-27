import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import MainLayout from './components/layout/MainLayout';

const App = () => {
  return (
    <AppProvider>
      <MainLayout>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Router>
      </MainLayout>
    </AppProvider>
  );
};

export default App;
