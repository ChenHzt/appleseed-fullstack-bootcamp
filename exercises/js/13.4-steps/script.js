const steps = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
      str += '#';
    }
    console.log(str);
  }
};


steps(10);