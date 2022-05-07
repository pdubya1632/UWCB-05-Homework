$(function () {
  // show current day in header
  $("#currentDay").html(dayjs().format("dddd, MMMM D"));

  // insert all previous entries
  // for (var i = 0; i < localStorage.length; i++){
  //     $( "body" ).append(localStorage.getItem(localStorage.key(i)));
  // };
});

// color code time blocks
// const currentHour = dayjs().format('hA');
const currentHour = dayjs().add(10, "h").format("HA");
console.log(currentHour);
if ($("#" + currentHour)) {
  $("#" + currentHour)
    .find("input[type=text]")
    .css("background-color", "red");
  // make all inputs *after* get a green bg
}

// log new day entry
$("button").click(function () {
  let key = $(this).closest("div").attr("id");
  let entry = $(this).prev().val();
  localStorage.setItem(key, entry);
});
