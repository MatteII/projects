let raceNumber = Math.floor(Math.random() * 1000);

var runnerAge = Math.floor(Math.random() * 60);
if (runnerAge <= 10) {
  runnerAge = runnerAge + 10;
} else {
  runnerAge = runnerAge;
}

var earlyRegistration = true;
//check if the number is even
if(runnerAge % 2 == 0) {
    earlyRegistration = false;
}
// if the number is odd
else {
    earlyRegistration = true;
}


if (runnerAge >= 18 && earlyRegistration === true) {
  raceNumber = raceNumber + 1000;
  console.log( 'You are runner #' + raceNumber + ' and you will race at 9:30 am.' );
} else if (runnerAge >= 18 && earlyRegistration === false) {
  console.log( 'You are runner #' + raceNumber + ' and you will race at 11:00 am.' );
} else if (runnerAge < 18) {
  raceNumber = raceNumber + 2000;
  console.log( 'You are runner #' + raceNumber + ' and you will race at 12:30 pm.' );
}