/* eslint-disable react-hooks/exhaustive-deps */





export default function Facts(){

    const mathFacts = [
        "The sum of the first n prime numbers is always greater than n².",
        "The square root of 2 is irrational.",
        "A Pythagorean triple is a set of three whole numbers that satisfy a² + b² = c².",
        "The golden ratio (φ) is approximately 1.618033.",
        "A number is divisible by 11 if the alternating sum of its digits is divisible by 11.",
        "Euler’s number 'e' is approximately 2.71828.",
        "There are infinitely many prime numbers.",
        "Hexagonal numbers follow the formula n(2n - 1).",
        "Fermat's Last Theorem states a³ + b³ = c³ has no solutions for n > 2.",
        "A perfect number's divisors sum to the number itself (e.g., 6).",
        "The Collatz conjecture involves halving even numbers and tripling odd ones.",
        "1729 is the smallest number expressible as the sum of two cubes in two ways.",
        "Pi (π) appears in the formula for the area of a circle: A = πr².",
        "The Sieve of Eratosthenes is an efficient way to find primes.",
        "A Möbius strip has only one side and one edge.",
        "Transcendental numbers are not the root of any polynomial with rational coefficients.",
        "Banach-Tarski Paradox claims you can split a sphere into two identical ones.",
        "A mathematical palindrome is a number that reads the same forwards and backwards.",
        "Fractals are self-similar shapes at every scale.",
        "A Hamiltonian cycle visits each vertex of a graph exactly once and returns to the start."
      ];
      

      



 
return <div className="py-16 bg-[#020817]">


<p className="text-2xl md:text-4xl text-indigo-400  text-italic text-center"> {"Maths facts for the day"}</p>

<div className="w-full rounded-xl mt-4  p-2 text-center   text-white">
    
  <p className="mt-4 text-lg font-satisfy text-green-300 md:text-2xl"> {mathFacts[20*Math.random()]}</p> 
</div>




</div>

}