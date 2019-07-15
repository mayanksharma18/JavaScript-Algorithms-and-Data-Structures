//Scope and Closures

//Not fully closure
function foo() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  bar();
}
foo();
bar();
//referencing a is via lexical scope look-up rules, and those rules are only (an important!) part of what closure is.

//closure;
function foo() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  return bar;
}
var bar = foo();
bar();

------------------------------

function foo() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  baz(bar);
}

function baz(fn) {
  fn();
}
------------------------------

var fn;
function foo() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  fn = bar;
}
function baz() {
  fn();
}
foo();
baz();

------------------------------

function message(msg) {
  setTimeout(function print() {
    console.log(msg), 1000;
  });
}
message("Hi");

//Module pattern

function CoolModule() {
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }
  function doAnother() {
    console.log(another.join("!"));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}

var foo = CoolModule();
foo.doAnother();
foo.doSomething();
