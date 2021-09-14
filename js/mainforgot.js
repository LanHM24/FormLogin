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
      alert("Đã gửi mã đến Email của bạn");
    }