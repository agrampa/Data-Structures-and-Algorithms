## Hash Tables

Hash tables are used as a way to store data in an organized way. For example, letters can be converted to ASCII, then hashed to a specific index of the array. If more than one input evaluates to the same key, known as a key collision, the index of the array is represented as a doubly linked list of the keys at that specific index.

Some examples of this project can be displayed by typing `node index.js` in the terminal. There are many commands that are currently commented out, so the file can be edited and this command can be entered in the terminal again to show different outputs from these methods.

To install the developer dependencies of this repository, enter `npm i` in the command line. The dependencies include chai and mocha for testing and hacker for simulating key-value pairs in the test files.

#### Doubly Linked Lists
Doubly linked lists are composed of nodes which have reference to the previous node and the next node. If the node is the head, there will be no `next` node. If the node is the tail, there will be no `prev` node. The length is determined to be the number of nodes contained in the doubly linked list.

A new doubly linked list can be instantiated and the head and tail values will be equal to the value passed in when the first node is appended. For example, the following code:

```
const DLL = require('./lib/dll.js');
let dll = new DLL();
dll.append(1);
```

Will return the following:

```
{ head: Node { val: 1, next: null, prev: null },
  tail: Node { val: 1, next: null, prev: null },
  length: 1 }
```

Likewise, adding `dll.append(2);` will return the following:
```
{ head:
   Node {
     val: 2,
     next: null,
     prev: Node { val: 1, next: [Circular], prev: null } },
  tail:
   Node {
     val: 1,
     next: Node { val: 2, next: null, prev: [Circular] },
     prev: null },
  length: 2 }

```

#### Implementing a Hash Table with a Doubly Linked Lists
A doubly linked list can be instantiated with an empty array set to be the length determined in the constructor. For example:
```
const HashTable = module.exports = function(size=8192) {
  this.size = size;
  this.buckets = [...Array(this.size)];
};
```

A new hash table can be instantiated by entering `let hash = new HashTable();`, for example.

This printout will result in the following hash table. Please note that the size of this hash table has been reduced to a size of 8 for readability and simplicity.
```
hash { size: 8,
  buckets:
   [ undefined,
     'test value',
     undefined,
     undefined,
     undefined,
     undefined,
     undefined,
     undefined ] }
```

A value can be added to the hash table using the `.set` method. This method takes in a key and a value. For example, entering `hash.set('test key', 'test value');` will print out:
```
hash { size: 8,
  buckets:
   [ undefined,
     'test value',
     undefined,
     undefined,
     undefined,
     undefined,
     undefined,
     undefined ] }
```

A value can be retrieved using the `.get` method. This method takes in a key and returns the value. For example, entering `hash.get('test key');` will print out `test value`.

A value can be removed using the `.remove` method. This method takes in a key and removes the value located at that specific index. For example, entering `hash.remove('test key');` will return a hash table with the index again being undefined:
```
hash { size: 8,
  buckets:
   [ undefined,
     undefined,
     undefined,
     undefined,
     undefined,
     undefined,
     undefined,
     undefined ] }
```

#### Tests
To run the tests on this repository, enter `npm run test` in the terminal.

There are currently three test files:
* The file named `dll-test.js` contains tests for the doubly linked list constructor. There are currently 18 passing tests containing a total of 28 expect statements.
* The file named `hash-test.js` contains tests for the hash table that uses an array of indices for the buckets. There are currently 9 passing tests containing a total of 21 expect statements.
* The file named `dll-hash-test.js` contains tests for the hash table that uses and array of doubly linked lists for the buckets. There are currently 15 passing tests containing a total of 35 expect statements.
