function verifyAge() {
  var age = prompt("Are you 18 years or older? (Yes/No)").toLowerCase();

  if (age === "yes") {
    return "slot_machine.html";
  } else {
    return "not_allowed.html";
  }
}

// console.log(typeof verifyAge()); // "function"

const detailsForm = document.querySelector("#details-form");

if (detailsForm) {
  detailsForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Call the verifyAge() function
    var redirectUrl = verifyAge();

    // Redirect to the appropriate page
    window.location.href = redirectUrl;
  });
}