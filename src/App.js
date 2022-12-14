import { useCallback, useEffect, useState } from "react";
import "./css/App.css";
import style from "./css/Main.module.css";
import championListData from "./static/championList.json";
import env from "./static/env.json";
import lineDate from "./static/line.json";
import axios from "axios";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const goToDetail = (s) => {
    navigate("/detail", { state: { id: s.championInfoResponseList } });
  };
  const [userSelected, setUserSelected] = useState([
    { id: 0, line: "ALL", now: 0 },
  ]);
  const [userSelectedRate, setUserSelectedRate] = useState({
    winRateAsc: false,
    gameCountAsc: null,
  });
  const [championName, setChampionName] = useState("");
  const [selected, setSelected] = useState(0);
  const ChosungSearch = require("hangul-chosung-search-js");
  const [championListResult, setChampionListResult] = useState([
    {
      championInfoResponseList: [
        {
          championId: 2,
          championName: "올라프",
          imgUrl:
            "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/champion/Olaf.png",
          position: "TOP",
          positionUrl:
            "https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/line/TOP.png",
        },
      ],
      winRate: "42.31%",
      allCount: "0 게임",
    },
  ]);

  const setChampionListResultByApi = useCallback(async () => {
    const apiData = await axios.post(
      env.Url + "/getInfo",
      {
        championInfoDTOList: userSelected.map((s) => {
          return {
            championId: s.id,
            position: s.line,
          };
        }),
        winRateAsc: userSelectedRate.winRateAsc,
        gameCountAsc: userSelectedRate.gameCountAsc,
      },
      {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
    setChampionListResult(apiData.data);
    console.log(apiData.data);
  }, [userSelected, userSelectedRate]);

  useEffect(() => {
    setChampionListResultByApi();
  }, [setChampionListResultByApi]);

  const onChangeUserSelectedLine = (e) => {
    userSelected[selected].line = e;
    setUserSelected(Object.assign([{}], userSelected));
    setChampionListResultByApi();
  };

  const lineListImg = (
    <div>
      <img
        src={lineDate.ALL}
        alt={lineDate.ALL}
        onClick={() => onChangeUserSelectedLine("ALL")}
      ></img>
      <img
        src={lineDate.TOP}
        alt={lineDate.TOP}
        onClick={() => onChangeUserSelectedLine("TOP")}
      ></img>
      <img
        src={lineDate.JUNGLE}
        alt={lineDate.JUNGLE}
        onClick={() => onChangeUserSelectedLine("JUNGLE")}
      ></img>
      <img
        src={lineDate.MIDDLE}
        alt={lineDate.MIDDLE}
        onClick={() => onChangeUserSelectedLine("MIDDLE")}
      ></img>
      <img
        src={lineDate.BOTTOM}
        alt={lineDate.BOTTOM}
        onClick={() => onChangeUserSelectedLine("BOTTOM")}
      ></img>
      <img
        src={lineDate.UTILITY}
        alt={lineDate.UTILITY}
        onClick={() => onChangeUserSelectedLine("UTILITY")}
      ></img>
    </div>
  );

  const newUserSelected = (e) => {
    while (e > userSelected.length)
      userSelected.push({ id: 0, line: "ALL", now: userSelected.length });
    userSelected.length = e;
    setUserSelected(Object.assign([{}], userSelected));
    setSelected(0);
    setChampionListResultByApi();
  };

  const championListResultShow = () => {
    let now = 1;
    return championListResult.map((s) => {
      return (
        <tr>
          <td className={style.table}>{now++}</td>
          <td className={`${style.ChampionList} ${style.table}`}>
            {s.championInfoResponseList.map((c) => {
              return (
                <div onClick={() => goToDetail(s)}>
                  <img src={c.imgUrl} alt={c.imgUrl}></img>
                  <img src={c.positionUrl} alt={c.positionUrl}></img>
                </div>
              );
            })}
          </td>
          <td className={style.table}>{s.winRate}</td>
          <td className={style.table}>{s.allCount}</td>
        </tr>
      );
    });
  };

  //유저가 클릭한 곳에 champion id 넣기.
  const onChangeUserSelected = (e) => {
    userSelected[selected].id = e;
    setUserSelected(Object.assign([{}], userSelected));
    setChampionListResultByApi();
  };

  const onChangeName = (e) => {
    setChampionName(e.target.value);
  };

  const championListli = championListData.map((c) => {
    return (
      ChosungSearch.isSearch(championName, c.name) && (
        <li className={style.Champion}>
          <img
            src={c.imgUrl}
            alt={c.imgUrl}
            width="46px"
            height="46px"
            onClick={() => onChangeUserSelected(c.id)}
          ></img>
        </li>
      )
    );
  });

  const userSelectedSpace = userSelected.map((s) => {
    return (
      <li
        className={
          s.now === selected
            ? `${style.Champion} ${style.SelectedList} ${style.Selected}`
            : `${style.Champion} ${style.SelectedList}`
        }
        onClick={() => setSelected(s.now)}
      >
        <img
          src={championListData.find((champion) => champion.id === s.id).imgUrl}
          width="46px"
          height="46px"
          alt={championListData.find((champion) => champion.id === s.id).imgUrl}
        ></img>
        <img
          width="46px"
          height="46px"
          src={lineDate[s.line]}
          alt={lineDate[s.line]}
        ></img>
      </li>
    );
  });

  const setRate = (c) => {
    if (c === "winRate") {
      if (userSelectedRate.winRateAsc === null)
        setUserSelectedRate({ winRateAsc: false, gameCountAsc: null });
      else
        setUserSelectedRate({
          winRateAsc: !userSelectedRate.winRateAsc,
          gameCountAsc: null,
        });
    } else {
      if (userSelectedRate.gameCountAsc === null)
        setUserSelectedRate({ winRateAsc: null, gameCountAsc: false });
      else
        setUserSelectedRate({
          winRateAsc: null,
          gameCountAsc: !userSelectedRate.gameCountAsc,
        });
    }
  };

  return (
    <div className="App">
      <div className={style.Maincontent}>
        <div className={style.SubcontentChampionList}>
          <nav>
            <button className={style.btn} onClick={() => newUserSelected(1)}>
              <img
                className={style.img}
                src="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/icon/solo.png"
                alt="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/icon/solo.png"
              />
            </button>
            <button className={style.btn} onClick={() => newUserSelected(2)}>
              <img
                className={style.img}
                src="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/icon/double.png"
                alt="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/icon/double.png"
              />
            </button>
            <button className={style.btn} onClick={() => newUserSelected(3)}>
              <img
                className={style.img}
                src="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/icon/triple.png"
                alt="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/icon/triple.png"
              />
            </button>
            <button className={style.btn} onClick={() => newUserSelected(5)}>
              <img
                className={style.img}
                src="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/icon/penta.png"
                alt="https://lol-duo-bucket.s3.ap-northeast-2.amazonaws.com/icon/penta.png"
              />
            </button>
          </nav>
          <div className={style.ChampionList}>{userSelectedSpace}</div>
          <div>
            <input
              id="filterChampion"
              type="text"
              placeholder="챔피언 검색 (가렌, ㄱㄹ, ...)"
              value={championName}
              onChange={onChangeName}
            />
          </div>
          {lineListImg}
          <div className={style.ChampionList}>{championListli}</div>
        </div>
        <div>
          <table>
            <colgroup>
              <col width="150" />
              <col width="*" />
              <col width="*" />
              <col width="*" />
            </colgroup>
            <thead>
              <tr>
                <th className={style.table}>순위</th>
                <th className={style.table}>챔피언</th>
                <th className={style.table} onClick={() => setRate("winRate")}>
                  승률
                </th>
                <th
                  className={style.table}
                  onClick={() => setRate("countRate")}
                >
                  경기 수
                </th>
              </tr>
            </thead>
            <tbody className={style.tbody}>{championListResultShow()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
