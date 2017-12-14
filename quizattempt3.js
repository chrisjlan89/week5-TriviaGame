 
  
window.onload = function() {
  $("#start-button").on("click", triviaGame.countDown );
  $("#submit").on("click", triviaGame.compareSubmit);
 //  $("#submit").on("click", triviaGame.endGame) 
  
  
};


var delayButtonAlert;
var timerDown;
var timerInterval;
var randomQ;
var answerList =[ "joker" , "kingdom", "miaymoto" , "simon" , "chrono"]
var rightGuess = 0;
var counter = 0;

var questionTime = false;
$("#submit").hide();
$("#qu1").hide();
 $("#qu2").hide();
 $("#qu3").hide();
 $("#qu4").hide();
 $("#qu5").hide();

var answer;
var triviaGame = {
  countDown : function(){
    $("#start-button").hide();
 //  $("#question-display").empty();
    timerDown = 26;
    console.log("time down : " + timerDown)
    timerInterval = setInterval(function() {
      timerDown--

      $("#question-display").html("<div class =timer>" + timerDown + "</div>");
      if (timerDown <= 0){
        console.log("clear interval called");
        clearInterval(timerInterval);
        triviaGame.compareSubmit();

      }
    }, 1000);
    if(counter == 0 ){
    $("#qu1").show();
    $("#submit").show();
   
}



 },

     //Select a question, submit and check


     compareSubmit : function() {
    
    // attempt to make the user unable to press submit
    // if a button wasn't check
    /*  if (!questionTime){
        return;
      }*/
      console.log("qu" + counter);
        var val = $('input[name=optradio' + counter+ ']:checked').val();
       // alert(val);
       console.log(val)
        
        if(val == answerList[counter]){
          rightGuess++;
          counter++;
          //triviaGame.countDown();
          console.log(rightGuess);
          clearInterval(timerInterval);
          console.log(counter)

          $("#question-display").text(" You got " + rightGuess + " / " + counter +" right. ")
            
        }








        else{
          counter++;
          //triviaGame.countDown();
           clearInterval(timerInterval);
           console.log(counter)
           $("#question-display").text(" You got " + rightGuess + " / " + counter + " right. ")

        }

        // made changes to hide the submit button from the user
        // and hide the previous question, and giving the user
        // 5 seconds to view thier score.
        $("#qu" +  counter.toString()).hide();
        $("#submit").hide();
setTimeout(function(){
        
        $("#qu" + (counter+1).toString()).show();
        $("#submit").show();

        var val;
        triviaGame.countDown();
}, 5000);      
       if(counter ==  5){
           triviaGame.endGame()
       }
        
     },
     

     endGame : function(){
      
      $("#submit").hide();
      clearInterval(timerInterval)
      $("#qu" +  counter.toString()).hide();
      $("#question-display").text("You got " + rightGuess + " / " + counter +" right. ")
      // $("#submit").on("click", triviaGame.endGame)
      
     
   }
   
};

