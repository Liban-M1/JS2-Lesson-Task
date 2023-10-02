


function makeFunction(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeFunction(5);
  
  console.log(add5(2));
  console.log(add5(5));
  
  const add10 = makeFunction(10);
  console.log(add10(20));