var list = document.getElementById('list');

//list 추가 메소드
var addList = function(str){
  list.innerHTML += '<li>'
                  + '<button class="delete">×</button>'
                  + '<input type="checkbox" class="toggle-checked">'
                  + '<span class="text">'+str+'</span>'
                  + '</li>'

  var check = document.getElementsByClassName("toggle-checked");
  var del = document.getElementsByClassName("delete");

  for(var i=0; i<check.length; i++){
    check[i].addEventListener('change',checking);
    del[i].addEventListener('click',deletion);
  }
}

//checkbox 메소드
var checking = function(){
  // console.log(this);
  // console.log(this.parentNode);
  if(this.checked){
    // console.log(this.nextSibling);
    this.nextSibling.style.textDecoration="line-through";
  }
  else{
    this.nextSibling.style.textDecoration="none";
  }
}

//delete button 메소드
var deletion = function(){
  // console.log(this.parentNode);
  this.parentNode.parentNode.removeChild(this.parentNode);//부모노드 삭제
}

//input 요소를 통해 list 추가
var task = document.getElementsByName("text");
task[0].addEventListener('keypress', function(e){
  if(e.keyCode===13){//keyCode '13' is a 'Enter Key'
    if(!task[0].value){ //문자열을 입력했는지 확인. javascript의 경우 ("", null, undefined, 0, NaN)의 값을 false로 반환
      alert("할 일을 입력하세요");
    }
    else{
      // console.log(task[0].value);
      addList(task[0].value);
      task[0].value = null;
    }
  }
})

// addList("JS 공부하기");
// addList("for test");
// check[0].addEventListener('change',checking);
// del[0].addEventListener('click',deletion);
// check[1].addEventListener('change',checking);
// del[1].addEventListener('click',deletion);
