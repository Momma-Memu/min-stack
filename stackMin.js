class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.length = 0;
        this.minimum = [];
    }
    push(val){
        let node = new Node(val)
        if(this.length === 0){
            this.top = node;
            this.minimum.push(node.value)
            this.length += 1
        } else {
            let temp = this.top;
            this.top = node;
            this.top.next = temp;
            this.length += 1;
            if(this.minimum[0] > node.value){
                this.minimum.unshift(node.value)
            } else {
                this.minimum.unshift(this.minimum[0])
            }
        }
        return this.length;
    }
    pop(){
        if(this.length === 0) return null;
        if(this.length === 1){
            let temp = this.top;
            this.top = null;
            this.length -= 1;
            this.minimum = [];
            return temp.value;
        } else {
            let temp = this.top
            this.top = this.top.next;
            this.length -= 1;
            this.minimum.shift()
            return temp.value;
        }
    }

    min(){
        return this.minimum[0]
    }
}
