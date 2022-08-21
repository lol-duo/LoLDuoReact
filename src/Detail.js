import { useCallback, useEffect, useState } from 'react';
import style from './css/Detail.module.css'
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import env from './static/env.json'
function Detatil() {

    const {state} = useLocation();
    const [championListResult , setChampionListResult] = useState([
        {
          "championInfoResponseList": [
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
        "winRate": "54.55%",
        "allCount": "88 게임",
        "thisWinRate": "100.00%",
        "thisAllCount": "1 게임",
        "infoList": [
          {
            "championId": 267,
            "championPosition": "UTILITY",
            "championPositionUrl": "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/line/UTILITY.png",
            "championImgUrl": "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/champion/Nami.png",
            "keyStoneListUrl": [
              "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/8100.png",
              "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/8112.png",
              "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/8400.png"
            ],
            "keyItemUrl": "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/item/4005.png",
            "perkList": [
              {
                "winRate": "1 게임",
                "mainPerkUrl": "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/7200_Domination.png",
                "keyPerkUrlList": [
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/Electrocute/Electrocute.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/Predator/Predator.png_disabled.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png_disabled.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png_disabled.png"
                ],
                "main1UrlList": [
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/CheapShot/CheapShot.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png_disabled.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png_disabled.png"
                ],
                "main2UrlList": [
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/ZombieWard/ZombieWard.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/GhostPoro/GhostPoro.png_disabled.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png_disabled.png"
                ],
                "main3UrlList": [
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png_disabled.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png_disabled.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png_disabled.png"
                ],
                "subPerkUrl": "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/7204_Resolve.png",
                "sub1UrlList": [
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Resolve/Demolish/Demolish.png_disabled.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Resolve/FontOfLife/FontOfLife.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Resolve/MirrorShell/MirrorShell.png_disabled.png"
                ],
                "sub2UrlList": [
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Resolve/Conditioning/Conditioning.png_disabled.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Resolve/SecondWind/SecondWind.png_disabled.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Resolve/BonePlating/BonePlating.png_disabled.png"
                ],
                "sub3UrlList": [
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Resolve/Overgrowth/Overgrowth.png_disabled.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Resolve/Revitalize/Revitalize.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Sorcery/Unflinching/Unflinching.png_disabled.png"
                ],
                "subsub1UrlList": [
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsAdaptiveForceIcon.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsAttackSpeedIcon.png_disabled.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsCDRScalingIcon.png_disabled.png"
                ],
                "subsub2UrlList": [
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsAdaptiveForceIcon.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsArmorIcon.png_disabled.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsMagicResIcon.MagicResist_Fix.png_disabled.png"
                ],
                "subsub3UrlList": [
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsHealthScalingIcon.png_disabled.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsArmorIcon.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsMagicResIcon.MagicResist_Fix.png_disabled.png"
                ],
                "allCount": "100.00%"
              }
            ],
            "itemList": [],
            "spellList": [
              {
                "winRate": "1 게임",
                "spellUrlList": [
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/spell/SummonerFlash.png",
                  "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/spell/SummonerDot.png"
                ],
                "allCount": "100.00%"
              }
            ]
          }
        ]
      }
      ]);
   
    const setChampionListResultByApi = useCallback( async () => {         
          setChampionListResult(state.id);
          const apiData = await axios.post(
              env.Url + '/v2/championDetail',
              state.id.map(s => {
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
        ,[state])

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
          <div>
            <div>
              {championDetailListResult.infoList && championDetailListResult.infoList.map(infoList => {
                return(
                  <li>
                    <div>
                      <img src={infoList.keyStoneListUrl[0]} alt={infoList.keyStoneListUrl[0]}/>
                      <img src={infoList.keyStoneListUrl[1]} alt={infoList.keyStoneListUrl[1]}/>
                      <img src={infoList.keyStoneListUrl[2]} alt={infoList.keyStoneListUrl[2]}/>
                      <span>{infoList.perkList[0].winRate}</span>
                      <span>{infoList.perkList[0].allCount}</span>
                    </div>
                  </li>
                )
              })
              }    
          </div>
         </div>
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
      <div>
        {championDetailListResult.spellList && championDetailListResult.spellList.map(spellList => {
          return(
            <li>
              <img src={spellList.spellUrlList[0]} alt={spellList.spellUrlList[0]}></img>
              <img src={spellList.spellUrlList[1]} alt={spellList.spellUrlList[1]}></img>
            </li>
          )
        })}
      </div>
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
