import React from "react";

function Sushi({id, eaten, name, image, price, spendMoney, moneyLeft}) {
  let img = <img src={image} alt={name} width="100%" />;

  function moneyCheck() {
    if (moneyLeft - price >= 0) {
      spendMoney(moneyLeft, price, id)
    } else {
      console.log("not enough funds!")
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={()=>eaten ? null : moneyCheck()}>
        {eaten ? null : img}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
