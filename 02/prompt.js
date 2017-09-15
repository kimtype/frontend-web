//prompt()를 이용하여 숫자를 입력받아 그 숫자의 합을 구하는 프로그램
var sum = 0;
var input = true;

while(input){
  input = prompt("더할 숫자를 입력하세요");
  if(input !== null){
    var num = parseInt(input, 10);
    sum += num;
  }
}

console.log(sum);
