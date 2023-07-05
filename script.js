function verifyAge() {
  var age = prompt("Are you 18 years or older? (Yes/No)").toLowerCase();
  
  if (age === "yes") {
    window.location.href = "details.html"; // Redirect to the details page
  } else {
    alert("You must be 18 or older to play the Slot Machine.");
  }
}

function noAccess() {
  alert("You must be 18+...");
}