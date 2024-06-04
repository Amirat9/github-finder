import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Navbar from './components/layouts/Navbar.jsx';
import Footer from './components/layouts/Footer.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { GithubProvider } from './context/github/GithubContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GithubProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />
          <App />
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  </React.StrictMode>
);
