var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    var newKey = someInstance.size();
    storage[newKey] = value;
  };

  someInstance.pop = function(){
    var result;
    var current = -Infinity;
    for (var x in storage) {
      if (x > current) current = x;
    }
    result = storage[current];
    delete storage[current];
    return result;
  };

  someInstance.size = function(){
    var sizeCounter = 0;
    for (var x in storage) {
      sizeCounter++;
    }
    return sizeCounter;
  };

  return someInstance;
};
