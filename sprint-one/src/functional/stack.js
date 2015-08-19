var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    var newKey = '' + someInstance.size();
    storage[newKey] = value;
  };

  someInstance.pop = function(){
    var largestKey = -1;
    for(var key in storage)
    {
      if (key > largestKey)
        largestKey = key;
    }
    var result = storage[largestKey];
    delete storage[largestKey];
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
