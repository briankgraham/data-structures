var BinarySearchTree = function(value){
  var newBst = Object.create(BinarySearchTree.prototype);
  newBst.left = null;
  newBst.right = null;
  newBst.value = value;

  return newBst;
};

BinarySearchTree.prototype.insert = function(val) {
  
  var newBst = BinarySearchTree(val);

  var recursiveInsert = function (bst) {
    if(val < bst.value) {
      if (!bst.left) {
        bst.left = newBst;
      }
      else { 
        recursiveInsert(bst.left);
      }
    }
    else if (!bst.right) {
      bst.right = newBst;
    }
    else {
      recursiveInsert(bst.right);
    }
  } 

  recursiveInsert(this);
};

BinarySearchTree.prototype.contains = function (val) {

  var recursiveContains = function (bst) {
    if (val === bst.value) {
      return true;
    }
    
    if (val < bst.value) { 
      if (!bst.left) {
        return false;
      }
      return recursiveContains(bst.left);
    }
    
    if (!bst.right) {
      return false;
    }

    return recursiveContains(bst.right);
  };

  return recursiveContains(this);
};

BinarySearchTree.prototype.depthFirstLog = function (callback) {

  var recursiveDepth = function (bst) {
    callback(bst.value);
    if (bst.left) {
      recursiveDepth(bst.left);
    }
    else if(bst.right) {
      recursiveDepth(bst.right);
    }
  };
  recursiveDepth(this);
};  


/*
 * Complexity: What is the time complexity of the above functions?
 */
