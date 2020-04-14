var config = {
    apiKey: "AIzaSyB-eEpK6H8cDGxJHyK3j-rfW7752fSSXxE",
    authDomain: "train-time-e3c13.firebaseapp.com",
    databaseURL: "https://train-time-e3c13.firebaseio.com",
    projectId: "train-time-e3c13",
    storageBucket: "train-time-e3c13.appspot.com",
    messagingSenderId: "251724558937",
}

firebase.initializeApp(config);
var database = firebase.database();

var name = "";
var dest = "";
var firstTrain = "";
var frequency = "";
var nextArrival = "";
var minAway = "";

$("#submit").on("click", function(event){
    event.preventDefault();

    name = $("#name-input").val().trim();
    dest = $("#destination-input").val().trim();
    firstTrain = $("#first-train-input").val();
    frequency = $("#frequency-input").val();

    console.log(name);


    database.ref().push({
        name: name,
        dest: dest,
        firstTrain: firstTrain,
        frequency: frequency,
      });

    $(".form-control").val(""); 
});


database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().dest);
    console.log(childSnapshot.val().firstTrain);
    console.log(childSnapshot.val().frequency);

    name = childSnapshot.val().name;
    dest = childSnapshot.val().dest;
    firstTrain = childSnapshot.val().firstTrain;
    frequency = childSnapshot.val().frequency;


    var firstTrainMoment = moment(firstTrain, "HH:mm");
    console.log("TIME CONVERTED: " + firstTrainMoment);
    
    var currentTime = moment()
    console.log("Now TIME: " + currentTime);

    var minuteArrival = currentTime.diff(firstTrainMoment, 'minutes');
    var minuteLast = minuteArrival % frequency;
    var awayTrain = frequency - minuteLast;

    console.log("Minutes: " + minuteArrival);
    console.log("Minutes Last: " + minuteLast);
    console.log("Away Train: " + awayTrain);

    var nextArrival = currentTime.add(awayTrain, 'minutes');
    var arrivalTime = nextArrival.format("HH:mm");
    console.log("Away Arrival: " + nextArrival);
    console.log("Arrival Time: " + arrivalTime);

    var row = $("<tr>");

    var tdname = $("<td>");
    tdname.text(childSnapshot.val().name);

    var tddest = $("<td>");
    tddest.text(childSnapshot.val().dest);

    var tdfrequency = $("<td>");
    tdfrequency.text(childSnapshot.val().frequency);

    var tdnextArrival = $("<td>");
    tdnextArrival.html(arrivalTime);

    var tdMinutes = $("<td>");
    tdMinutes.html(awayTrain);

    row.append(tdname, tddest, tdfrequency, tdnextArrival, tdMinutes);
    $(".table").append(row);

}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
});

  
