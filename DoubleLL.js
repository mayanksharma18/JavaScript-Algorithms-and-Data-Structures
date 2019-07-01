//A double linkedlist will have next and prev pointer

class Linkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    addTohead(element){
     let node =new Node(element,this.head,null);
     if(this.head){ this.head.prev=node }
     else{ this.tail=node;}
     this.head=node;
    }
    addTotail(element){
        let node=new Node(element,null,this.tail)
        if(this.head){ this.tail.next=node; }
        else{ this.head=node;}
        this.tail=node
    }
    search(value){
     let current=this.head;
      while(current){
      if(current.data==value){return current.data}
      current=current.next;
    }
    return null;
    }
    indexno(value){
     let current=this.head;
      let  count=0
        while(current){
            if(current.data==value){
                return count
            }
            current=current.next;
            count++
        }
    }
}

class Node{
    constructor(data,next,prev){
        this.data=data;
        this.next=next;
        this.prev=prev;
    }
}

let ll=new Linkedlist();
ll.addTohead(11)
ll.addTohead(12)
ll.addTohead(13)
ll.addTotail(20)

console.log(ll.search(27))
console.log(ll.search(12))
console.log(ll.indexno(11))
