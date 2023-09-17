const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const answers = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  answers.push(answer);
  rl.close();

  const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  r2.question("What's an activity you like doing? ", (answer) => {
    answers.push(answer);
    r2.close();

    const r3 = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    r3.question("What do you listen to while doing that? ", (answer) => {
      answers.push(answer);
      r3.close();

      const r4 = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      r4.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.) ",
        (answer) => {
          answers.push(answer);
          r4.close();

          const r5 = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
          });

          r5.question(
            "What's your favourite thing to eat for that meal? ",
            (answer) => {
              answers.push(answer);
              r5.close();

              const r6 = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
              });

              r6.question(
                "Which sport is your absolute favourite? ",
                (answer) => {
                  answers.push(answer);
                  r6.close();

                  const r7 = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout,
                  });

                  r7.question(
                    "What is your superpower? In a few words, tell us what you are amazing at! ",
                    (answer) => {
                      answers.push(answer);
                      r7.close();
                      console.log(
                        `${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}`
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
