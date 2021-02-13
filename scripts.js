$(document).ready(function() {

  // Set the default status
  let workTime = "Please select date";

  // Set the default status
  let excerciseTime = "Please select date";

  // Update workTime text
  $("td#workTime").text(workTime);

  // Update excerciseTime text
  $("td#excerciseTime").text(excerciseTime);


  // Run function when input is changed
  $("input[type=radio]").on("change", function() {

    // Call the function
    getSchedule();

  });

  function getSchedule() {

    // Get the value from checked radio button
    let selectedDay = $("input[type=radio]:checked").val();

    switch (selectedDay) {

      // If day is Monday...
      case "monday":
        workTime = "7:30 AM - 4:30 PM";
        excerciseTime = "5:00 PM - 6:00 PM";
        break;

      // If day is Tuesday...
      case "tuesday":
        workTime = "7:30 AM - 4:30 PM";
        excerciseTime = "6:00 PM - 7:00 PM";
        break;

      // If day is Wednesday...
      case "wednesday":
        workTime = "7:30 AM - 4:30 PM";
        excerciseTime = "6:15 PM - 8:00 PM";
        break;

      // If day is Thursday
      case "thursday":
        workTime = "7:30 AM - 4:30 PM";
        excerciseTime = "5:00 PM - 6:00 PM";
        break;

      // If day is Friday...
      case "friday":
        workTime = "7:30 AM - 5:30 PM";
        excerciseTime = "8:00 PM - 9:00 PM";
        break;

      // If day is Saturday...
      case "saturday":
        workTime = "No work today!";
        excerciseTime = "12:00 PM - 2:00 PM";
        break;

      // If day is Sunday...
      case "sunday":
        workTime = "No work today!";
        excerciseTime = "3:00 PM - 5:15 PM";
        break;

    }

    // Update workTime text
    $("td#workTime").text(workTime);

    // Update excerciseTime text
    $("td#excerciseTime").text(excerciseTime);


  }

});