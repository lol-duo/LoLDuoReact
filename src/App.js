import { useLayoutEffect, useState } from 'react';
import React, { useCallback, useRef} from "react";
import './App.css';


async function api() {
  return await fetch("/getChampionList").then((res) => res.json());
}
const handleMouseDown = (e) =>{
  e.preventDefault();
}
let championList;
function App() {
  api().then((data) => championList = data);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState("");
  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);
  const onChange = (e) =>{
    setValue(e.target.value);
  }
  const nowRef = useRef();
  const setRf = () =>{    
    nowRef.current.focus();
  }
  
  return (
    <div className="App">
      <header  className="App-header">
          <button className='dropbtn' onClick={onFocus}>
            Dropdown
          </button>
          {isFocus && (            
            <div onMouseDown={handleMouseDown} onBlur={onBlur}>
              <input onClick={setRf} ref={nowRef} value={value} onChange={onChange}></input>         
              <ul>
                  {championList && championList.map(c => {
                      return <li><img src={c.imgUrl} onClick={() => setValue(c.name)}></img></li>
                  })}
              </ul>   
            </div>     
          )}                   
      </header>
    </div>
  );
}

export default App;
