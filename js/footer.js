jQuery(document).ready(function($){
  var today = new Date();
  var year = today.getFullYear();

  $(".js-update-date").text(year);
});