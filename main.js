const Stack = require('./stack')
const Queue = require('./queue')

function peek(stack) {
    if(this.top == null) {
        return 'Stack is empty'
    } else {
        return this.top.data;
    }
}

function isEmpty(stack) {
    if (this.top == null) {
        return 'Stack is empty';
    } else {
        return 'Stack is not empty'
    }
}

function display(stack) {
    isEmpty(stack);
    node = stack.top;
    while (node !== null) {
        console.log(node.data)
        node = node.next;
    }
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let backwards = new Stack();
    for(let i = 0; i < s.length; i++){
        backwards.push(s.charAt(i));        
    }
    for(let j = 0; j< s.length; j++){
        if(s[j] === backwards.pop()) continue;
        else return false;
    }
    return true;
}

function hasMatchingParens(expression) {
    let expr = expression.split('');
    let parensAreOpen= false;
    let indexOfError = null;

  
    expr.forEach((letter, index) => {
      if(letter == '(') {
        indexOfError = index;
        parensAreOpen = true;
      }
      if(letter == ')') {
        if(parensAreOpen) {
          parensAreOpen = false;
        }
        else {
          indexOfError = index;
          throw new Error(`Error caused by ')' at expression index ${indexOfError}`)
        }
      }
    })
  
    if(parensAreOpen) {
      throw new Error(`Error caused by '(' expression index ${indexOfError}`)
    }
  
    return true;
  }

  function sortStack(inputStack, tempStack = null, tempVar = null) {
    if (tempStack === null) {
      tempStack = new Stack();
    }
  
    if (inputStack.top === null) {
      inputStack = tempStack;
      return inputStack;
    }
  
    tempVar = inputStack.pop();
    if (tempStack.top === null || tempVar < tempStack.top.data) {
      tempStack.push(tempVar);
      return sortStack(inputStack, tempStack);
    } else {
      while (tempStack.top !== null && tempVar > tempStack.top.data) {
        inputStack.push(tempStack.pop());
      }
      tempStack.push(tempVar);
      return sortStack(inputStack, tempStack);
    }
  }
  
  const testStack = new Stack();
  
  testStack.push(5);
  testStack.push(3);
  testStack.push(9);
  testStack.push(22);
  testStack.push(1);
  display(sortStack(testStack));

function main() {
    let starTrek = new Stack();

    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    starTrek.push('Scotty')

    console.log(peek(starTrek))
    console.log(isEmpty(starTrek))
    display(starTrek)
    starTrek.pop()
    starTrek.pop()
    starTrek.pop()
    display(starTrek)

    console.log(is_palindrome("dad"));
    console.log(is_palindrome("A man, a plan, a canal: Panama"));
    console.log(is_palindrome("1001"));
    console.log(is_palindrome("Tauhida"));
    console.log(hasMatchingParens('('));
}

main();

function mainQ() {
    const starTrekQ = new Queue();
    starTrekQ.enqueue("Kirk");
    starTrekQ.enqueue("Spock");
    starTrekQ.enqueue("Uhura");
    starTrekQ.enqueue("Sulu");
    starTrekQ.enqueue("Checkov");
    starTrekQ.dequeue();
    starTrekQ.dequeue();
    starTrekQ.enqueue("Kirk");
    console.log(peek(starTrekQ));
    console.log(isEmpty(starTrekQ));
    display(starTrekQ);
  }

mainQ();

function peekQ(queue) {
    if(queue.first === null) {
        return 'Queue is empty.';
    } else {
        return queue.first;
    }
}

function isEmpty(queue) {
    if (queue.first == null && queue.last == null) {
        return 'Queue is empty.';
    } else {
        return 'Queue is not empty.'
    }
}

function display(queue) {
    let node = queue.first;
    let order = 1;
    while (node !== null) {
      console.log(`${order}: ${node.value}`);
      order++;
      node = node.next;
    }
  }

class DLLQueue {
    constructor() {
      this.first = null;
      this.last = null;
    }
    enqueue(data) {
      const node = new _Node(data);
  
      if (this.first === null) {
        this.first = node;
      }
  
      if (this.last) {
        this.last.next = node;
        node.previous = this.last;
      }
      this.last = node;
    }
    dequeue() {
      if (this.first === null) {
        return;
      }
      const node = this.first;
      this.first = this.first.next;
  
      if (this.first !== null) {
        this.first.previous = null;
      }
  
      if (node === this.last) {
        this.last = null;
      }
      return node.value;
    }
  }
  
  function mainDLL() {
    const starTrekDLL = new DLLQueue();
  
    starTrekDLL.enqueue("Kirk");
    starTrekDLL.enqueue("Spock");
    starTrekDLL.enqueue("Uhura");
    starTrekDLL.enqueue("Sulu");
    starTrekDLL.enqueue("Checkov");
    display(starTrekDLL);
  }
  
  mainDLL();


  class StackQueue {
    constructor() {
      this.first = null;
      this.last = null;
      this.stack = new Stack();
    }
  
    enqueue(data) {
      if (this.stack.top === null) {
        this.stack.push(data);
        this.first = this.stack.top;
      } else {
        this.stack.push(data);
      }
      this.last = this.stack.top;
    }
  
    dequeue() {
      if (this.first === null) {
        return;
      }
      const tempS = new Stack();
      while (this.stack.top !== null) {
        tempS.push(this.stack.pop());
      }
      const popped = tempS.pop();
      this.first = null;
      this.last = null;
      while (tempS.top !== null) {
        this.enqueue(tempS.pop());
      }
      return popped;
    }
  }

  function mainStackQueue() {
    const starTrekQ = new StackQueue();
    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');
    console.log(starTrekQ.first, starTrekQ.last);
    starTrekQ.dequeue();
    starTrekQ.dequeue();
    console.log('after dequeu');
    console.log(starTrekQ.first, starTrekQ.last);
  }

  mainStackQueue();

  function dancePair(list){
    const queueMen = new Queue();
    const queueWomen = new Queue();
    let men = 0;
    let women = 0;
    for(let i=0; i< list.length; i++){
        if(list[i].gender === 'm'){
            queueMen.enqueue(list[i].name);
            men+=1;
        } else {
            queueWomen.enqueue(list[i].name);
            women+=1;
        }
    }

    while(men > 0 && women > 0){
        let male = queueMen.dequeue();
        let female = queueWomen.dequeue();
        console.log(`Female dancer is ${female}, and the male dancer is ${male}`);
        men--;
        women--;
    }

    if(women > 0){
        console.log(`There are ${women} female dancers waiting to dance`)
    } else {
        console.log(`There are ${men} male dancers waiting to dance`)

    }
}

  function danceMain(){
    const data = [  
                    {gender: 'f', name: 'Jane'},
                    {gender: 'm', name: 'Frank',},
                    {gender: 'm', name: 'John',},
                    {gender: 'm', name: 'Sherlock',},
                    {gender: 'f', name: 'Madonna',},
                    {gender: 'm', name: 'David',},
                    {gender: 'm', name: 'Christopher',},
                    {gender: 'f', name: 'Beyonce',},
                 ]

    console.log(dancePair(data));
  }

  danceMain();

  function bank(list){
    const queue = new Queue();
    list.forEach(customer => {
        queue.enqueue(customer);
    });
    let queueCount = 1;
    while(queue.first !== null){
        if(queueCount%4 === 0){
            queue.enqueue(queue.dequeue());
            queueCount = 1; 
        } else {
            console.log(queue.dequeue());
            queueCount++
        }
    }
}

  function bankMain(){
    const customers = ['john', 'joe', 'mike', 'charlie', 'alex', 'david', 'nick', 'daniel']

    console.log(bank(customers));
  }

  bankMain();
