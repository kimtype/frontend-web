var board = document.getElementById("board");

var flag = 0;
var drawBoard = function(){
  for(var i=0; i<4; i++){

    if(i%2==1){flag=1;}
    else{flag=0;}

    for(var j=0; j<4; j++){
      if(flag == 0){
        board.innerHTML += '<div class = white, style="background-color : white"></div>'
        flag++;
      }
      else{
        board.innerHTML += '<div class = black, style="background-color : black"></div>'
        flag--;
      }
    }
  }
}

//체스 판 생성
drawBoard();

//이벤트 처리
document.addEventListener("DOMContentLoaded", function(event) {
  var beforeTarget = '';
  var beforeColor = '';
  var divs = document.querySelectorAll('#board div');

  function changeBG(event){
    if (beforeTarget!=''){
      beforeTarget.style.backgroundColor = beforeColor; //이전 색상 복구
    }
    beforeColor = event.currentTarget.style.backgroundColor; //이전 색상 저장
    // console.log(beforeColor);
    event.currentTarget.style.backgroundColor = 'red';
    beforeTarget = event.currentTarget; //현재 타겟 정보를 이전 타겟에 저장
  }
  for(var i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', changeBG);
  }
});
