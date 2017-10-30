var TotalScore = 0;
var wins = 0;
var losses = 0;
var ValueChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

 $("#win").text(wins);
 $("#loss").text(losses);

function randomNumbers (){
	crystalValues = ValueChoices.sort(function() {return 0.5 - Math.random()});
	yellowValue = crystalValues[1];
	blueValue = crystalValues[2];
	redValue = crystalValues[3];
	multiValue = crystalValues[4];
}


function randomNumberFromRange() {
    randomNumber = Math.floor(Math.random()*101 + 19);
};

function reset(){
	TotalScore = 0;
	randomNumbers();
	randomNumberFromRange();
	$("#random").text(randomNumber);
	$("#score").text(TotalScore);
	
};

reset();


  $("#yellow").on("click", function() {
  		TotalScore = TotalScore + yellowValue;
  		$("#score").text(TotalScore);

   		if (TotalScore === randomNumber){
   			reset();
   			wins++;
   			alert("You Win!");
   			$("#win").text(wins);
   		}
   		else if ( TotalScore >= randomNumber) {
   			reset();
   			losses++;
   			alert("you lose");
   			$("#loss").text(losses);
   }
  });

    $("#blue").on("click", function() {
  	TotalScore = TotalScore + blueValue;
  	$("#score").text(TotalScore);

 
   		if (TotalScore === randomNumber){
   			reset();
   			wins++;
   			alert("You Win!");
   			$("#win").text(wins);
   		}
   		else if ( TotalScore >= randomNumber) {
   			reset();
   			losses++;
   			alert("you lose");
   			$("#loss").text(losses);
   }
 });

     $("#multi").on("click", function() {
  	TotalScore = TotalScore + multiValue;
  	$("#score").text(TotalScore);


   		if (TotalScore === randomNumber){
   			reset();
   			wins++;
   			alert("You Win!");
   			$("#win").text(wins);
   		}
   		else if ( TotalScore >= randomNumber) {
   			reset();
   			losses++;
   			alert("you lose");
   			$("#loss").text(losses);
   }
  });

    $("#red").on("click", function() {
  	TotalScore = TotalScore + redValue;
  	$("#score").text(TotalScore);

  
   		if (TotalScore === randomNumber){
   			reset();
   			wins++;
   			alert("You Win!");
   			$("#win").text(wins);
   		}
   		else if ( TotalScore >= randomNumber) {
   			reset();
   			losses++;
   			alert("you lose");
   			$("#loss").text(losses);
   }
  });