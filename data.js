
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


// Whenever a user clicks the submit-bid
// $("#submit-bid").on("click", function(event) {

$("#add-employee").click(function(){
  event.preventDefault()

  var name = $("#new-employee").val().trim()
  var role = $("#new-role").val().trim()
  var startDate = $("#start-date").val().trim()
  var monthlyRate = parseInt($("#monthly-rate").val().trim())
})

console.log(name);
console.log(role);

function monthDiff(d1, d2) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth() + 1;
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

var monthsWorked = monthDiff(new Date(startDate)  , new Date() )

console.log(monthsWorked);
var totalBilled = monthsWorked * monthlyRate
console.log(totalBilled);


firebase.ref().push({
  name : name,
  role : role,
  startDate : startDate,
  monthsWorked : monthsWorked,
  monthlyRate : monthlyRate,
  totalBilled : totalBilled


})
