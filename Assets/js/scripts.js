$(function () {
  // show current day in header
  $("#currentDay").html(dayjs().format("dddd, MMMM D"));

  // insert all previous entries
  for (var i = 0; i < localStorage.length; i++) {

    // grab time and entry from localStorage
    let entryHour = localStorage.key(i);
    let entryText = localStorage.getItem(entryHour);

    // find time row and set entry in input
    $("#" + entryHour)
      .find("textarea")
      .val(entryText);

  }

  // grab current hour
  const currentHour = dayjs().format("hA");
  console.log("Current hour: " + currentHour);

  // if current hour exists in calendar
  if ($("#" + currentHour)) {
    // set current hour variable
    const currentHourInput = $("#" + currentHour);

    // give current house input a red bg
    currentHourInput.prevAll(".calendar div").find("textarea").addClass("past");

    // give current hour textarea a red bg
    currentHourInput.find("textarea").addClass("present");

    // make all textarea *after* get a green bg
    currentHourInput.nextAll("div").find("textarea").addClass("future");
  }
});

// log new day entry upon hitting save
$("button").click(function () {

  var entry = $.trim($(this).prev().val());

  if (entry != "") {
    let key = $(this).closest("div").attr("id");
    localStorage.setItem(key, entry);
  }

});
