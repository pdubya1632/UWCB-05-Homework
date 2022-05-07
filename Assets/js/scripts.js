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
            .find("input[type=text]")
            .val(entryText);
    };

    // grab current hour
    const currentHour = dayjs().format('hA');
    //const currentHour = dayjs().add(10, "h").format("HA");
    console.log("Current hour: " + currentHour);

    // if current hour exists in calendar
    if ($("#" + currentHour)) {
        
        // set current hour variable
        const currentHourInput = $("#" + currentHour);

        // give current house input a red bg
        currentHourInput
            .find("input[type=text]")
            .css("background-color", "#50AD51");

        // make all inputs *after* get a green bg
        currentHourInput
            .nextAll("div")
            .find("input[type=text]")
            .css("background-color", "#6FAB70");
    
    }

});

// log new day entry upon hitting save
$("button").click(function () {
  let key = $(this).closest("div").attr("id");
  let entry = $(this).prev().val();
  localStorage.setItem(key, JSON.stringify(entry));
});
