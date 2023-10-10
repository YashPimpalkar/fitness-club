import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import { Suspense } from 'react';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">
      <Outlet />
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Suspense fallback={<div>Loading...</div>}>
        </Suspense>
        <Pricing />
        <Footer />
      </Box >
    </div>
  );
}

export default App;
