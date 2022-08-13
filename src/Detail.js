import { useCallback, useEffect, useState } from 'react';
import './css/App.css';
import './css/Main.css';
import axios from 'axios';

function Detatil() {
    const [userSelected, setUserSelected] = useState([{"id" : 0, "line" : "ALL", "now" : 0}]);
    const setChampionListResultByApi = useCallback( async () => {
        const apiData = await axios.post(
            'https://api.lolduo.net/getInfo',
            userSelected.map(s => {
            return(
                {
                "championId" : s.id,
                "position" : s.line
                }
            )
            })
            ,{headers:{ 
            'Content-type': 'application/json', 
            'Accept': 'application/json' 
                }}
        )
        setChampionListResult(apiData.data)
        console.log(apiData.data)
        }
        ,[userSelected])
    return (
        <div></div>
    );
}

export default Detatil;
