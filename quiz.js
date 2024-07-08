

// The values in the HTML started at 0 because arrays count from index 0
var quiz_outcome = [
  { name: "Grace Hopper",
    description: "Grace Brewster Murray Hopper was an American computer scientist and United States Navy rear admiral. One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first linkers.",
  },
  { name: "Annie Easely",
    description: "Annie J. Easley was an American computer scientist, mathematician, and rocket scientist. She worked for the Lewis Research Center of the National Aeronautics and Space Administration and its predecessor, the National Advisory Committee for Aeronautics.",
  },
  { name: "Reshma Saujani",
    description: "Reshma Saujani is an American lawyer, politician, civil servant, and the founder of the nonprofit organization Girls Who Code, which aims to increase the number of women in computer science and close the gender employment difference in that field.",
  },
  { name: "Susan Wojcicki",
    description: "Susan Diane Wojcicki is an American-Polish business executive who is the CEO of YouTube. She has been in the tech industry for over 20 years. Wojcicki was involved in the founding of Google, and became Google's first marketing manager in 1999.",
  },
  { name: "Ellen Pao",
    description: "Ellen Kangru Pao is an American investor and former CEO of social media company Reddit. Pao first became known in 2012 for filing an unsuccessful gender discrimination suit against her employer, venture capital firm Kleiner Perkins, and has continued to express vocal criticism of the hiring and promotion practices in Silicon Valley.",
  }
]

var resultText = $(".result");
var submitQuiz = $(".submit-quiz");

submitQuiz.on("click", getResult);

function getResult() {  
  // Begin counting at 0
  var total = 0; 

  // "for" loops through each question, each time with a different value, and has the syntax of --> for (statement 1; statement 2; statement 3) {code block to be executed}
    // Statement 1 is executed (one time) before the execution of the code block. Statement 2 defines the condition for executing the code block. Statement 3 is executed (every time) after the code block has been executed.
      // i is just a placeholder, starting at question 1
      // i<=3 because there's only three questions
      // i++ continue going through each questions (incrementing each time) iterates through each question
  for (var i = 1; i <= 5; i++) {

    // Because the classes for each question were named Q1OP1, Q2OP1, or Q3OP1, we can use the variable ${i} which changes the number after the Q to the question number that we are on to check
    if ($(`.Q${i}OP1:checked`).val()) {
      total += 0;
    } else if ($(`.Q${i}OP2:checked`).val()) {
      total += 1;
    } else if ($(`.Q${i}OP3:checked`).val()) {
      total += 2;
    } else if ($(`.Q${i}OP4:checked`).val()) {
      total += 3;
    } else if ($(`.Q${i}OP5:checked`).val()) {
      total += 4;
    }
  }

  // Divide by number of questions for average
  var result = (total / 5); 
  
  // Calculates and appends score and outcome selected from array
  var round = Math.round(result);
  console.log(total);
  console.log(result);
  resultText.append(`<h3>Thank you for taking the first steps to iniSHEate change in the tech industry! Congratulations; it looks like you are most like ${quiz_outcome[round].name}!</h3> <p>${quiz_outcome[round].description}</p><h4>Check out our <a href="gallery.html">iniSHEator gallery</a> for more info!</h4>`);
}

