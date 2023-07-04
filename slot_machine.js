document.addEventListener("DOMContentLoaded", function () {
  var points = parseInt(localStorage.getItem("points")) || 0;
  var results = [];

  // Update the points display
  document.getElementById("points").textContent = points;
  function spin() {
    var bet = parseInt(document.getElementById("bet").value);

    // Check if the user has enough points to place the bet
    if (points < bet) {
      alert(
        "Insufficient points. Please place a lower bet or add more points."
      );
      return;
    }

    // Generate random results for each column
    results = [];
    for (var i = 0; i < 3; i++) {
      var symbols = [
        "symbol1.png",
        "symbol2.png",
        "symbol3.png",
        "symbol4.png",
        "symbol5.png",
        "symbol6.png",
      ];
      var randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      results.push(randomSymbol);
    }

    // Update the slot machine display
    var columns = document.querySelectorAll("#slot-machine .column");
    for (var j = 0; j < columns.length; j++) {
      columns[j].innerHTML = "<img src='" + results[j] + "' alt=''>";
    }

    // Check if the user won
    if (results[0] === results[1] && results[1] === results[2]) {
      points += bet * 5;
      alert("Congratulations! You won " + bet * 5 + " points.");
    } else {
      points -= bet;
      alert("Better luck next time! You lost " + bet + " points.");
    }

    // Update the points display
    document.getElementById("points").textContent = points;
  }

  document.getElementById("spin-button").addEventListener("click", spin);
});
