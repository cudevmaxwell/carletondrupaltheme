jQuery(document).ready(function($){

    $('#sidr-0').append($('div.sidr.right').not('#sidr-0').html());
    $('div.sidr.right').not('#sidr-0').remove();
    $('.responsive-menus-sidr-processed').prev().not('#sidr-wrapper-0').remove();

  
});
