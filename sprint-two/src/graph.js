

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodeStore = {};
  this.edgeStore = {};
};
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodeStore[node] = true;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return this.nodeStore.hasOwnProperty(node);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this.nodeStore[node];
};


// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  return !!(this.edgeStore[fromNode][toNode]);

};

// 'a': {b: true}
// 'b' : {a: true}
// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  if (typeof this.edgeStore[fromNode] === 'undefined') {
    this.edgeStore[fromNode] = {};
  } 
  this.edgeStore[fromNode][toNode] = true;
  
  if (typeof this.edgeStore[toNode] === 'undefined') {
    this.edgeStore[toNode] = {};
  }
  this.edgeStore[toNode][fromNode] = true;
  
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.edgeStore[fromNode][toNode];
  delete this.edgeStore[toNode][fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var x in this.nodeStore) {
    cb(x);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



