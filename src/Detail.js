import { useCallback, useEffect, useState } from 'react';
import style from './css/Detail.module.css'
import axios from 'axios';
import {useLocation} from 'react-router-dom';


function Detatil() {

    const {state} = useLocation();
    const [championListResult , setChampionListResult] = useState([
        {
          "championInfoList": [
            {
              "championId" : 2,
              "championName": "올라프",
              "imgUrl": "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/champion/Olaf.png",
              "position": "TOP",
              "positionUrl": "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/line/TOP.png"
            }
          ]
        }
      ]);
    const [championDetailListResult , setChampionDetailListResult] = useState([
        {
            "perkInfo": [
              {
                "perkList": [
                  {
                    "perkUrlList": [
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/7200_Domination.png",
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/Predator/Predator.png",
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/7200_Domination.png"
                    ]
                  }
                ],
                "allCount": "1 게임",
                "winRate": "33.33%"
              },
              {
                "perkList": [
                  {
                    "perkUrlList": [
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/X.png",
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/X.png",
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/7200_Domination.png"
                    ]
                  }
                ],
                "allCount": "0 게임",
                "winRate": "0.00%"
              }
            ],
            "spellInfo": [
              {
                "spellList": [
                  {
                    "spellUrlList": [
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/spell/SummonerFlash.png",
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/spell/SummonerDot.png"
                    ]
                  }
                ],
                "allCount": "1 게임",
                "winRate": "33.33%"
              },
              {
                "spellList": [
                  {
                    "spellUrlList": [
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/X.png",
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/X.png"
                    ]
                  }
                ],
                "allCount": "0 게임",
                "winRate": "0.00%"
              }
            ],
            "itemInfo": [
              {
                "itemList": [
                  {
                    "itemUrlList": [
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/item/X.png",
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/item/next.png",
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/item/X.png",
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/item/next.png",
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/item/X.png"
                    ]
                  }
                ],
                "allCount": "1 게임",
                "winRate": "33.33%"
              },
              {
                "itemList": [
                  {
                    "itemUrlList": [
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/item/3157.png",
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/item/next.png",
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/item/X.png",
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/item/next.png",
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/item/X.png",
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/item/next.png",
                      "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/item/X.png"
                    ]
                  }
                ],
                "allCount": "0 게임",
                "winRate": "0.00%"
              }
            ]
          }
      ]);
   
    const setChampionListResultByApi = useCallback( async () => {        
        setChampionListResult(state.id);
        const apiData = await axios.post(
            'https://api.lolduo.net/championDetail',
            championListResult.map(s => {
            return(
                {
                "championId" : s.championId,
                "position" : s.position
                }
            )
            })
            ,{headers:{ 
            'Content-type': 'application/json', 
            'Accept': 'application/json' 
                }}
        )
        setChampionDetailListResult( apiData.data);
        console.log(apiData.data);
        }
        ,[championListResult, state])

    useEffect(() => {setChampionListResultByApi()},[setChampionListResultByApi]);

    const setMainChampion = 
        championListResult.map(s => {
            return(
                <li className= {style.Champion}>
                    <img src={s.imgUrl} alt={s.imgUrl}></img>
                    <img src={s.positionUrl} alt={s.positionUrl}></img>
                </li>
            )
        })
    
    const setperkInfo = () => {
        return(
        championDetailListResult.perkInfo && championDetailListResult.perkInfo.map(s =>{
        return(
            <div>
                <li className={style.subImg}>
                    {
                    s.perkList.map(a => {                    
                            return(
                                <li className={style.subImg}>
                                    {
                                    a.perkUrlList.map(f => {
                                        return(
                                            <img width='46px' height='46px' src={f} alt={f}></img>
                                        )
                                    })
                                }
                                </li>      
                            )                    
                    })
                }
                </li>
                <div className={style.subImg}>
                    {s.winRate}
                </div>
                <div className={style.subImg}>
                    {s.allCount}
                </div>
            </div>
        )
    })
        )
}

const setItemInfo = () => {
    return(
    championDetailListResult.itemInfo && championDetailListResult.itemInfo.map(s =>{

    return(
        <div className={style.Champion}>
            <li className={style.subImg}>
                {
                s.itemList.map(a => {
                    return(
                        <li className={style.subImg}>
                        {
                            a.itemUrlList.map(f => {
                                return(
                                    <img width='46px' height='46px' src={f} alt={f}></img>
                                )
                            }
                        
                        )}
                        </li>
                       
                    )
                })
            }
            </li>
            <div className={style.subImg}>
                {s.winRate}
            </div>
            <div className={style.subImg}>
                {s.allCount}
            </div>
        </div>
    )
})
    )
}

const setSpellInfo = () => {
    return(
    championDetailListResult.spellInfo && championDetailListResult.spellInfo.map(s =>{

    return(
        <div className={style.Champion}>
            <li className={style.subImg}>
                {
                s.spellList.map(a => {
                    return(
                        <li className={style.subImg}>
                        {
                            a.spellUrlList.map(f => {
                                return(
                                    <img width='46px' height='46px' src={f} alt={f}></img>
                                )
                            }
                        
                        )}
                        </li>
                       
                    )
                })
            }
            </li>
            <div className={style.subImg}>
                {s.winRate}
            </div>
            <div className={style.subImg}>
                {s.allCount}
            </div>
        </div>
    )
})
    )
}


    
    return (
        <div>
            <div className={style.mainChampion}>
                {setMainChampion}
            </div>
            <div className={style.subItem}>
                {setperkInfo()}
            </div>
            <div className={style.subItem}>
                {setItemInfo()}
            </div>
            <div className={style.subItem}>
                {setSpellInfo()}
            </div>
        </div>
    );
}

export default Detatil;
