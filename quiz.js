'use strict';
$(document).ready(function(){
  var questions = [{
    question: 'Which is a primitive type in javascript?',
    choices: ['int', 'number', 'float', 'double'],
    correctAnswer: 1
  },
  {question: "Who is Prime Minister of the United Kingdom?", 
    choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
    correctAnswer:0
  }];
  
  var questionDiv =  document.getElementById('question');
  
  var cur = 0;
  var wrong = 0;
  function showScore(){
    $('#quiz').text("Your score is " + (cur-wrong) +"!");
  }
  function loadNextQuestion(){
    console.log("loading next question");
    $('#question').text(questions[cur].question);
    var choicesDiv = $('#choices');
    choicesDiv.empty();
    questions[cur].choices.forEach(function(c, index){
      var line = "<li><input type='radio' name='choices' value="+index+">" + c + "</input></li>";
      choicesDiv.append(line);
    });
    cur +=1;
  }
  loadNextQuestion();
  $('#answer').on('click', function(){
    if($('input[name=choices]:checked').val() == questions[cur-1].correctAnswer){
      if(cur<questions.length){
        loadNextQuestion();
      }else{
        showScore();
      }
    }else{
      wrong++;
      alert("Wrong!");
    }
  });
});
