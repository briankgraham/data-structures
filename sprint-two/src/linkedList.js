var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function (value) {
    var newNode = Node(value);
    newNode.next = list.head;
    list.head.prev = newNode;
    list.head = newNode;
  };

  list.removeTail = function () {
    var oldTailValue = list.tail.value;
    var oldTail = list.tail;
    oldTail.prev.next = null;
    list.tail = oldTail.prev;
    delete oldTail;
    return oldTailValue;
  };

  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head===null)
    {
      list.head = newNode;
      list.tail = newNode;
      return;
    }

    list.tail.next = newNode;
    newNode.prev = list.tail;
    list.tail = newNode;
  };

  list.removeHead = function(){
    var oldHeadValue = list.head.value;
    var newHead = list.head.next;
    newHead.prev = null;
    delete list.head;
    list.head = newHead;
    return oldHeadValue;
  };

  list.contains = function(target){
    var nodePointer = list.head;
    while(nodePointer)
    {
      if(nodePointer.value === target) {
        return true;
      }
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
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
