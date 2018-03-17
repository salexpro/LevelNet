$('.countdown_container').countdown(hourX.toDate(), function (event) {
    $(this).html(event.strftime(''
        + '<div class="countdown_digit"><div class="countdown_digit_num">%D</div><div class="countdown_digit_label">Days</div></div><div class="countdown_sep">:</div>'
        + '<div class="countdown_digit"><div class="countdown_digit_num">%H</div><div class="countdown_digit_label">Hours</div></div><div class="countdown_sep">:</div>'
        + '<div class="countdown_digit"><div class="countdown_digit_num">%M</div><div class="countdown_digit_label">Minutes</div></div><div class="countdown_sep">:</div>'
        + '<div class="countdown_digit"><div class="countdown_digit_num">%S</div><div class="countdown_digit_label">Seconds</div></div>'));
});