// Stack data structure simple implementation.
// Stack is a LIFO data structure, which means Last In, First Out.
// that's why only can be added or removed from the top of the stack.  

class Stack {

    constructor(){
        this.stackItems = [];
    }
    
    //Add new element into the stack 
    push( element ){
        this.stackItems.push(element);
    }

    //Removes the top element in the stack
    pop(){
        this.stackItems.pop();
    }

    //Shows the top elemnt in the stack
    peek(){
        console.log(this.stackItems[this.stackItems.length - 1]);
    }

    //Shows all the elements into the stack
    print(){
        console.log(this.stackItems);
    }
}

const stack1 = new Stack();

