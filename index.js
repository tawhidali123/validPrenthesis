// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.


// questions?
// can {} () {] [] be valid if there is one error?



let validParenthesis = function(str) {
  // break string to an array
  let arrayOfChars = str.split('')


  // second item in array should be the opposite of first item ex 1.'('   2. ')'
  let keyValues = {
    object: {
      open: '{',
      close: '}'
    },
    parenthesis: {
      open: '(',
      close: ')'
    },
    array: {
      open: '[',
      close: ']'
    }
  }


  let currentChar = []

  for(let char of arrayOfChars) {
    if(char === keyValues.object.open || char === keyValues.parenthesis.open || char === keyValues.array.open) {
      currentChar.push(char)

    } else if(char === keyValues.object.close || char === keyValues.parenthesis.close || char === keyValues.array.close) {
      currentChar.push(char)

    } else {
      return false

    }

  }

  return currentChar






}

validParenthesis('[[]]{}')