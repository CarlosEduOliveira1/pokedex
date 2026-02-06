import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ApiPokemon from './components/ApiPokemon.jsx';
import Header from './components/Header/Header.jsx';
//import dotenv from 'dotenv';

//dotenv.config();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    {/* <App /> */}
    {/* <ApiPokemon /> */}
  </StrictMode>,
)
