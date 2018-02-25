/* global moment */
/*
@codekit-prepend '../../node_modules/jquery/dist/jquery.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.core.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.box.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.motion.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.triggers.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.keyboard.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.touch.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.motion.min.js';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.smoothScroll.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.magellan.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.slider.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.accordion.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.tabs.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.reveal.min.js';
@codekit-prepend './lib/jquery-select7';
@codekit-prepend '../../node_modules/moment/moment';
@codekit-prepend '../../node_modules/moment-timezone/builds/moment-timezone-with-data-2012-2022.min';
@codekit-prepend '../../node_modules/jquery-countdown/dist/jquery.countdown.min';
@codekit-prepend '../../node_modules/owl.carousel/dist/owl.carousel.min';
*/

$(document).foundation();

$('.select7').select7();

// Fill top bar
if($('.head').length){
    const top_fill = () => {
        const nav = $('.nav');
        if (nav.offset().top > 40) {
            nav.addClass('is_filled');
        } else if (!$('html').hasClass('is-reveal-open')){
            nav.removeClass('is_filled');
        }
    }

    top_fill();

    $(document).scroll(() => {
        top_fill();
    });
}

// Forms
$('form[action]').submit(function(e){
    e.preventDefault();
    const action = $(this).attr('action');
    switch (action) {
        case 'join': {
            $('#complete').foundation('open');
            break;
        }
        case 'send':
        case 'complete': {
            $('#success').data('mod', action).foundation('open');
            break;
        }
        default: {
            break;
        }
    }
});

$('#success').on('open.zf.reveal', function() {
    const modal = $(this);
    const descr = $('.reveal_descr', this);
    const mod = $(this).data('mod');
    if (mod == 'join' || mod == 'complete') {
        descr.text('You’ve been added to our whitelist');
        modal.removeClass('reveal_success--min');
    } else if(mod == 'send'){
        descr.text('Request sent successfully');
        modal.addClass('reveal_success--min');
    }
})

// Countdown
var hourX = moment.tz('2018-03-01 00:00', 'America/Sao_Paulo');

$('.countdown_container').countdown(hourX.toDate(), function(event) {
    $(this).html(event.strftime(''
        + '<div class="countdown_digit"><div class="countdown_digit_num">%d</div><div class="countdown_digit_label">Days</div></div><div class="countdown_sep">:</div>'
        + '<div class="countdown_digit"><div class="countdown_digit_num">%H</div><div class="countdown_digit_label">Hours</div></div><div class="countdown_sep">:</div>'
        + '<div class="countdown_digit"><div class="countdown_digit_num">%M</div><div class="countdown_digit_label">Minutes</div></div><div class="countdown_sep">:</div>'
        + '<div class="countdown_digit"><div class="countdown_digit_num">%S</div><div class="countdown_digit_label">Seconds</div></div>'));
});

// Graph slider
$('.slider').on('moved.zf.slider', (e, el) => {
    let year, pos = $(el).attr('aria-valuenow');
    const graph_group1 = $('.about_graph_map_group--1');
    const graph_group2 = $('.about_graph_map_group--2');

    if(pos < 50){
        graph_group2.addClass('is_hide');
        graph_group1.removeClass('is_hide');
        year = '2017';
    }
    if (pos >= 50 && pos < 100) {
        graph_group1.addClass('is_hide');
        graph_group2
        .removeClass('about_graph_map_group--2019 about_graph_map_group--2020 about_graph_map_group--2021')
        .removeClass('is_hide');
        year = '2018';
    }
    if (pos >= 100 && pos < 150){
        graph_group1.addClass('is_hide');
        graph_group2
        .addClass('about_graph_map_group--2019')
        .removeClass('about_graph_map_group--2020 about_graph_map_group--2021')
        .removeClass('is_hide');
        year = '2019';
    }
    if (pos >= 150 && pos < 200) {
        graph_group1.addClass('is_hide');
        graph_group2.removeClass('is_hide');
        graph_group2
        .addClass('about_graph_map_group--2020')
        .removeClass('about_graph_map_group--2019 about_graph_map_group--2021')
        .removeClass('is_hide');
        year = '2020';
    }
    if (pos >= 200){
        graph_group1.addClass('is_hide');
        graph_group2.removeClass('is_hide');
        graph_group2
        .addClass('about_graph_map_group--2021')
        .removeClass('about_graph_map_group--2019 about_graph_map_group--2020')
        .removeClass('is_hide');
        year = '2021';
    }
    if (year) $('.about_graph_comment_inner').removeClass('is_visible');
    $('.about_graph_comment--' + year).addClass('is_visible');
})

// Team carousel
$('.team_members').owlCarousel({
    items: 4,
    nav: true,
    dots: false,
    navText: ['<i class="icon icon--arrow"></i>', '<i class="icon icon--arrow"></i>']
});

// More items press/partners
$('[data-toggle]').click(function() {
    const button = $(this);
    $('span', button).text(button.hasClass('up') ? button.data('show-label') : button.data('hide-label'));
    button.toggleClass('up');
    $('.' + button.data('toggle')).toggleClass('hide');
})