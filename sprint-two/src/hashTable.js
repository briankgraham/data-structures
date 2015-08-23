var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.redistribute = function(bucket) {
  if(!bucket) return;
  
  for(var i = 0; i < bucket.length; i++) {    
    this.insert(bucket[i][0], bucket[i][1]);  
  }
};

HashTable.prototype.resize = function(limit) {
  var oldStorage = this._storage;

  this._limit = limit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  debugger;
  oldStorage.each(this.redistribute.bind(this));
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];

  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket[j][1] = v;
      return;
    }
  }
  bucket.push([k,v]);
  this._storage.set(i, bucket);
  this._size++;
  if(this._size > 0.75 * this._limit) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for(var j = 0; j < bucket.length; j++) {
    if(bucket[j][0] === k) {
      return bucket[j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket.splice(j,1);
      this._size--;
      if((this._size < 0.25*this._limit) && this._limit !== 8) {
        this.resize(this._limit / 2);
      }
      return;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
