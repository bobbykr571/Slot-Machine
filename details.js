document.getElementById("details-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve values from the form
    var name = document.getElementById("name").value;
    var points = parseInt(document.getElementById("points").value);
  
    // Save the values to local storage
    localStorage.setItem("name", name);
    localStorage.setItem("points", points);
  
    // Redirect to the slot machine page
    window.location.href = "slot_machine.html";
  });
  