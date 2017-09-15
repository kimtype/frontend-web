// //기본
// var str = 'hello world!';
// var str = 'hello1'
// console.log(str);
//
// //숫자와 문자
// console.log(1+2); //3
// console.log('1'+'2'); //12
//
// //동등, 일치
// console.log("" == "0"); //false
// console.log("" == 0); //true (동등은 자동 형 변환)
// console.log("" === "0"); //false
// console.log("" === 0); //false
//
// //조건문
// var isPerson = true;
//
// if (isPerson) { console.log('사람이시군요'); }
// else { console.log('!사람이 아닙니다!'); }
//
// //반복문
// for(var count=0; count < 5; count++){
//     console.log(count+1 + '번 반복');
// }
//
// //함수
// function printHello(name){
//     console.log('Hello ' + name);
// }
// printHello('World!');

// //객체
// var person = {
//   naem : "이승수",
//   country : "Korea",
//   age : 24,
//   studentID : "2013108200",
//   sayHello : function(){ console.log('안녕하세요'); }
// };
// console.log(person);
//
//함수
alert("로그인 하라고 할 때 많이 봤던 창");
confirm("뭔가 진짜 할거냐고 물어보는 창");
prompt("프롬프트");
setInterval(function(){console.log(1);}, 1000);
