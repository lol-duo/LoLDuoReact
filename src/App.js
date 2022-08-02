import './css/App.css';
import './css/Main.css';
import championListData from './static/championList.json'

function App() {
  const championListli = championListData.map(c => {
    return (
      <li className='Champion'>
        <img src={c.imgUrl} alt={c.imgUrl} width='46px' height='46px'></img>
      </li>
    );
  })


  return (
    <div className="App">
      <header  className="App-header">
         <div className='Main-content'>
            <div className='Sub-content ChampionList'>
              {championListli}
            </div>
          </div>          
      </header>
    </div>
  );
}

export default App;
