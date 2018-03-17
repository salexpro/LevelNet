/* global open_new */
$('form[action]').submit(function (e) {
    e.preventDefault();
    const wnd = $(this).closest('.reveal');
    const action = $(this).attr('action');
    switch (action) {
        case 'join': {
            if (wnd.length) {
                open_new(wnd, '#complete');
            } else {
                $('#complete').foundation('open');
            }
            break;
        }
        case 'send':
        case 'complete': {
            $('#success').data('mod', action);
            if (wnd.length) {
                open_new(wnd, '#success');
            } else {
                $('#success').foundation('open');
            }
            break;
        }
        default: {
            break;
        }
    }
});