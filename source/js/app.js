/* global moment, sr, ScrollReveal, intercomSettings */
/* eslint no-inner-declarations: 'off', no-unused-vars: 'off' */
/*
// Libs
@codekit-prepend '../../node_modules/jquery/dist/jquery.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.core.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.box.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.motion.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.triggers.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.keyboard.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.touch.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.motion.min.js';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.offcanvas.min.js';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.smoothScroll.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.magellan.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.slider.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.accordion.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.tabs.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.reveal.min.js';
@codekit-prepend 'lib/jquery-select7';
@codekit-prepend '../../node_modules/moment/moment';
@codekit-prepend '../../node_modules/moment-timezone/builds/moment-timezone-with-data-2012-2022.min';
@codekit-prepend '../../node_modules/jquery-countdown/dist/jquery.countdown.min';
@codekit-prepend '../../node_modules/owl.carousel/dist/owl.carousel.min';
@codekit-prepend '../../node_modules/scrollreveal/dist/scrollreveal.min';

// Modules
@codekit-append 'includes/_countdown';
@codekit-append 'includes/_form';
@codekit-append 'includes/_eye';
*/

// Animations
window.sr = ScrollReveal();
sr.reveal('.head .social li', { delay: 300, duration: 200 }, 60);
sr.reveal('.use_cases .use_cases_cases .column', { delay: 300, duration: 200 }, 60);
sr.reveal('.about_graph_timeline_arrow.is_tooltip', { delay: 300, duration: 250 });
sr.reveal('.ico_box .ico_box_offer', { delay: 300, duration: 250 }, 60);
sr.reveal('.token_distr_small .token_distr_stat_perc', { delay: 300, duration: 250 }, 100);
sr.reveal('.roadmap_table_hint', { delay: 300, duration: 250 });
sr.reveal('.footer .social li', { delay: 100, duration: 150 }, 60);

sr.reveal('.about .hexagon--4 .hexagon_hex', { delay: 250, duration: 700 }, 300);
sr.reveal('.about .hexagon--3 .hexagon_hex', { delay: 250, duration: 700 }, 300);
sr.reveal('.whitepaper .hexagon--6 .hexagon_hex', { delay: 250, duration: 700 }, 300);
sr.reveal('.services .hexagon--1 .hexagon_hex', { delay: 250, duration: 700 }, 300);
sr.reveal('.services .hexagon--2 .hexagon_hex', { delay: 250, duration: 700 }, 300);
sr.reveal('.products .hexagon--4 .hexagon_hex', { delay: 250, duration: 700 }, 300);
sr.reveal('.ico .hexagon--3 .hexagon_hex', { delay: 250, duration: 700 }, 300);
sr.reveal('.token_info .hexagon--6 .hexagon_hex', { delay: 250, duration: 700 }, 300);
sr.reveal('.token_info .hexagon--1 .hexagon_hex', { delay: 250, duration: 700 }, 300);
sr.reveal('.roadmap .hexagon--3 .hexagon_hex', { delay: 250, duration: 700 }, 300);
sr.reveal('.roadmap .hexagon--2 .hexagon_hex', { delay: 250, duration: 700 }, 300);
sr.reveal('.press .hexagon--1 .hexagon_hex', { delay: 250, duration: 700 }, 300);
sr.reveal('.kit .hexagon--1 .hexagon_hex', { delay: 250, duration: 700 }, 300);
sr.reveal('.kit .hexagon--3 .hexagon_hex', { delay: 250, duration: 700 }, 300);
sr.reveal('.kit .hexagon--6 .hexagon_hex', { delay: 250, duration: 700 }, 300);
sr.reveal('.events .hexagon--1 .hexagon_hex', { delay: 250, duration: 700 }, 300);
sr.reveal('.faq .hexagon--5 .hexagon_hex', { delay: 250, duration: 700 }, 300);


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

// Countdown
const hourX = moment.tz('2018-03-01 00:00', 'America/Sao_Paulo');

// Forms
const eth_cost = 870.13;
$('[name="eth"]').keyup(function () {
    const usd = $(this).val() * eth_cost;
    $('[name="usd"]').val(usd.toFixed(2));
});
$('[name="usd"]').keyup(function () {
    const eth = $(this).val() / eth_cost;
    $('[name="eth"]').val(eth.toFixed(8));
})

$('.sign_up_form [name="country"]').change(function() {
    if($(this).val() == 'USA'){
        $('.sign_up_form_terms').addClass('hide');
        $('.sign_up_form_purpose').removeClass('hide');
        $('.sign_up_form_purpose select :eq(0)').prop('selected', true)
    } else {
        $('.sign_up_form_purpose').addClass('hide');
        $('.sign_up_form_engine').addClass('hide');
        $('.sign_up_form_terms').removeClass('hide');
        $('.sign_up_form button').removeClass('hide');
    }
})
$('.sign_up_form [name="purpose"]').change(function () {
    $('.sign_up_form_engine').removeClass('hide');
    $('.sign_up_form button').addClass('hide');
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
    if (year) {
        $('.about_graph_comment_inner').removeClass('is_visible');
        $('.about_graph_timeline_arrow').removeClass('is_tooltip');
    }
    $('.about_graph_comment--' + year).addClass('is_visible');
});

$('.about_graph_timeline_arrow').hover(function() {
    $(this).removeClass('is_tooltip');
});

// Team carousel
$('.team_members').owlCarousel({
    items: 4,
    nav: true,
    dots: false,
    navText: ['<i class="icon icon--arrow"></i>', '<i class="icon icon--arrow"></i>'],
    loop: true,
    responsive: {
        0:{
            items: 1,
            dots: true,
            nav: false
        },
        640: {
            items: 2,
            dots: false,
            nav: true
        },
        800: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});

// More items press/partners
$('[data-toggler]').click(function() {
    const button = $(this);
    $('span', button).text(button.hasClass('up') ? button.data('show-label') : button.data('hide-label'));
    button.toggleClass('up');
    $('.' + button.data('toggler')).toggleClass('hide');
});

// Fix open modal in modal
const open_new = (wold, id_new) => {
    wold.on('closed.zf.reveal', () => {
        $(id_new).foundation('open');
        wold.off('closed.zf.reveal');
    });
    wold.foundation('close');
}
$('.reveal [data-open]').click(function (e) {
    e.stopPropagation();
    open_new($(this).closest('.reveal'), '#' + $(this).data('open'));
});

// Centering mobile infographics
const scrollcenter = wnd => {
    setTimeout(() => {
        const outer = $('.reveal_infographics_img', wnd)[0].offsetWidth
        const inner = $('.reveal_infographics_img img', wnd)[0].offsetWidth;
        $('.reveal_infographics_img', wnd).scrollLeft((inner - outer) / 2);
    }, 100);
}

$('.reveal_infographics').on('open.zf.reveal', function() {
    scrollcenter(this);
});

// Notification
const rnd = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
const notify = (content, timeout) => {
    const ntf = $('.notify');
    $('.notify_content').html(content);
    ntf.addClass('is_visible');
    setTimeout(() => {
        ntf.removeClass('is_visible');
    }, timeout * 1000);
}
const ntf_interval = () => {
    setTimeout(() => {
        notify('Investor from Texas, US<br>just joined WhiteList', 4);
        ntf_interval();
    }, rnd(25, 50) * 1000);
}

ntf_interval();

// Join popup showing
if ($(document).width() >= 640 && !$('.sign_up').length){
    setTimeout(() => {
        $('#join').foundation('open');
    }, 2 * 60 * 1000);
}

$('.docs_item, .token_info .button, .whitepaper .button').click(() => {
    $('#join').foundation('open');
});

// Intercom
window.intercomSettings = {
    app_id: 'ymua2wwv'
};
(function () { var w = window; var ic = w.Intercom; if (typeof ic === 'function') { ic('reattach_activator'); ic('update', intercomSettings); } else { var d = document; var i = function () { i.c(arguments) }; i.q = []; i.c = function (args) { i.q.push(args) }; w.Intercom = i; function l() { var s = d.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = 'https://widget.intercom.io/widget/ymua2wwv'; var x = d.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x); } if (w.attachEvent) { w.attachEvent('onload', l); } else { w.addEventListener('load', l, false); } } })() 

// Call me back
var ZCallbackWidgetLinkId = '58c22e72caa2bab7e417ccdd3e42eade';
var ZCallbackWidgetDomain = 'my.zadarma.com';
(function () {
    var lt = document.createElement('script');
    lt.type = 'text/javascript';
    lt.charset = 'utf-8';
    lt.async = true;
    lt.src = 'https://' + ZCallbackWidgetDomain + '/callbackWidget/js/main.min.js';
    var sc = document.getElementsByTagName('script')[0];
    if (sc) sc.parentNode.insertBefore(lt, sc);
    else document.documentElement.firstChild.appendChild(lt);
})();