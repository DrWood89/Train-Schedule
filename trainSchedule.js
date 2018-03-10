


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCSG5Ku12hx_PgbmM8qVqwT7CcNC1RkW8w",
    authDomain: "railway-station-train-schedule.firebaseapp.com",
    databaseURL: "https://railway-station-train-schedule.firebaseio.com",
    projectId: "railway-station-train-schedule",
    storageBucket: "railway-station-train-schedule.appspot.com",
    // messagingSenderId: "646667227016"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // 2. Button for adding Employees
$("#addTrain").on("click", function(event) {
    event.preventDefault();


  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var firstTime = $("#first-train-input").val().trim();
  var trainFrequency = $("#frequency-input").val().trim();
 
  // Creates local "temporary" object for holding train data
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    frequency: trainFrequency,
    firstTime: firstTime
  };
  // Uploads employee data to the database
  database.ref().push(newTrain);
  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.frequency);
  console.log(newTrain.firstTime);

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");

});


// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var firstTime = childSnapshot.val().firstTime;
    var trainFrequency = childSnapshot.val().frequency;
    
      // First Time (pushed back 1 year to make sure it comes before current time)
      var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
      console.log(firstTimeConverted);
      // Current Time
      var currentTime = moment();
      console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
      // Difference between the times
      var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
      console.log("DIFFERENCE IN TIME: " + diffTime);
      // Time apart (remainder)
      var tRemainder = diffTime % trainFrequency;
      console.log(tRemainder);
      // Minute Until Train
      var tminutesAway = trainFrequency - tRemainder;
      console.log("MINUTES TILL TRAIN: " + tminutesAway);
      // Next Train
      var nextArrival = moment().add(tminutesAway, "m");
      console.log("ARRIVAL TIME: " + moment(nextArrival).format("hh:mm"));

      $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFrequency + "</td><td>" +
      moment(nextArrival).format("hh:mm") + "</td><td>" + tminutesAway + "</td></tr>");
   });