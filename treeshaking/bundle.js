function sayHello() {
  console.log('wassup');
}

function sayBye() {
  console.log('Bye');
}

var dep = { sayHello, sayBye };

export { dep as greets };
