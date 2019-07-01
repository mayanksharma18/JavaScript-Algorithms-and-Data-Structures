class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  isEmpty() {
    return this.count === 0;
  }
  size() {
    return this.count;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      this.count--;
      const del = this.items[this.count];
      delete this.items[this.count];
    }
  }
  clear(){
      this.items={},
      this.count=0
  }
}

const stack = new Stack();
console.log(stack);
stack.push(12);
stack.push(13);
stack.pop();
console.log(stack.size());
