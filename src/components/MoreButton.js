import React from "react";

function MoreButton({nextFour, setNextFour}) {
  return <button onClick={() => setNextFour(nextFour+4)}>More sushi!</button>;
}

export default MoreButton;
