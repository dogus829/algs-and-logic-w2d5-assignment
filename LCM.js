// find the lowest common multiple of two given numbers

var gcd = function (n, n2) {
  var r = 0;
  while (n !== 0) {
    r = n2 % n;
    n2 = n;
    n = r;
  }
  return n2;
};

function lcM (n1,n2) {
  let gcda = gcd(n1,n2);

  return (n1 * n2) / gcda;
}

console.log(lcM(2,8));
