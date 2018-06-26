// Do not change any of the function names

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  if (arguments.length < 1) {
    return 0;
  } else if (arguments.length === 1) {
    return arguments[0];
  }
  const result = arguments[0];
  for(let i = 1; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
};


function invokeCallback(cb) {
  // invoke cb
  cb();
};


function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  
  /*const sumArray = (...arr) =>
  (arr.reduce((memo, val) => (memo + val)));
  const arrToCb = (cb, ...arr) => (cb(...arr));
  const result = arrToCb(sumArray, 1, 2, 3, 4, 5);
}; */
const total = 0;
for(let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
cb(total);
};

function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)

/* for (let i = 0; i < arr.length; i++) {
  cb(arr[i], i);
}
}; */
arr.forEach(fnction(element) {
  cb(element);
});
};

function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument

 /*  const mappedArr = [];
  for (let i = 0; i < arr.length; i++){
  each(arr.items => (mappedArr.push(cb(item))));
  return mappedArr;
  }
}; */
return arr.map(function(element){
  element = cb(element);
  return element;
});
};


function getUserConstructor() {
  // create a constructor called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should ha
  // ve a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the constructor
  class User {
    constructor (options ){
      this.username = options.username;
      this.name = options.name;
      this.email = options.email;
      this.password = options.passwords;
    }
    sayHi() {
      return 'Hello, my name is {{' + this.name + '}}';
    };
    };
    const userName = 'JavascriptName';
    const name = 'name';
    const email = 'email.com';
    const password = 'password';
    const me = User({
      username,
      name,
      email,
      password,
    });
  
function addPrototypeMethod(Constructor) {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!
constructor.prototype.sayHi = function() {
  return 'Hello WOrld!'
};
};

function addReverseString() {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
  string.prototype.reverse = function() {
    return thhis.split('').reverse().join('');
  };
};

function nFactorial(n) {
  // return the factorial for n
  // solve this recursively
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)

 /*  function nFactorial(num) {
    if(num === 1 || num === 0) {
      return 1;
    } else {
      let i = num - 1;
      const s = num;
      for(let i ; i > 0; i--) {
        s *= i
      }
      return s;
    } 
  }
  const ouput = nFactorial(6);
}; */
if (n > 0) {
  return n * nFactorial(n - 1);
} else {
return 1;
}
};

function cacheFunction(cb) {
  // Extra Credit
  // use closure to create a cache for the cb function
  // the function that you return should accept a single argument and invoke cb with that argument
  // when the function you return is invoked with an argument it should save that argument and its result
  // when the function you return is called again with an argument that it has seen before it should not call cb
  // but should instead directly returned the previous result
  // example:
  // cb -> function(x) { return x * x; }
  // if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
  // if the function you return is invoked again with 5 it will look on an object in the closure scope
  // and return 25 directly and will not invoke cb again

   /*  const cacheFunction = (cb) => {
    const cache = {};
    return (input) => {
      if (object.prototype.hasOwnProperty.call(cache, input))
      return cache[input];
      cache[input] = cb(input);
      return cache [input];
    }
  }; */
  const cache = [];
  return (
    function(arg) {
      if (cache .hasOwnProperty(arg)) {
        return cache[arg];
      } else {
        cache[arg] = cb(arg);
        return cache[arg];
      }
    }
  );
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments: multiplyArguments,
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
  getUserConstructor: getUserConstructor,
  addPrototypeMethod: addPrototypeMethod,
  addReverseString: addReverseString,
  nFactorial: nFactorial,
  cacheFunction: cacheFunction
};
