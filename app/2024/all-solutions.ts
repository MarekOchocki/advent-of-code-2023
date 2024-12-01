import { printSolutions1 } from './solutions/solution1';
import { printSolutions2 } from './solutions/solution2';

function printSolution(day: number, solution: () => void): void {
  console.log(`\nDay ${day}`);
  solution();
}

export function printAll2024Solutions() {
  const solutions = [
    printSolutions1,
    printSolutions2
  ]
  console.log(`\n----------------- Edition 2024: `);
  solutions.forEach((sol, i) => printSolution(i + 1, sol));
}