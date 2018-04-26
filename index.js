// OPENS:
// 1) Prior answers to clear when the next questions is asked
// 2) Highlighted class needs to be removed from prior answer selection- 118
// 3) Highlighted class needs to be removed from into page when quiz is re-ran- 170
// 4) Images on page 1 aren't sized



//global object and document.ready function for all
$(function(event) {
  var state = {
    currentQuestionNumber: 8,
    correctScore: 1,
    length: "",
    texture: "",
    finalQuizQuestions: [],
    correct_answer: "",
    incorrect_response: ""
  };

  //changes the color of the selection to orange and ensures that the alternate option is not orange
  $(".hair-content-length").click(function(event) {
    $(".hair-content-length").removeClass("highlighted");
    $(event.currentTarget).addClass("highlighted");
    state.length = $(event.currentTarget).attr("data-length");
    showQuizMeButton();
    // $(".quiz-me").scrollIntoView({
    //   behavior: "smooth"
    // });
  });

  $(".hair-content-texture").click(function(event) {
    $(".hair-content-texture").removeClass("highlighted");
    $(event.currentTarget).addClass("highlighted");
    state.texture = $(event.currentTarget).attr("data-texture");
    showQuizMeButton();
    // $(".quiz-me").scrollIntoView({
    //   behavior: "smooth"
    // });
  });

//shows a button to to start the quiz once two selections have been made
  function showQuizMeButton(){
    if(state.length && state.texture !=="") {
      $(".quiz-me").removeClass("hidden");
    }
  }

//calls several functions when quiz me button is clicked
  $(".quiz-me").click(function() {
    enactPageChange(1,2);
    createQuestionArray();
    displayQuizStatus();
    displayQuestionOnPage();
  })


//function that hides the current page and shows the next page
function enactPageChange(currentPageNumber, nextPageNumber) {
  $("#page-"+currentPageNumber).addClass("hidden");
  $("#page-"+nextPageNumber).removeClass("hidden");
}

//////////////page 2 functions/////////////////////////////////////////////////////////////////////////////////
//creates an array of questions based on the users selections for hair length/texture + standard universal questions
function createQuestionArray() {
  let lengthQuestions;
  let textureQuestions;

  if(state.length ==="long") {
      lengthQuestions = longQuestions;
   } else if (state.length ==="short") {
      lengthQuestions = shortQuestions;
  }
  if(state.texture ==="straight"){
      textureQuestions = straightQuestions;
  } else if (state.texture ==="curly"){
      textureQuestions = curlyQuestions;
  }
  state.finalQuizQuestions = [...universalQuestions, ...lengthQuestions, ...textureQuestions];
  console.log(state.finalQuizQuestions);
}

//displays the question number and the # of correct answers
function displayQuizStatus() {
  $(".question-number").text(`Question ${state.currentQuestionNumber+1}/10`);
  $(".correct-score").text(`Correct: ${state.correctScore}`);
}

//function that renders the question, image, and potential answers onto the page
function displayQuestionOnPage() {
  if (state.currentQuestionNumber < state.finalQuizQuestions.length) {
    let currentObject = state.finalQuizQuestions[state.currentQuestionNumber];
    $(".question-text").text(currentObject.question);
    $(".question-image").attr("src", currentObject.image);
      for(let i = 0; i < currentObject.answers.length ; i ++) {
          $("#answer-option-"+i).text(currentObject.answers[i]);
      }
      //changes the color of the selection to orange, logs the answer & associated properties to the global object
        $(".answer").click(function(event) {
          $(".answer").parent().removeClass("highlighted");
          $(event.target).parent().addClass("highlighted");
          state.userAnswer = $(event.target).attr("value");
          state.correct_answer = currentObject.correct_answer;
          state.incorrect_response = currentObject.incorrect_response;
        })
    } else {
      displayFinalQuizResults();
    };
   }

//calls several functions when submit button is clicked
  $(".submit").click(function() {
    enactPageChange(2,3)
    checkAnswer();
    displayAnswerResults();
    displayQuizStatus();
    //$(event.target).parent().removeClass"highlighted");//need to get this working so it isn't held over from last click..same as 170
  })

////////////////page 3 functions/////////////////////////////////////////////////////////////////////////////////
//function to see if they got the answer right or wrong
 function checkAnswer(event) {
   if(state.userAnswer === state.correct_answer) {
     return true;
    } else {
      return false;
   };
  }

//determines what image and response should be displayed on page-3
  function displayAnswerResults() {
    if (checkAnswer() === true) {
      state.correctScore++;
      $(".response-images").attr('src', "images/correct_answer.jpg");
      $(".response-answer > h2").text("Correct, go ahead twirl that hair!");
    } else {
      $(".response-images").attr('src', "images/incorrect_answer.jpg");
      $(".response-answer > h2").text(`Incorrect, ${state.incorrect_response}`);
    };
   }

//moves the quiz forward
$(".next").click(function() {
  state.currentQuestionNumber++;
  enactPageChange(3,2);
  displayQuizStatus();
  displayQuestionOnPage();
  // state. something here to clear the input fields text
})

////////////////page 4 functions///////////////////////
//displays the results of the quiz
function displayFinalQuizResults() {
  enactPageChange(2,4);
  $(".final-score").text(`You got ${state.correctScore}/10 Correct`);
  if (state.correctScore >= 8) {
      $(".final-message").text("You're a hair ROCKSTAR!!");
    } else if
    (state.correctScore >= 4) {
      $(".final-message").text("You need some help, start talking to your stylist about your hair needs during your appointment");
    } else {
      $(".final-message").text("You're in need of some serious hair 101. Fire your stylist, they should be educating you on some of these things");
    }
}

//resets score stats and takes user to first page
  $(".retake-quiz").click(function() {
    enactPageChange(4,1);
    //$(event.target).parent().removeClass"highlighted");//need to get this working so it isn't held over from last click...same as row118
    state.correctScore =  0;
    state.currentQuestionNumber = 0;
  })

}); //closes the global object function
