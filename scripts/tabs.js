
 
   

$(function() {
    $('select').change(function(){
      $('.tab-content').hide();
      $('#' + $(this).val()).show();
    });
  });