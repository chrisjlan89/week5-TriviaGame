 
  
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
$("#submit").hide();
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
    $("#submit").show();
}

if(timerDown == 0){
  
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