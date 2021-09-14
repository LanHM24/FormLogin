function send() 
    {
      var arr = document.getElementsByTagName('input');
      var e = arr[0].value;
      var p = arr[1].value;
      if(e == "" || p == "" )
      {
        alert("Hãy điền vào chỗ trống");
      }
      else 
      alert("Đăng nhập thành công");
    }
    


    
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
    })

    $('#quenmatkhau').click(function(){
      window.location.href='quenpass.html';
   })


  });

  

  
