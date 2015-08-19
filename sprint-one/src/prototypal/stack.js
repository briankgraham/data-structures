var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.sizeVar = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};
stackMethods.size = function () {
  return this.sizeVar;
};
stackMethods.push = function (value) {
  this.storage[this.sizeVar] = value;
  this.sizeVar++;
};
stackMethods.pop = function () {
  var result;
  if (this.sizeVar > 0) {
    result = this.storage[this.sizeVar-1];
    delete this.storage[this.sizeVar-1];
    this.sizeVar--;
  }
  return result;
};


