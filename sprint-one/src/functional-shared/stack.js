var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {
    sizeVar: 0,
    storage: {}
  };
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.sizeVar] = value;
    this.sizeVar++;
  },
  pop: function () {
    var result;
    result = this.storage[this.sizeVar - 1];
    delete this.storage[this.sizeVar-1];
    if (this.sizeVar >= 1) this.sizeVar--;
    return result;
  },
  size: function () {
    return this.sizeVar;
  }
};


