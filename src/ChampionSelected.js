import './ChampionSelected.css'
import { useState } from 'react';
import React from 'react';




const ChampionSelected = ({show}) => {
    api().then((data) => championList = data);
    const [search, setSearch] = useState("");

    const tt = (e) => {
        console.log(e.type + ":", e.target.value);
        setSearch(e.target.value);
    };

    return (
        <div
            className={
                `${'dropdown-content'} ${show ? '' : 'hidden'}`
            }            
        >
        <input  onChange={tt} ></input>
        <ul>
            {championList && championList.map(c => {
                return <li><img src={c.imgUrl}></img></li>
            })}
        </ul>
        </div>
    );
}

export default ChampionSelected;