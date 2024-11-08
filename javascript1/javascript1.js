function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function displayPrimes() {
  const n = parseInt(document.getElementById('numberInput').value);
  const resultDiv = document.getElementById('result');
  
  if (isNaN(n) || n < 2) {
    resultDiv.textContent = "Please enter an integer greater than 1.";
    return;
  }

  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  resultDiv.innerHTML = `<p>Prime numbers up to ${n}: ${primes.join(", ")}</p>`;
}
