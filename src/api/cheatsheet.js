/*




 filter()
 find()
 findIndex()
 forEach()
 indexOf()
 join()
 keys()
 lastIndexOf()
 map()
 pop()
 push()
 reduce()
 reduceRight()
 reverse()
 shift()
 slice()
 some()
 sort()
 splice()
 toLocaleString()
 toSource()
 toString()
 unshift()
 values()
 [@@iterator]()
 get Array[@@species]
 */

const array_methods = [

  {
    text: 'concat()',
    desc: 'The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.',

  },

  {
    text: 'copyWithin()',
    desc: 'The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.',
    es2015: true

  },

  {
    text: 'entries()',
    desc: 'The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.',
    es2015: true

  },

  {
    text: 'every()',
    desc: 'The every() method tests whether all elements in the array pass the test implemented by the provided function.',

  },

  {
    text: 'fill()',
    desc: 'The fill() method fills all the elements of an array from a start index to an end index with a static value.',
    es2015: true

  },

  {
    text: 'from()',
    desc: 'The Array.from() method creates a new Array instance from an array-like or iterable object.',
    es2015: true
  },

  {
    text: 'includes()',
    desc: 'The includes() method determines whether an array includes a certain element, returning true or false as appropriate.',
    es2016: true
  },

  {
    text: 'indexOf()',
    desc: 'The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.',

  },
  {
    text: 'isArray()',
    desc: 'The Array.isArray() determines whether the passed value is an Array.',

  },

  {
    text: 'join()',
    desc: 'The join() method joins all elements of an array into a string.',
  },
  {
    text: 'lastIndexOf()',
    desc: 'The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.',

  },

  {
    text: 'of()',
    desc: 'The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments. ',
    es2015: true

  },


  {
    text: 'pop()',
    desc: 'The pop() method removes the last element from an array and returns that element. This method changes the length of the array.',
  },
  {
    text: 'push()',
    desc: 'The push() method adds one or more elements to the end of an array and returns the new length of the array.',

  },
  {
    text: 'reverse()',
    desc: 'The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.',
  },
  {
    text: 'shift()',
    desc: 'The shift() method removes the first element from an array and returns that element. This method changes the length of the array.',

  },

  {
    text: 'slice()',
    desc: 'The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.',
  },
  {
    text: 'sort()',
    desc: 'The sort() method sorts the elements of an array in place and returns the array.',

  },
  {
    text: 'splice()',
    desc: 'The splice() method changes the content of an array by removing existing elements and/or adding new elements.',
  },
  {
    text: 'toString()',
    desc: 'The toString() method returns a string representing the specified array and its elements.',

  },
  {
    text: 'unshift()',
    desc: 'The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.',
  },
  {
    text: 'valueOf()',
    desc: 'The valueOf() method returns the primitive value of the specified object.',

  },


]

const Apples = [


  {
    text: '111concat()',
    desc: 'The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.',
  },
  {
    text: '22indexOf()',
    desc: 'The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.',

  },


]

export  {
  array_methods,
  Apples
}


