import { useState } from 'react';
import './css/App.css';
import './css/Main.css';
import championListData from './static/championList.json'

function App() {
  const ChosungSearch = require('hangul-chosung-search-js');
  const [championName, setChampionName] = useState('');
  const onChange = (e) =>{
    setChampionName(e.target.value);
  }  
  const championListli = championListData.map(c => {
    return(
       ChosungSearch.isSearch(championName, c.name) && 
          <li className='Champion'>
            <img src={c.imgUrl} alt={c.imgUrl} width='46px' height='46px'></img>
          </li>
    )
  }) 

  return (
    <div className="App">
      <header  className="App-header">
        <div>
         <div className='Main-content'>
            <div className='Sub-content-ChampionList'>
              <div>
                <input id="filterChampion" type="text" placeholder="챔피언 검색 (가렌, ㄱㄹ, ...)" value={championName} onChange={onChange}/>
              </div>
              <div className="ChampionList">
                {championListli}
              </div>
            </div>            
            <div className='Sub-content WinRateList'>
            </div>
          </div>  
        </div>        
      </header>
    </div>
  );
}

export default App;
