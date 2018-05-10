class Stack {
  constructor() {
    this.size = 0;
    this.array = [];
  }

  getSize() {
    const output = this.size;
    return output;
  }

  push(var1) {
    const returnVal = this.array.push(var1);
    this.size = this.size + 1;
    return returnVal;
  }

  pop() {
    const output = this.array.pop();
    this.size = this.size - 1;
    return output;
  }
}

export default Stack;
