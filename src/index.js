import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/Main.css';
import './css/App.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <header  className="App-header">
        
        <div className='Head-content'>
          <div className='Main-Logo'>LOLDUO</div>
        </div>
        <Routes>
          <Route path="/" element = {<App />}/>
          <Route path='/detail' element={<App />}/>
        </Routes>               
      </header>
      <footer className='App-header'>
      © 2022 lolduo.net isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc
      </footer>
    </BrowserRouter>
   
  </React.StrictMode>
);