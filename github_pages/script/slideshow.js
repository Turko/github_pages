function plusSlide(n) {
    let i;
    let sl;
    if(n == -1){
      for (i = 1; i <= 12; i++) {
        sl = document.getElementById("img" + i);
        if(i == 1){
          sl.id = "img" + 12;
        }else{
          sl.id = "img" + (i + n);
        }
      }
    }else if(n == 1){
      for (i = 11; i >= 0; i--) {
        sl = document.getElementById("img" + i);
        if(i == 11){
          sl.id = "img" + 0;
        }else{
          sl.id = "img" + (i + n);
        }
      }
    }
  }