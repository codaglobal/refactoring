class taxCalc {
  constructor() {
    this.rate = 0;
    this.taxValue = 0;
  }

  getTotal(money, state) {
    let myRate;

    if (state === 'NY') {
      myRate = 0.07;
    } else if (state === 'PA') {
      myRate = 0.06;
    } else {
      myRate = 0;
    }

    this.rate = myRate;

    this.taxValue = money * this.rate;

    return money + this.taxValue;
  }
}
export default taxCalc;
