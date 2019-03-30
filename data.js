
/* global moment firebase */

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCg20a3u29LnTkeDPf-O49j_RLZ8O-AK5o",
  authDomain: "myclass-e33ce.firebaseapp.com",
  databaseURL: "https://myclass-e33ce.firebaseio.com",
  projectId: "myclass-e33ce",
  storageBucket: "myclass-e33ce.appspot.com",
  messagingSenderId: "607751028108"
};

firebase.initializeApp(config);

var database = firebase.database()

$("#add-employee").on("click", function(){
  event.preventDefault()

  var name = $("#new-employee").val().trim()
  var role = $("#new-role").val().trim()
  var startDate = $("#start-date").val().trim()
  var monthlyRate = parseInt($("#monthly-rate").val().trim())
  var monthsWorked = monthDiff(new Date(startDate)  , new Date() )
  var totalBilled = monthsWorked * monthlyRate

  $("#new-employee").val("");
  $("#new-role").val("");
  $("#start-date").val("");
  $("#monthly-rate").val("")


  database.ref().push({
  name : name,
  role : role,
  startDate : startDate,
  monthsWorked : monthsWorked,
  monthlyRate : monthlyRate,
  totalBilled : totalBilled


})
})

function monthDiff(d1, d2) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth() + 1;
  months += d2.getMonth();
  return months <= 0 ? 0 : months;

}

var ref = database.ref()

ref.on("child_added", function(childSnapshot) {
  var newPost = childSnapshot.val();

  $("#info-area").append("<tr>")
  $("#info-area").append("<td>" + newPost.name + "</td>")
  $("#info-area").append("<td>" + newPost.role + "</td>")
  $("#info-area").append("<td>" + newPost.startDate + "</td>")
  $("#info-area").append("<td>" + newPost.monthsWorked + "</td>")
  $("#info-area").append("<td>" + newPost.monthlyRate + "</td>")
  $("#info-area").append("<td>" + newPost.totalBilled + "</td>")
  $("#info-area").append("</tr>")

});
