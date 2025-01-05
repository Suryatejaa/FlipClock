import logo from './logo.svg';
import './App.css';
import FlipClock from './flipClock';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

const AppContent = () => {
  return (
    <div className="App">
      <main>
        <FlipClock />
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/clock" element={<FlipClock />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;