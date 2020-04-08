var config = {
    apiKey: "AIzaSyB-eEpK6H8cDGxJHyK3j-rfW7752fSSXxE",
    authDomain: "train-time-e3c13.firebaseapp.com",
    databaseURL: "https://train-time-e3c13.firebaseio.com",
    projectId: "train-time-e3c13",
    storageBucket: "train-time-e3c13.appspot.com",
}

firebase.initializeApp(config);
var database = firebase.database();

var name = "";
var dest = "";
var firstTrain = "";
var frequency = "";
var nextArrival = "";
var minAway = "";

  