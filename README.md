# Roman

This small script was created to practice Test Driven Developemtn (TDD).
It allows you to input any number and it will convert it to the equivalent romant numeral.
Example:

- 1 will be trasnformed to "I"
- 15 will be transformed to "XV"

It has validations to avoid users trying to use 0, negative numbers, or numbers greater than 3,999 as the Roman numeral don't allow these numbers.

## Instalation

1. Clone this repository.
1. Install using `npm install` (requires Node 14 or higher)
1. Test it using `vite test`
1. You can convert any number using the console like `console.log(roman(15)); // output: "XV"`
