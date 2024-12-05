import React, { useEffect } from 'react';
import Home from './components/Home/Home';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import PikemonsPage from './components/PikemonsPage/PikemonsPage';

const App = () => {
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.className = theme; 
  }, [theme])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pikemon/:id" element={<PikemonsPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
