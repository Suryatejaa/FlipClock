import './App.css';
import FlipClock from './flipClock';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';


const AppContent = () =>{
  return (
    <Routes>
      <Route path='/' element={<FlipClock />} />
    </Routes>

  );
}

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AppContent />
      </ErrorBoundary>
    </BrowserRouter>
  );
}


export default App;
