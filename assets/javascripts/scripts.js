//Sidebar Accordion
$(function() {
  $('li.sidebar-azlinks-link').on('click', function() {
    if ($('ul.sidebar-azsubmenu').is(':visible')) {
      $('ul.sidebar-azsubmenu').slideUp(300);
    }
    $(this).next().slideToggle(300);
  });
});
