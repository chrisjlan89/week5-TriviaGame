 
  
window.onload = function() {
  $("#start-button").on("click", triviaGame.countDown );
  $("#submit").on("click", triviaGame.compareSubmit);
};


var delayButtonAlert;
var timerDown =31;
var timerInterval;
var randomQ;
var answerList =[ "joker" , "rough", "miaymoto"]
var rightGuess = 0;
var counter = 0;
$("#qu1").hide();
 $("#qu2").hide();
 $("#qu3").hide();

var answer;
var triviaGame = {
  countDown : function(){
    $("#question-display").empty();
    timerDown = 31;
    timerInterval = setInterval(function() {
      timerDown--
      $("#question-display").html("<div class =timer>" + timerDown + "</div>");
      if (timerDown <= 0){
        clearInterval(timerInterval);
      }}
      , 1000);
    if(counter == 0 ){
    $("#qu1").show();
}


 },

     //Select a question, submit and check


     compareSubmit : function() {
      console.log("qu" + counter);
        var val = $('input[name=optradio]:checked').val();
        alert(val);

        if(val == answerList[counter]){
          rightGuess++;
          counter++;
          triviaGame.countDown();
          console.log(rightGuess);
          clearInterval(timerInterval);
        }

        else{
          counter++;
          triviaGame.countDown();
          clearInterval(timerInterval);

        }
        $("#qu" +  counter.toString()).hide();
        $("#qu" + (counter+1).toString()).show();
      
     },


     endGame : function(){
      if(counter ==  3){
        $("#qu" +  counter.toString()).hide();
        $("#question-display").text("You got " + rightGuess + " / " + counter +"right.")
        
      }
     }
   
};

triviaGame.endGame();

/*var questions = [{
  question: "What is the name of the the main protagonist / player character of the RPG perosna 5?",
  answerList: ["Joker", "Thief", "Skull", "Trickster"],
  answer: 1
},{
  question: "Teddy Roosevelt's regiment during the 1898 Spanish American war was nicknamed what?",
  answerList: ["Bull Moose Party", "Rough Riders", "The Buffalos", "1st United States Volunteer Cavalry"],
  answer: 0

},

{
  question: "Who is considered the 'father' of The 'Legend of Zelda' Series?"
  answerList : ["Gunpei Yokoi" , "Koji Igarashi" "Shigeru Miaymoto" , "Keiji Inafune"]
  answer: 2
}
];*/




/*var triviaGame = {
  countDown : function(){
    $("#game-area").show();
    $("#jmb").hide();
    timerInterval = setInterval(function() {
      timerDown--
      $("#timer").text(timerDown);
      if (timerDown <= 0){
        clearInterval(timerInterval);
      }}
      , 1000);
    
 }
};
*/