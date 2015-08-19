var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {
    sizeVar: 0,
    storage: {}
  };

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.sizeVar] = value;
    this.sizeVar++;
  },

  dequeue: function() {
    var result;
    if(this.sizeVar > 0)
    {
      result = this.storage[0];
      for(var i = 1; i < this.sizeVar; i++)
      {
        this.storage[i-1] = this.storage[i]; 
      }
      delete this.storage[this.sizeVar-1];
      this.sizeVar--;
    }
    return result;
  },

  size: function() {
    return this.sizeVar; //size
  }
};

