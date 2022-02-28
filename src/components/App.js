import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [moneyLeft, setMoneyLeft] = useState(100);
  const [emptyPlates, setEmptyPlates] = useState([]);


  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => {
        const newSushis =data.map((sushi) => {
          return {...sushi, eaten: false};
        });
        setSushis(newSushis);
      })
  }, []);

  function spendMoney(wallet, cost, id) {
    console.log("wallet:",wallet,"cost:",cost)
    setMoneyLeft(wallet-cost);
    setEmptyPlates([...emptyPlates,id]);
    const updatedSushis = sushis.map((sushi) => {
      if (sushi.id===id) {
        return {...sushi, eaten:true};
      } return {...sushi};
    });
    setSushis(updatedSushis)
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} moneyLeft={moneyLeft} spendMoney={spendMoney}/>
      <Table moneyLeft={moneyLeft} plates={emptyPlates}/>
    </div>
  );
}

export default App;
