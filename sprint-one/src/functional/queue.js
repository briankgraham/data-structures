var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    sizeVar: 0
  };

  // Implement the methods below
  // itemsRemoved: 0
  someInstance.enqueue = function(value){
    someInstance[storage.sizeVar] = value;
    storage.sizeVar++;
  };

  someInstance.dequeue = function(){
    var result;

    if(storage.sizeVar >= 1)
    {
      result = someInstance[0];

      storage.sizeVar--;
      for(var i = 1; i <= storage.sizeVar; i++)
      {
        someInstance[i-1] = someInstance[i];
      }
      delete someInstance[storage.sizeVar+1];
    }

    return result; 
  };

  someInstance.size = function(){
    return storage.sizeVar;
  };

  return someInstance;
};
