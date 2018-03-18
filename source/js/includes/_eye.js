// A satellite watching from the sky, a beam of light
$('.all-seeing_eye').click(function () {
    $(this).prev().attr('type', $(this).hasClass('is_hidden') ? 'text' : 'password');
    $(this).toggleClass('is_hidden');
});