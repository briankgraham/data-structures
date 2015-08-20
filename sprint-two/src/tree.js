var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var childTree = new Tree(value);
  if (!this.children) {
    this.children = [];
  }   
  this.children.push(childTree);
};

treeMethods.contains = function(target){
  
  var recursiveHelper = function (tree) 
  {
    if(tree.value === target)
      return true;
    
    if (tree.children === null)
      return false;
    
    for(var i = 0; i < tree.children.length; i++)
    {
      if (recursiveHelper(tree.children[i])) {
        return true;
      }
    }
    
    return false;
  }

  return recursiveHelper(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
