// find the greatest common divisor of the two numbers given

var gcd = function (n, n2) {
  var r = 0;
  while (n !== 0) {
    r = n2 % n;
    n2 = n;
    n = r;
  }
  return n2;
};

console.log(gcd(12, 64));