import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import style from './css/Main.module.css';
import './css/App.css';
import App from './App';
import Detatil from './Detail';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <title>LOLDUO</title>
      <header  className="App-header">
        
        <div className={style.MainLogoClass}>
          <a className={style.MainLogo} href="/">LOLDUO</a>
        </div>
        <Routes>
          <Route path="/" element = {<App />}/>
          <Route path="/detail" element={<Detatil />}/>
        </Routes>               
      </header>
      <footer className='App-header'>
        <div className='footer'>
           © 2022 lolduo.net isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc
       </div>
      </footer>
    </BrowserRouter>
   
  </React.StrictMode>
);