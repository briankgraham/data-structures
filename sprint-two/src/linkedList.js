var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head===null)
    {
      list.head = newNode;
      list.tail = newNode;
    }
    list.tail.next = newNode;
    list.tail = newNode;
  };

  list.removeHead = function(){
    var oldHeadValue = list.head.value;
    var newHead = list.head.next;
    delete list.head;
    list.head = newHead;
    return oldHeadValue;
  };

  list.contains = function(target){
    var nodePointer = list.head;
    while(nodePointer)
    {
      if(nodePointer.value === target)
        return true;
      nodePointer = nodePointer.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
