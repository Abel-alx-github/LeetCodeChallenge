// days: 12 - Insert Delete GetRandom O(1) - Medium leetcode challenge

/*
380. Insert Delete GetRandom O(1)
Solved
Medium

Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present.
Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present.
Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements 
(it's guaranteed that at least one element exists when this method is called). 
Each element must have the same probability of being returned.
You must implement the functions of the class such that each 
function works in average O(1) time complexity.

var RandomizedSet = function() {
  // here your solution
}

RandomizedSet.prototype.insert = function(val) {
// here your solution
}

RandomizedSet.prototype.remove = function(val) {
// here your solution
}

RandomizedSet.prototype.getRandom = function() {
// here your solution
}

*/

// Solution 1
var RandomizedSet = function() {
    constructor() 
   this.data = []; // Array to store the elements
   this.indexMap = {}; // Object to map value to its index in the array
 }


/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (this.indexMap[val] !== undefined) {
     return false; // Value already exists
   }

   // Add the value to the array and store its index
   this.indexMap[val] = this.data.length;
   this.data.push(val);
   return true;
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if (this.indexMap[val] === undefined) {
     return false; // Value not found
   }

   // Get the index of the value to remove
   const index = this.indexMap[val];
   const lastElement = this.data[this.data.length - 1]; // Get the last element

   // Move the last element to the place of the element to remove
   this.data[index] = lastElement;
   this.indexMap[lastElement] = index; // Update the index for the last element

   // Remove the last element
   this.data.pop();
   delete this.indexMap[val]; // Remove the value from the index map
   return true; 
};

/**
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
   const randomIndex = Math.floor(Math.random() * this.data.length); // Generate a random index
   return this.data[randomIndex]; // Return a random element from the array
 }




// solution 2

var RandomizedSet = function() {
  this.set = new Set();
}

RandomizedSet.prototype.insert = function(val) {
  if (!this.set.has(val)) {
    this.set.add(val);
    return true;
  }
  return false;
}

RandomizedSet.prototype.remove = function(val) {
  if (this.set.has(val)) {
    this.set.delete(val);
    return true;
  }
  return false;
}

RandomizedSet.prototype.getRandom = function() {
  const randomIndex = Math.floor(Math.random() * this.set.size);
  return Array.from(this.set)[randomIndex];
}















/** 
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/