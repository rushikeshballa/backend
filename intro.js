
const questionsData = Array.from({ length: 40 }, (_, index) => ({
    section: Math.floor(index / 10) + 1, // Calculate section (1 to 4)
    number: index + 1,
    question: "Guess the output of the following program (Question ${index + 1})",
    code: `
          #include <stdio.h>
          int main() {
          int x = 10;
          float y = 10.0;
          if(x == y)
          printf("x and y are equal");
          else
      printf("x and y are not equal");
    return 0;
  }
  `,
    options: ['x and y are not equal', 'x and y are equal', 'Run time error', 'Syntax error'],
  }
));
console.log(questionsData);
