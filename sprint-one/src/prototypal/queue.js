var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = Object.create(queueMethods);
  newQueue.sizeVar = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.sizeVar;
};

queueMethods.enqueue = function(value) {
  this.storage[this.sizeVar] = value;
  this.sizeVar++;
};

queueMethods.dequeue = function() {
  var result;
  if(this.sizeVar > 0)
  {
    result = this.storage[0];
    for(var i = 1; i < this.sizeVar; i++)
    {
      this.storage[i-1] = this.storage[i];
    }
    this.sizeVar--;
    delete this.storage[this.sizeVar];
  }
  return result;
};



