import { useState } from 'react';
import './css/App.css';
import './css/Main.css';
import championListData from './static/championList.json'
import lineDate from './static/line.json'
 




function App() {
  const [userSelected, setUserSelected] = useState([{"id" : 0, "line" : "ALL", "now" : 0}]);
  const [championName, setChampionName] = useState('');
  const [selected , setSelected] = useState(0);
  const ChosungSearch = require('hangul-chosung-search-js');

  const onChangeUserSelectedLine = (e) => {
    userSelected[selected].line = e;
    setUserSelected(Object.assign([{}], userSelected));
  }

  const lineListImg =
  <div>
    <img src={lineDate.ALL} alt={lineDate.ALL} onClick={() => onChangeUserSelectedLine("ALL")}></img>
    <img src={lineDate.TOP} alt={lineDate.TOP} onClick={() => onChangeUserSelectedLine("TOP")}></img>
    <img src={lineDate.JUNGLE} alt={lineDate.JUNGLE} onClick={() => onChangeUserSelectedLine("JUNGLE")}></img>
    <img src={lineDate.MIDDLE} alt={lineDate.MIDDLE} onClick={() => onChangeUserSelectedLine("MIDDLE")}></img>
    <img src={lineDate.BOTTOM} alt={lineDate.BOTTOM} onClick={() => onChangeUserSelectedLine("BOTTOM")}></img>
    <img src={lineDate.UTILITY} alt={lineDate.UTILITY} onClick={() => onChangeUserSelectedLine("UTILITY")}></img>
  </div>
  

  const newUserSelected = (e) => {
    while(e > userSelected.length)
      userSelected.push({"id" : 0, "line" : "ALL", "now" : userSelected.length});
    userSelected.length = e;
    setUserSelected(Object.assign([{}], userSelected));
    setSelected(0);
  }

  //유저가 클릭한 곳에 champion id 넣기.
  const onChangeUserSelected = (e) => {
    userSelected[selected].id = e;
    setUserSelected(Object.assign([{}], userSelected));
  }

  const onChangeName = (e) =>{
    setChampionName(e.target.value);
  }

  const championListli = championListData.map(c => {
    return(
      ChosungSearch.isSearch(championName, c.name) && 
          <li className='Champion'>
            <img src={c.imgUrl} alt={c.imgUrl} width='46px' height='46px' onClick={() => onChangeUserSelected(c.id)}></img>
          </li>
    )
  })

  const userSelectedSpace = userSelected.map(s => {
    return(
      <li className='Champion SelectedList' onClick={() => setSelected(s.now)}>
          <img src={championListData.find(champion => champion.id === s.id).imgUrl}  width='46px' height='46px'  alt={championListData.find(champion => champion.id === s.id).imgUrl}></img>
          <img width='46px' height='46px' src={lineDate[s.line]} alt={lineDate[s.line]}></img>
      </li>
    )
  })
  
  
  
  return (
    <div className="App">
      <header  className="App-header">
        <div>
         <div className='Main-content'>
            <div className='Sub-content-ChampionList'>
            <nav>
              <button type="button" onClick={() => newUserSelected(1)}>솔로</button>
              <button type="button" onClick={() => newUserSelected(2)}>듀오</button>
              <button type="button" onClick={() => newUserSelected(3)}>트리오</button>
              <button type="button" onClick={() => newUserSelected(5)}>전체</button>
            </nav>
              <div className="ChampionList">
                {userSelectedSpace}           
              </div>
              <div>
                <input id="filterChampion" type="text" placeholder="챔피언 검색 (가렌, ㄱㄹ, ...)" value={championName} onChange={onChangeName}/>
              </div>
                {lineListImg}
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
