import { useCallback, useEffect, useState } from "react";
import style from "./css/Detail.module.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import env from "./static/env.json";
function Detatil() {
  const { state } = useLocation();
  const [selectedPerkChampionId, setSelectedPerkChampionId] = useState(2);
  const [championDetailListResult, setChampionDetailListResult] = useState([
    {
      winRate: "54.55%",
      allCount: "88 게임",
      thisWinRate: "100.00%",
      thisAllCount: "1 게임",
      infoList: [
        {
          championId: 267,
          championName: "나미",
          championPosition: "UTILITY",
          championPositionUrl:
            "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/line/UTILITY.png",
          championImgUrl:
            "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/champion/Nami.png",
          keyStoneListUrl: [
            "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/8100.png",
            "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/8112.png",
            "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/8400.png",
          ],
          keyItemUrl:
            "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/item/4005.png",
          perkList: [
            {
              winRate: "1 게임",
              mainPerkUrl:
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/7200_Domination.png",
              keyPerkUrlList: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/Electrocute/Electrocute.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/Predator/Predator.png_disabled.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png_disabled.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png_disabled.png",
              ],
              main1UrlList: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/CheapShot/CheapShot.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png_disabled.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png_disabled.png",
              ],
              main2UrlList: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/ZombieWard/ZombieWard.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/GhostPoro/GhostPoro.png_disabled.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png_disabled.png",
              ],
              main3UrlList: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png_disabled.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png_disabled.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png_disabled.png",
              ],
              subPerkUrl:
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/7204_Resolve.png",
              sub1UrlList: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Resolve/Demolish/Demolish.png_disabled.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Resolve/FontOfLife/FontOfLife.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Resolve/MirrorShell/MirrorShell.png_disabled.png",
              ],
              sub2UrlList: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Resolve/Conditioning/Conditioning.png_disabled.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Resolve/SecondWind/SecondWind.png_disabled.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Resolve/BonePlating/BonePlating.png_disabled.png",
              ],
              sub3UrlList: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Resolve/Overgrowth/Overgrowth.png_disabled.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Resolve/Revitalize/Revitalize.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/Styles/Sorcery/Unflinching/Unflinching.png_disabled.png",
              ],
              subsub1UrlList: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsAdaptiveForceIcon.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsAttackSpeedIcon.png_disabled.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsCDRScalingIcon.png_disabled.png",
              ],
              subsub2UrlList: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsAdaptiveForceIcon.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsArmorIcon.png_disabled.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsMagicResIcon.MagicResist_Fix.png_disabled.png",
              ],
              subsub3UrlList: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsHealthScalingIcon.png_disabled.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsArmorIcon.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/perk-images/StatMods/StatModsMagicResIcon.MagicResist_Fix.png_disabled.png",
              ],
              allCount: "100.00%",
            },
          ],
          itemList: [],
          spellList: [
            {
              winRate: "1 게임",
              spellUrlList: [
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/spell/SummonerFlash.png",
                "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/spell/SummonerDot.png",
              ],
              allCount: "100.00%",
            },
          ],
        },
      ],
    },
  ]);

  const setChampionListResultByApi = useCallback(async () => {
    const apiData = await axios.post(
      env.Url + "/v2/championDetail",
      state.id.map((s) => {
        return {
          championId: s.championId,
          position: s.position,
        };
      }),
      {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
    console.log(apiData.data);
    setChampionDetailListResult(apiData.data);
    setSelectedPerkChampionId(apiData.data.infoList[0].championId);
  }, [state]);

  useEffect(() => {
    setChampionListResultByApi();
  }, [setChampionListResultByApi]);

  const setPerkDetailInfo = (now) => {
    return (
      championDetailListResult.infoList &&
      championDetailListResult.infoList.map((infoList) => {
        if (now === infoList.championId) {
          return (
            <div className={style.border}>
              <div className={style.nameSpace}>
                <span className={style.name}>
                  {infoList.championName}의 추천 룬 세팅
                </span>
              </div>
              <div className={style.main}>
                <div className={style.perkList}>
                  <li className={style.perks}>
                    <img
                      className={style.subPerk}
                      src={infoList.perkList[0].mainPerkUrl}
                      alt={infoList.perkList[0].mainPerkUrl}
                    ></img>
                  </li>
                  <li className={style.perks}>
                    {infoList.perkList[0].keyPerkUrlList.map(
                      (keyPerkUrlList) => {
                        return (
                          <img
                            className={style.subPerk}
                            src={keyPerkUrlList}
                            alt={keyPerkUrlList}
                          />
                        );
                      }
                    )}
                  </li>
                  <li className={style.perks}>
                    {infoList.perkList[0].main1UrlList.map((main1UrlList) => {
                      return (
                        <img
                          className={style.subPerk}
                          src={main1UrlList}
                          alt={main1UrlList}
                        />
                      );
                    })}
                  </li>
                  <li className={style.perks}>
                    {infoList.perkList[0].main2UrlList.map((main2UrlList) => {
                      return (
                        <img
                          className={style.subPerk}
                          src={main2UrlList}
                          alt={main2UrlList}
                        />
                      );
                    })}
                  </li>
                  <li className={style.perks}>
                    {infoList.perkList[0].main3UrlList.map((main3UrlList) => {
                      return (
                        <img
                          className={style.subPerk}
                          src={main3UrlList}
                          alt={main3UrlList}
                        />
                      );
                    })}
                  </li>
                </div>
                <div className={style.perkList}>
                  <li className={style.perks}>
                    <img
                      className={style.subPerk}
                      src={infoList.perkList[0].subPerkUrl}
                      alt={infoList.perkList[0].subPerkUrl}
                    ></img>
                  </li>
                  <li className={style.perks}>
                    {infoList.perkList[0].sub1UrlList.map((sub1UrlList) => {
                      return (
                        <img
                          className={style.subPerk}
                          src={sub1UrlList}
                          alt={sub1UrlList}
                        />
                      );
                    })}
                  </li>
                  <li className={style.perks}>
                    {infoList.perkList[0].sub2UrlList.map((sub2UrlList) => {
                      return (
                        <img
                          className={style.subPerk}
                          src={sub2UrlList}
                          alt={sub2UrlList}
                        />
                      );
                    })}
                  </li>
                  <li className={style.perks}>
                    {infoList.perkList[0].sub3UrlList.map((sub3UrlList) => {
                      return (
                        <img
                          className={style.subPerk}
                          src={sub3UrlList}
                          alt={sub3UrlList}
                        />
                      );
                    })}
                  </li>
                </div>
                <div className={style.lastPerkList}>
                  <li className={style.perks}>
                    {infoList.perkList[0].subsub1UrlList.map(
                      (subsub1UrlList) => {
                        return (
                          <img
                            className={style.subPerk}
                            src={subsub1UrlList}
                            alt={subsub1UrlList}
                          />
                        );
                      }
                    )}
                  </li>
                  <li className={style.perks}>
                    {infoList.perkList[0].subsub2UrlList.map(
                      (subsub2UrlList) => {
                        return (
                          <img
                            className={style.subPerk}
                            src={subsub2UrlList}
                            alt={subsub2UrlList}
                          />
                        );
                      }
                    )}
                  </li>
                  <li className={style.perks}>
                    {infoList.perkList[0].subsub3UrlList.map(
                      (subsub3UrlList) => {
                        return (
                          <img
                            className={style.subPerk}
                            src={subsub3UrlList}
                            alt={subsub3UrlList}
                          />
                        );
                      }
                    )}
                    <div className={style.perkRate}>
                      <span className={style.space}>
                        {infoList.perkList[0].allCount}{" "}
                      </span>
                      <span>{infoList.perkList[0].winRate}</span>
                    </div>
                  </li>
                </div>
              </div>
            </div>
          );
        }
        return <div></div>;
      })
    );
  };

  const setSelectInfo = () => {
    return (
      <div className={style.mainChampion}>
        {championDetailListResult.infoList &&
          championDetailListResult.infoList.map((infoList) => {
            return (
              <div
                className={
                  infoList.championId === selectedPerkChampionId
                    ? style.selectedList
                    : `${style.selectedList} ${style.gray}`
                }
                onClick={() => setSelectedPerkChampionId(infoList.championId)}
              >
                <ul className={style.selectList}>
                  <li className={style.selected}>
                    <img
                      className={style.subChampion}
                      src={infoList.championImgUrl}
                      alt={infoList.championImgUrl}
                    />
                    <img
                      className={style.subChampion}
                      src={infoList.championPositionUrl}
                      alt={infoList.championPositionUrl}
                    />
                    <img
                      className={style.subItem}
                      src={infoList.keyItemUrl}
                      alt={infoList.keyItemUrl}
                    />
                  </li>

                  <li className={style.selected}>
                    <img
                      className={style.subPerk}
                      src={infoList.keyStoneListUrl[0]}
                      alt={infoList.keyStoneListUrl[0]}
                    />
                    <img
                      className={style.subPerk}
                      src={infoList.keyStoneListUrl[1]}
                      alt={infoList.keyStoneListUrl[1]}
                    />
                    <img
                      className={style.subPerk}
                      src={infoList.keyStoneListUrl[2]}
                      alt={infoList.keyStoneListUrl[2]}
                    />
                  </li>
                  {/*
                      <li className={style.perks}>
                        <span>{infoList.perkList[0].winRate}</span>
                        <span>{infoList.perkList[0].allCount}</span>
                      </li>
                      */}
                </ul>
              </div>
            );
          })}
      </div>
    );
  };

  const setItemInfo = (now) => {
    return (
      championDetailListResult.infoList &&
      championDetailListResult.infoList.map((infoList) => {
        if (infoList.itemList != null && now === infoList.championId) {
          return (
            <div className={style.border}>
              <div className={style.nameSpace}>
                <span className={style.name}>
                  {infoList.championName}의 추천 아이템
                </span>
              </div>
              {infoList.itemList.map((itemList) => {
                return (
                  <li className={style.spellOrItemList}>
                    <div className={style.noneRate}>
                      <img
                        className={style.item}
                        src={itemList.itemUrlList[0]}
                        alt={itemList.itemUrlList[0]}
                      ></img>
                      <img
                        className={style.item}
                        src={itemList.itemUrlList[1]}
                        alt={itemList.itemUrlList[1]}
                      ></img>
                      <img
                        className={style.item}
                        src={itemList.itemUrlList[2]}
                        alt={itemList.itemUrlList[2]}
                      ></img>
                    </div>
                    <div className={style.rate}>
                      <span>{itemList.allCount}</span>
                      <span>{itemList.winRate}</span>
                    </div>
                  </li>
                );
              })}
            </div>
          );
        } else {
          return <></>;
        }
      })
    );
  };

  const setSpellInfo = (now) => {
    return (
      championDetailListResult.infoList &&
      championDetailListResult.infoList.map((infoList) => {
        if (now === infoList.championId) {
          return (
            <div className={style.border}>
              <div className={style.nameSpace}>
                <span className={style.name}>
                  {infoList.championName}의 추천 스펠
                </span>
              </div>
              {infoList.spellList.map((spellList) => {
                return (
                  <li className={style.spellOrItemList}>
                    <div className={style.noneRate}>
                      <img
                        className={style.spell}
                        src={spellList.spellUrlList[0]}
                        alt={spellList.spellUrlList[0]}
                      ></img>
                      <img
                        className={style.spell}
                        src={spellList.spellUrlList[1]}
                        alt={spellList.spellUrlList[1]}
                      ></img>
                    </div>
                    <div className={style.rate}>
                      <span>{spellList.allCount}</span>
                      <span>{spellList.winRate}</span>
                    </div>
                  </li>
                );
              })}
            </div>
          );
        } else {
          return <></>;
        }
      })
    );
  };

  return (
    <div>
      <div>{setSelectInfo()}</div>
      <div className={style.main}>
        <div>{setPerkDetailInfo(selectedPerkChampionId)}</div>
        <div className={style.sub}>
          <div>{setSpellInfo(selectedPerkChampionId)}</div>
          <div>{setItemInfo(selectedPerkChampionId)}</div>
        </div>
      </div>
    </div>
  );
}

export default Detatil;
