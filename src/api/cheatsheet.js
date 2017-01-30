

const array_methods = [

  {
    text: "concat()",
    desc: "The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array."

  },

  {
    text: "copyWithin()",
    desc: "The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.",
    es2015: true

  },

  {
    text: "entries()",
    desc: "The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
    es2015: true

  },

  {
    text: "every()",
    desc: "The every() method tests whether all elements in the array pass the test implemented by the provided function."

  },

  {
    text: "fill()",
    desc: "The fill() method fills all the elements of an array from a start index to an end index with a static value.",
    es2015: true

  },

  {
    text: "filter()",
    desc: "The filter() method creates a new array with all elements that pass the test implemented by the provided function."

  },

  {
    text: "find()",
    desc: "The find() method returns a value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.",
    es2015: true

  },

  {
    text: "findIndex()",
    desc: "The findIndex() method returns an index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.",
    es2015: true

  },

  {
    text: "forEach()",
    desc: "The forEach() method executes a provided function once for each array element."

  },

  {
    text: "from()",
    desc: "The Array.from() method creates a new Array instance from an array-like or iterable object.",
    es2015: true
  },

  {
    text: "includes()",
    desc: "The includes() method determines whether an array includes a certain element, returning true or false as appropriate.",
    es2016: true
  },

  {
    text: "indexOf()",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },

  {
    text: "join()",
    desc: "The join() method joins all elements of an array into a string."
  },

  {
    text: "keys()",
    desc: "The keys() method returns a new Array Iterator that contains the keys for each index in the array.",
    es2015: true
  },

  {
    text: "lastIndexOf()",
    desc: "The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex."

  },

  {
    text: "map()",
    desc: "The map() method creates a new array with the results of calling a provided function on every element in this array."

  },

  {
    text: "pop()",
    desc: "The pop() method removes the last element from an array and returns that element. This method changes the length of the array."
  },

  {
    text: "push()",
    desc: "The push() method adds one or more elements to the end of an array and returns the new length of the array."

  },

  {
    text: "reduce()",
    desc: "The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value."

  },

  {
    text: "reduceRight()",
    desc: "The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) has to reduce it to a single value."

  },

  {
    text: "reverse()",
    desc: "The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first."

  },

  {
    text: "shift()",
    desc: "The shift() method removes the first element from an array and returns that element. This method changes the length of the array."

  },

  {
    text: "slice()",
    desc: "The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified."
  },

  {
    text: "some()",
    desc: "The some() method tests whether some element in the array passes the test implemented by the provided function."
  },

  {
    text: "sort()",
    desc: "The sort() method sorts the elements of an array in place and returns the array."

  },

  {
    text: "splice()",
    desc: "The splice() method changes the content of an array by removing existing elements and/or adding new elements."
  },

  {
    text: "toLocaleString()",
    desc: "The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”)."
  },

  {
    text: "toString()",
    desc: "The toString() method returns a string representing the specified array and its elements."

  },


  {
    text: "unshift()",
    desc: "The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array."
  },



  {
    text: "isArray()",
    desc: "The Array.isArray() determines whether the passed value is an Array."

  },



  {
    text: "of()",
    desc: "The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments. ",
    es2015: true

  },




]

const keywords = [


  {
    text: "break",
    desc: "The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array."
  },
  {
    text: "case",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },

  {
    text: "catch",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "class",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "const",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "continue",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "debugger",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "default",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },  {
    text: "delete",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "do",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "else",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "export",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "extends",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "finally",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "for",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "function",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "import",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "in",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "instanceof",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "let",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "new",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "return",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "super",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "switch",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "this",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "throw",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "try",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "typeof",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "var",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "void",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "while",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "with",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },
  {
    text: "yield",
    desc: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."

  },

]

export  {
  array_methods,
  keywords
}
