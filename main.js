$(document).ready(function(){
    $('#eye').click(function(){
      $(this).toggleClass('open')
      $(this).children('i').toggleClass('fa-eye-slash fa-eye')
      if($(this).hasClass('open')){
          $(this).prev().attr('type','text')
      }
      else{
        $(this).prev().attr('type','password')
      }
    });

    $('.form-submit').click(function(){
        alert("Đăng nhập thành công")
    });
  });

  $('#quenmatkhau').click(function(){
    window.location.href='quenpass.html';
 })
 $('.formsubmit').click(function(){
  alert("Đã gửi mã xác nhận về email của bạn")
});

