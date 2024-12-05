//switch

$(function(){
  $(document).ready(function() {
    // 要素の取得
    const $moonBtn = $('.moon');
    const $sunBtn = $('.sun');
    const $body = $('body');
    const $navbrLogoLight = $('#navbar_logo_light');
    const $navbarLogoDark = $('#navbar_logo_dark');
    const $logoLight = $('#pc_light');
    const $logoDark = $('#pc_dark');
  
    // ダークモード
    $moonBtn.on('click', function() {
      console.log('click');
      $body.addClass('dark_mode');
      $sunBtn.find('a').removeClass('active');
      $moonBtn.find('a').addClass('active');
      $("#navbar").css("background-color", "#000000");
  
      $navbrLogoLight.hide();
      $navbarLogoDark.show();
      $logoLight.hide();
      $logoDark.show();
    });
  
    // ライトモード
    $sunBtn.on('click', function() {
      console.log('click');
      $body.removeClass('dark_mode');
      $moonBtn.find('a').removeClass('active');
      $sunBtn.find('a').addClass('active');
  
      $navbrLogoLight.show();
      $navbarLogoDark.hide();
      $logoLight.show();
      $logoDark.hide();
    });
  });
})