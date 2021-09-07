import LoadingPage from './pages/LoadingPage';
import MainPage from './pages/MainPage.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return loading ? <LoadingPage /> : <MainPage />;
}

export default App;
