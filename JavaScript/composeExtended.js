let compose = (f1, f2) => (...args) => f2(f1.apply(null, args));

let s = 'MARCUS AURELIUS';
console.log(s);
console.log('lower(' + s + ') = ' + lower(s));
console.log('upperCapital(' + s + ') = ' + upperCapital(s));

let capitalize = compose(lower, upperCapital);
console.log('capitalize(' + s + ') = ' + capitalize(s));

function upperCapital(s) {
  return s.replace(/\w+/g, function(word) {
    return word.charAt(0).toUpperCase() + word.substr(1);
  });
}

function lower(s) {
  return typeof(s) === 'string' ? s.toLowerCase() : '';
}
