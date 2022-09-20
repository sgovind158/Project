/// prime number
// n>=p
var { log } = console;
main();
function main() {
  let p = 58;

  if (p == 1) {
    return log("no it is not prime");
  }
  let ans = returnPrime(p);

  if (ans) {
    log("yes it is prime");
  } else {
    log("no it is not prime ");
  }
}

function returnPrime(p) {
  let n = 1;

  while (n ** 2 <= p) {      
    n++;
  }

  let primeArr = []; // extra space  it is n time 

  for (let i = 2; i < n; i++) {
    if (findPrime(i) == true) {
      primeArr.push(i);
    }
  }
  let primeArrLength = primeArr.length;

  //  check prime using prime Arr

  for (let i = 0; i < primeArrLength; i++) {
    

    if (p % primeArr[i] == 0) {
      return false;
    }
  }

  return true;
}

function findPrime(value) {
  let isPrime = true;

  for (let i = 2; i < value; i++) {
    if (value % i == 0) {
      return false;
    }
  }

  if (isPrime) {
    return true;
  }
}
