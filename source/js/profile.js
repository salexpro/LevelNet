/* global moment, ClipboardJS */
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
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.accordion.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.reveal.min.js';
@codekit-prepend './lib/jquery-select7';
@codekit-prepend '../../node_modules/moment/moment';
@codekit-prepend '../../node_modules/moment-timezone/builds/moment-timezone-with-data-2012-2022.min';
@codekit-prepend '../../node_modules/jquery-countdown/dist/jquery.countdown.min';
@codekit-prepend '../../node_modules/clipboard/dist/clipboard.min';

// Modules
@codekit-append 'includes/_countdown';
@codekit-append 'includes/_form';
@codekit-append 'includes/_eye';
*/

$(document).foundation();

$('.select7').select7();

// Countdown
const hourX = moment.tz('2018-04-01 00:00', 'America/Sao_Paulo');

// Copy to clipboard
new ClipboardJS('[data-clipboard-target]');

// Purchase token 
const purchase_token = (token, wallet) => {
    $('.profile_send_header span').text(token);
    $('.profile_send_wallet [type="text"]').val(wallet);
    $('.profile_send').removeClass('hide');
}
$('.profile_currency').click(function() {
    if (!$(this).hasClass('profile_currency--small')) {
        purchase_token($(this).data('token'), $(this).data('wallet'));
    } else {
        $('.profile_send').addClass('hide');
        $('#startengine').foundation('open');
    }
});