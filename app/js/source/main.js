(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#home').click(home);
    $('#jquery').click(jqueryMagic);
    $('#html-jade').click(htmlMagic);
    $('#java').click(javaMagic);
    $('#css').click(cssMagic);
    $('#lodash').click(lodashMagic);
    $('#git').click(gitMagic);
  }

  var questions = [
    ['flkdsajdlka;dfldsfaj', '12'],
    ['How many years has Doctor Who been around?', '50'],
    ['Which Doctor(number) wears a bow tie?', '11'],
    ['Which Doctor(number) said "Allons-y"?', '10'],
    ['How many moons does earth have?', '1'],
    ['How old is Lauren?', '22'],
    ['How old is Mitch?', '20'],
    ['How many minutes are in a hour?', '60']
  ];

  function jqueryMagic(){
    hideWelcome();
    hideItAll();
    $('#search').text('Search Jquery').show().addClass('.searchJquery');
    $('#quiz').text('Quiz Jquery').show().addClass('.quizJquery').click(produceTable).attr('name', 'jqueryQuiz');
    $('#start').attr('name','jqueryQuiz').click(chooseQs);
    $('#nameQuiz').text('Jquery Quiz');
    $('.submit').attr('name', 'jqueryAnswer').click(chooseAs);
  }

  function chooseQs(){
    //debugger;
    var name = $(this).attr('name');
    switch (name){
      case 'jqueryQuiz':
        askQuestion(questions);
    }
  }

  function askQuestion(array){
    if($('#q0').text()){
      array = array.slice(4);
      $('input').val('');
    }
    for( var i = 0; i < array.length; i++){
      $('#q' + i).text(array[i][0]);
    }
  }
  
  function chooseAs(){
   // debugger;
    var name = $(this).attr('name');
    var qIndex = $(this).data('qnum');
    switch (name){
      case 'jqueryAnswer':
        answerQuestion(questions, qIndex);
        break;
     // case 'jqueryAnswer2':
       // answerQuestion(array, 1);
       // break;
     // case 'jqueryAnswer3':
       // answerQuestion(array, 2);
       // break;
     // case 'jqueryAnswer4':
       // answerQuestion(array, 3);
    }
  }

  function answerQuestion(array, index){
   // debugger;
    var question = $('#q'+ index).text();
    var questionArray = _.filter(array, function(item){
        if(item[0]=== question){
          return item;
        }
      });
    if($('.answer' + index).val()===questionArray[0][1]){
      alert('right');
    }
    else if($('.answer' + index).val()===('')){
      alert('please answer question');
    }
    else
    {
      alert('wrong');
    }
  }

  function hideWelcome(){
    $('#welcome').hide();
  }

  function produceTable(){
    $('#tableQuestions').show();
    $('#start').show().text('New Quiz');
  }

  function hideItAll(){
    $('#start').hide();
    $('#tableQuestions').hide();
  }
  function home(){
    hideItAll();
    $('#welcome').show();
    $('#search').hide();
    $('#quiz').hide();
  }
  function htmlMagic(){
    hideWelcome();
    hideItAll();
    $('#search').text('Search HTML/Jade').show().addClass('.searchHTML/Jade');
    $('#quiz').text('Quiz HTML/Jade').show().addClass('.quizHTML/Jade').click(produceTable);
    $('#nameQuiz').text('HTML/Jade Quiz');
    //$('#start').show().click(askQuestion(questions));

  }

  function javaMagic(){
    hideWelcome();
    hideItAll();
    $('#search').text('Search Javascript').show().addClass('.searchJavascript');
    $('#quiz').text('Quiz Javascript').show().addClass('.quizJavascript').click(produceTable);
    $('#nameQuiz').text('Java Quiz');
  }

  function cssMagic(){
    hideWelcome();
    hideItAll();
    $('#search').text('Search CSS').show().addClass('.searchCSS');
    $('#quiz').text('Quiz CSS').show().addClass('.quizCSS').click(produceTable);
    $('#nameQuiz').text('CSS Quiz');

  }

  function lodashMagic(){
    hideWelcome();
    hideItAll();
    $('#search').text('Search LoDash').show().addClass('.searchLoDash');
    $('#quiz').text('Quiz LoDash').show().addClass('.quizLoDash').click(produceTable);
    $('#nameQuiz').text('LoDash Quiz');
  }

  function gitMagic(){
    hideWelcome();
    hideItAll();
    $('#search').text('Search Git').show().addClass('.searchGit');
    $('#quiz').text('Quiz Git').show().addClass('.quizGit').click(produceTable);
    $('#nameQuiz').text('Git Quiz');
  }

})();

