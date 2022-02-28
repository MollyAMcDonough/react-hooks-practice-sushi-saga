import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, moneyLeft, spendMoney}) {
  const [nextFour, setNextFour] = useState(0);
  const sushisJsx = sushis.slice(nextFour,nextFour+4).map((sushi) => {
    return (
      <Sushi key={sushi.id} id={sushi.id} eaten={sushi.eaten} name={sushi.name} price={sushi.price} image={sushi.img_url} moneyLeft={moneyLeft} spendMoney={spendMoney} />
    )
  });

  return (
    <div className="belt">
      {sushisJsx}
      <MoreButton nextFour={nextFour} setNextFour={setNextFour}/>
    </div>
  );
}

export default SushiContainer;
