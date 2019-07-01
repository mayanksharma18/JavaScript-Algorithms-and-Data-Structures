//Every Single linked list will have nodes which will only have next pointer .

//Creating a node

class Node {
    constructor(data){
        this.data=data;
        this.next=null;              //initial an empty linked list
   }
}

//As linkedlist are collection of nodes let us create linked list .

class Singlelinkdelist{
 constructor(){
     this.head=null                   //Linked list have  head which defines starting point of list
     this.length=0;                   //keep track of length of ll.
 }
 add(data) {                              //add methods to add any new node in the list
  var node =new Node(data)            //create an instance of Node
  var current;                       //Current is used to iterate through the list after every iteration we update it to be the next of the current node. 
                           
  if(this.head===null){               //If the list is empty then add an element and it will be head
    this.head=node;                   //set current node as head;
  }
  else{
      current=this.head;

      while(current.next){           //travesring to the tail of list 
          current=current.next;      
      }
      current.next=node;            //adding node to the pointer of last node
      this.length++
  }

 }
}

var LL=new Singlelinkdelist();
LL.add(12);
LL.add(13);
LL.add(14)
LL.add(15);
LL.add(16);
LL.add(17);
console.log(LL.head.nextSibling)