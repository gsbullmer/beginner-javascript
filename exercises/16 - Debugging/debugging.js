const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

// Console Methods

people.forEach((person, index) => {
  console.groupCollapsed(`${person.name}`);
  console.log(person.name);
  console.log(person.cool);
  console.log(person.country);
  console.groupEnd(`${person.name}`)
});

console.table(people);

// Callstack
// bootstrap();

// Grabbing Elements
// 1. select element on a webpage
// 2. in the console, type `$0` to get the last selected item

// Breakpoints
people.forEach((person, index) => {
  //debugger;
  console.log(person.name);
});

// Scope
// peer into the value of variables at runtime

// Network Requests
// consult the `network tab` to see network requests

// Break On Attribute
// right-click on an element in the `element tab` and select `break on -> attribute modification`
// to add a new breakpoint triggered by a change in attributes

// Some Setup Code

function doALotOfStuff2() {
  console.group('Doing some stuff');
  console.log('Hey Im one');
  console.warn('watch out');
  console.error('hey');
  console.groupEnd('Doing some stuff');
}

function doctorize(name) {
  console.count(`running Doctorize for ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

function bootstrap() {
  console.log('Starting the app!');
  go();
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
