const coinCalculate = (counter) => {
  console.log("Current number: " + counter);
  if (counter === 0) {
    return counter;
  } else {
    if (counter / 25 >= 1) {
      const quartersnums = parseInt(counter / 25);
      const remain = counter - quartersnums * 25;
      console.log("quarters " + quartersnums);
      return coinCalculate(remain);
    } else if (counter / 10 >= 1) {
      const dimes = parseInt(counter / 10);
      const remain = counter - dimes * 10;
      console.log("dimes " + dimes);
      return coinCalculate(remain);
    } else if (counter / 5 >= 1) {
      const nickles = parseInt(counter / 5);
      const remain = counter - nickles * 5;
      console.log("nickles " + nickles);
      return coinCalculate(remain);
    } else if (counter / 1 >= 1) {
      const pennies = counter / 1;
      const remain = parseInt(counter - pennies * 1);
      console.log("pennies " + pennies);
      return coinCalculate(remain);
    }
  }
};
