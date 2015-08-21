var HashTable = function(limit){
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
  this.storedKeys = [];
};

//Function to create new hash table that is double the size (this._limit) of the old hash table and transfer all of the values from the old hash table to the new hash table
HashTable.prototype.copy = function(hashTable1, hashTable2)
{

}

HashTable.prototype.balance = function() {
  var expandThresh = .75;
  var contractThresh = .25;

  if (this.size >= this._limit * expandThresh) {
    var newHashTable = new HashTable(this._limit*2);


 
  }
  if (this.size < this._limit * contractThresh) {

  }
}

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage.get(i)) {
    this._storage.set(i, []);
  }

  var pointer = this._storage.get(i);

  var newTuple = [k,v];

  for(var i = 0; i < pointer.length; i++)
  {
    if(pointer[i][0] === k) {
      pointer[i][1] = v;
      return;
    }
  }
  pointer.push(newTuple);
  this.storedKey.push(k);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var pointer = this._storage.get(i);
  for(var i = 0; i < pointer.length; i++) {
    if(pointer[i][0] === k) {
      return pointer[i][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var pointer = this._storage.get(i);
  for (var i = 0; i < pointer.length; i++) {
    if (pointer[i][0] === k) {
      pointer[i][1] = null;
    }
  }
  for (var j = 0; j < this.storedKeys.length; j++)
  {
    if(this.   
      [j] == k)
      this.storedKeys.splice(k, 1);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
