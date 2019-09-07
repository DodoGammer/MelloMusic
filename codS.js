var words=[
"program",
"monkey",
"beautiful",
"step"
];
var word=words[Math.floor(Math.random() * words.length)];
var answerArray=[];
for(var i=0;i < word.length;i++){
	answerArray[i]="_";
}
var remainingLetters=word.length;
while(remainingLetters>0){
//	 
// 
// 
//
// 	 
alert(answerArray.join(" "));
var guess=prompt("Guess the letter,or click Cancel to exit the game.");
if(guess===null){
	break;
} else if(guess.length !== 1){
	alert("Please enter a single letter.");
} else{
	//Update
for (var j=0;j<word.length;j++){
	if(word[j]===guess){
		answerArray[j]=guess;
		remainingLetters--;
	}
}
}
}
alert(answerArray.join(""));
alert("Excellent!The guessed word is "+word);