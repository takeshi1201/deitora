window.addEventListener('DOMContentLoaded', function(){

  //ページ内リンクスムーススクロール
  $('a[href^="#"]').on('click', function () {
    let adjust = 60
    let speed = 600
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - adjust;
  $("html, body").animate({scrollTop: position}, speed, "swing");
  return false;
  });

});