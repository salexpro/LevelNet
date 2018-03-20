/* global open_new, purchase_token */
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
        case 'purchase': {
            purchase_token($('[name="from_curr"]', this).val(), '1LMN6re5eZmzpnph9fuztDnBYftwYrfryX');
            break;
        }
        default: {
            break;
        }
    }
});