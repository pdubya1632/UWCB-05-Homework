
// show current day in header
$("#currentDay").html(dayjs().format('dddd, MMMM D'));

// color code time blocks
// const currentHour = dayjs().format('hA');
const currentHour = dayjs().add(9, 'h').format('Ha');
if ($( "#" + currentHour )) {
    $( "#" + currentHour ).find("input[type=text]").css('background-color', 'red');
};

// insert all previous entries
for (var i = 0; i < localStorage.length; i++){
    $('body').append(localStorage.getItem(localStorage.key(i)));
};

// log new day entry
$( "button " ).click(function() {
    let key = $(this).closest('div').attr('id');;
    let entry = $(this).prev().val();
    localStorage.setItem(key , entry);
});