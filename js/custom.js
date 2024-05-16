$(window).on('load', function(){
    $('.loader').delay('3000').fadeOut('fast');
});

$(document).ready(function () {
    // pre-btn
    $('#pre-btn').click(function () {
        $('.sidebar').toggleClass('width');  $('.sidebar .right').toggleClass('visi');
        $('.sidebar .deshboards>li>a span, .sidebar .sidebar-logo span, .sidebar .menu-list>.desh-he h4, .sidebar .dropdown-menu>ul>li').toggleClass('d-block');
        $('.sidebar .pre-btn>a i').toggleClass('d-block3'); $('.sidebar .menu-list .desh-he').toggleClass('left-line'); $('.right-all').toggleClass('mar-left');
    });

    $('#toggle-btn').click(function () {
        $('.sidebar').toggleClass('tra-x'); $('.click-layer').show(); $('#pre-btn2').show();
    });

    $('.pre-btn-2').click(function () {
        $('.sidebar').toggleClass('tra-x'); $('.click-layer').hide(); $('#pre-btn2').hide();
    });

    // menu-link open/close
    $(".menu-link").click(function () {
        $(this).next().slideToggle(400); $(".dropdown-menu").not($(this).next()).slideUp(400); $(this).toggleClass('active').toggleClass('down');
        $(this).parent('li').siblings().children('.menu-link').removeClass('active').removeClass('down');
        $(this).parent('li').parent('.deshboards').siblings('.deshboards').children('li').children('.menu-link').removeClass('active').removeClass('down');
    });

    // dropdown-icon add/removeclass
    $(".drop-link").click(function () {
        $(this).children('.drop-icon').addClass('active'); $(this).parent('li').siblings().children('.drop-link').children('.drop-icon').removeClass('active');
    });

    // sub-dropdown
    $(".sub-link").click(function () {
        $(this).next().slideToggle(400); $(".sub-drop").not($(this).next()).slideUp(400); $(this).toggleClass('down');
        $(this).parent('li').siblings().children('.sub-link').removeClass('down');
        $(this).parent('li').parent('.deshboards').siblings('.deshboards').children('li').children('.sub-link').removeClass('down');
    });

    // input-click-close header-list
    $('#input, .search').click(function () {
        $('#nav-ul').hide(); $('.search-close').show(); $('.search').hide(); $('#input').show();
    });

    $('.search-close').click(function () {
        $('#nav-ul').show(); $('.search-close').hide(); $('.search').show();
    });

    // header-dropdown
    $('.main-drop').click(function () {
        $(this).next().toggle(); $(".dropdow").not($(this).next()).hide(); $('#system-box').hide();
    });

    // system-chenge-box
    $('#setting-btn').click(function () {
        $('#system-box').show('100'); $('.dropdow').hide();
    })
    $('#system-box-close').click(function () {
        $('#system-box').hide('100'); $('#setting-btn').show('100');
    })

    // color-change
    $(".system-swatch").click(function () {
        var color = $(this).attr("id"); $('#system-chenge').attr('href', 'css/' + color + '.css');
    });
});