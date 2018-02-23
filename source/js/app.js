/* 
@codekit-prepend '../../node_modules/jquery/dist/jquery.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.core.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.box.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.motion.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.triggers.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.keyboard.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.touch.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.smoothScroll.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.magellan.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.slider.min';
@codekit-prepend '../../node_modules/foundation-sites/dist/js/plugins/foundation.accordion.min';
@codekit-prepend './lib/jquery-select7';
@codekit-prepend '../../node_modules/owl.carousel/dist/owl.carousel.min';
*/

$(document).foundation();

$('.select7').select7();


// Fill top bar
const top_fill = () => {
    const nav = $('.nav');
    if (nav.offset().top > 40) {
        nav.addClass('is_filled');
    } else {
        nav.removeClass('is_filled');
    }
}

top_fill();

$(document).scroll(() => {
    top_fill();
});

// Graph slider
$('.slider').on('moved.zf.slider', (e, el) => {
    let pos = $(el).attr('aria-valuenow');
    const graph_group1 = $('.about_graph_map_group--1');
    const graph_group2 = $('.about_graph_map_group--2');
    if(pos < 50){
        graph_group2.addClass('is_hide');
        graph_group1.removeClass('is_hide');
    } else if (pos >= 50 && pos < 100) {
        graph_group1.addClass('is_hide');
        graph_group2
            .removeClass('about_graph_map_group--2019 about_graph_map_group--2020 about_graph_map_group--2021')
            .removeClass('is_hide');
    } else if (pos>=100 && pos < 150){
        graph_group1.addClass('is_hide');
        graph_group2
            .addClass('about_graph_map_group--2019')
            .removeClass('about_graph_map_group--2020 about_graph_map_group--2021')
            .removeClass('is_hide');
    } else if (pos >= 150 && pos < 200) {
        graph_group1.addClass('is_hide');
        graph_group2.removeClass('is_hide');
        graph_group2
            .addClass('about_graph_map_group--2020')
            .removeClass('about_graph_map_group--2019 about_graph_map_group--2021')
            .removeClass('is_hide');
    } else if (pos >= 200){
        graph_group1.addClass('is_hide');
        graph_group2.removeClass('is_hide');
        graph_group2
            .addClass('about_graph_map_group--2021')
            .removeClass('about_graph_map_group--2019 about_graph_map_group--2020')
            .removeClass('is_hide');
    }
})

$('.team_members').owlCarousel({
    items: 4,
    nav: true,
    dots: false,
    navText: ['<i class="icon icon--arrow"></i>', '<i class="icon icon--arrow"></i>']
});