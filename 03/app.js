// var log = document.getElementById('log');
//
// //// debugger;
//
// console.log(log);
// ////log.innerHTML = '안녕';
//
// // var a = document.querySelectorAll('#log a');//#을 붙여줌
// // cosole.log(a.length, a[0], a[1]); //배열처럼 index number를 써줘야 함
//
// var div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";
// document.body.appendChild(div);
// //log.appendChild('div'); //에러
// //log.innerHTML += '<div style="color : red">hello</div>';
//
// window.addEventListener('load', function(){
//   alert("load");
// });
// window.addEventListener('load', function(){
//   alert("load2");
// });

// var log = document.getElementById('log');
// log.addEventListener('click', function(){
//   console.log('log click');
// })

// var log = document.getElementById('log');
// function printLog(){
//   console.log('log click');
// }
// log.addEventListener('click', printLog); //printLog()가 아님. 괄호를 붙이면 함수의 리턴값 호출

document.addEventListener("DOMContentLoaded", function(event) {

  var divs = document.querySelectorAll('#wrap div');

  function changeBG(event){
    console.log('test');
    //divs[0].style.backgroundColor='blue';
    event.currentTarget.style.backgroundColor = 'blue';
  }
  for(var i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', changeBG);
  }

});
