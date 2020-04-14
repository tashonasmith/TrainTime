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
    //$(".form-control").val("");

    name = $("#name-input").val().trim();
    dest = $("#destination-input").val().trim();
    firstTrain = $("#first-train-input").val();
    frequency = $("#frequency-input").val();

    console.log(name);

    database.ref().push({
        name: name,
        dest: dest,
        firstTrain: firstTrain,
        frequency: frequency
      });


      /*database.ref().on("child_added", function(childSnapshot){
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().dest);
        console.log(childSnapshot.val().firstTrain);
        console.log(childSnapshot.val().frequency);
    
       /*var startDate = Date.parse(childSnapshot.val().date);
       console.log(startDate);*/
    
        /*var row = $("<tr>");
    
        var tdname = $("<td>");
        tdname.text(childSnapshot.val().name);
    
        var tddest = $("<td>");
        tddest.text(childSnapshot.val().dest);
    
        var tdfrequency = $("<td>");
        tdfrequency.text(childSnapshot.val().frequency);
    
        var tdnextArrival = $("<td>");
    
        var tdminutes = $("<td>");
        //tdrate.text(childSnapshot.val().frequency);
    
        row.append(tdname, tddest, tdfrequency, tdnextArrival, tdminutes);
        $(".table").append(row);
    
    }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
    }); */ 

    $(".form-control").val(""); 
});

database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().dest);
    console.log(childSnapshot.val().firstTrain);
    console.log(childSnapshot.val().frequency);

   /*var startDate = Date.parse(childSnapshot.val().date);
   console.log(startDate);*/

    var row = $("<tr>");

    var tdname = $("<td>");
    tdname.text(childSnapshot.val().name);

    var tddest = $("<td>");
    tddest.text(childSnapshot.val().dest);

    var tdfrequency = $("<td>");
    tdfrequency.text(childSnapshot.val().frequency);

    var tdnextArrival = $("<td>");

    var tdminutes = $("<td>");
    //tdrate.text(childSnapshot.val().frequency);

    row.append(tdname, tddest, tdfrequency, tdnextArrival, tdminutes);
    $(".table").append(row);

}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
});

  