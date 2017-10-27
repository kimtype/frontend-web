$('<button>')
  .html('go to the top')
  .addClass('top')
  .hide()
  .on('click',function () {
    scroll(top);
  })
  .appendTo($(document.body));

$(window).scroll(function () {
  var scrTop = $(this).scrollTop();
  if (scrTop >= 100) $('.top').fadeIn();
  else $('.top').fadeOut();
});
