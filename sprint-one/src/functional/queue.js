var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    var newKey = '' + someInstance.size();
    storage[newKey] = value;
  };

  someInstance.dequeue = function(){
    var smallestKey = Infinity;
    for(var key in storage)
    {
      if (key < smallestKey)
        smallestKey = key;
    }
    var result = storage[smallestKey];
    delete storage[smallestKey];
    return result;
  };

  someInstance.size = function(){
    var sizeCounter = 0;
    for(var key in storage)
    {
      sizeCounter++;
    }
    return sizeCounter;
  };

  return someInstance;
};
