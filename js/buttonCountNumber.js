document.getElementById("buttonCountPlus").onclick = function() {
    let count = document.getElementById("buttonCountNumber").innerHTML;
    if(+count <= 9){
      document.getElementById("buttonCountNumber").innerHTML++;
    }
  }
  
  document.getElementById("buttonCountMinus").onclick = function() {
    let count = document.getElementById("buttonCountNumber").innerHTML;
    if(+count >= 2){
      document.getElementById("buttonCountNumber").innerHTML--;
    }
  }