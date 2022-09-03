function oddOrEven(array) {
    const sum = array.reduce((b, a) => {
      return b + a;
    }, 0);
    return sum%2==0 ? "even" : "odd";
  }