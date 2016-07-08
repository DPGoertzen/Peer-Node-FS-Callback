var fs = require('fs');




function parseText(callback){
  var highestNum = 0;
  var lowestNum = 0;
  var averageNum = undefined;
  var runningTotal = 0;
  fs.readFile('numbers.txt', 'utf-8', function(err, fileContents){
    var numberArray = fileContents.split(", ");
    for(var i = 0; i < numberArray.length; i++){
      numberArray[i] = parseInt(numberArray[i]);
    }
    numberArray.sort(function(a, b){return a-b});
    lowestNum = numberArray[0];
    highestNum = numberArray[numberArray.length - 1];
    for(i = 0; i < numberArray.length; i++){
      runningTotal+= numberArray[i];
    }
    averageNum = Math.round(runningTotal / numberArray.length);
    // console.log(numberArray);
    callback(highestNum, lowestNum, averageNum);
  });
}




function done(highestNum, lowestNum, averageNum){
  console.log('highestNum', highestNum);
  console.log('lowestNum', lowestNum);
  console.log('averageNum', averageNum);
}

parseText(done);
