/*! Custom js file in case bootstrap files are updated later  */

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);


$(document).ready(function() {
    $('#Carousel2').carousel({
        interval: 3000
    })
});

