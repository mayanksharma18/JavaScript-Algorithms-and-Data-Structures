//Stack is an ordered collection of items that follows the last in, first out (LIFO) principle.

//Creating an array-based Stack class

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    //This method adds a new element (or several elements) to the top of the stack.
    this.items.push(element); //here push is an array method
  }

  pop() {
    //This method removes the top element from the stack. It also returns the removed element
    return this.items.pop();
  }
  peek() {
    //This method returns the top element from the stack.
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    //This method returns true if the stack does not contain any elements, 
    //and false if the size of the stack is bigger than 0.
    if(this.items.length==0){
        return true
    }
    else{
        return false
    }   
}
clear(){
    this.items=[];
}
size(){
    return this.items.length
}
}

const stack = new Stack();

stack.push(55);
stack.push(56);
stack.push(57);
stack.push(58);
console.log(stack.items);
console.log(stack.pop());
console.log(stack.items);
console.log(stack.peek());
console.log(stack.isEmpty())
console.log(stack.size())
