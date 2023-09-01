const runLoopInReverseUsingRecusrion = (num) => {
  const iterateNumer = (i) => {
    if (i % 2 === 0) {
      console.log(`${i} even`);
    }
    if (i !== 0) {
      num--;
      iterateNumer(num);
    }
  };

  iterateNumer(num);
};

runLoopInReverseUsingRecusrion(20);
