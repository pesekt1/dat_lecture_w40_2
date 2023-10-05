//stack implementation
//peek, push, pop, count
class Stack {
  #items;
  constructor() {
    this.#items = [];
  }
  setItems(value) {
    this.#items = value;
  }

  #handleIsEmpty() {
    if (this.#items.length === 0) throw new Error("stack is empty");
  }

  push(item) {
    this.#items.push(item);
  }
  pop() {
    this.#handleIsEmpty();
    return this.#items.pop();
  }
  peek() {
    this.#handleIsEmpty();
    return this.#items[this.#items.length - 1];
  }
  count() {
    return this.#items.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push("hello");
stack.push(true);
stack.push({ name: "john", age: 30, city: "new york" });

stack.count();
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.peek();

//extra - inheritance
class ResetableStack extends Stack {
  reset() {
    this.setItems([]);
  }
}

const resetableStack = new ResetableStack();
resetableStack.push(1);
resetableStack.push("hello");
resetableStack.push(true);
resetableStack.push({ name: "john", age: 30, city: "new york" });
resetableStack.reset();
console.log(resetableStack);
