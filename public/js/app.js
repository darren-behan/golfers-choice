$(document).ready(function () {
  // Getting jQuery references to the form elements required
  const nameInput = $("#golf-club-name");
  const addressInput = $("#golf-club-address");
  const holesInput = $("#golf-club-holes");
  const parInput = $("#golf-club-par");
  const lengthInput = $("#golf-club-length");
  const membersInput = $("#golf-club-members");
  const memFeeInput = $("#golf-club-mem-fee");
  const sumGreenFeeInput = $("#golf-club-sum-green-fee");
  const gcForm = $("#golf-club");

  // Adding an event listener for when the form is submitted
  $(gcForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();

    // Constructing a newGolfClub object to hand to the database
    const newGolfClub = {
      name: nameInput.val().trim(),
      address: addressInput.val().trim(),
      holes: holesInput.val().trim(),
      par: parInput.val().trim(),
      length: lengthInput.val().trim(),
      members: membersInput.val().trim(),
      memFee: memFeeInput.val().trim(),
      sumGreenFee: sumGreenFeeInput.val().trim(),
    };

    // run submitPost to create a whole new golf club
    submitGolfClub(newGolfClub);
  });
  
  // Submits a new golf club
  function submitGolfClub(golfClub) {
    $.post("/api/golfclub", golfClub, function () {
      console.log(golfClub);
    });
  }
});
