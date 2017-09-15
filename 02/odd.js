//1~100사이의 홀수를 출력하는 프로그램을 작성
var odd = '';
for(var num = 1; num <= 100; num++){
  if(num%2!==0) //짝수일 경우 if(num%2==0)
  {
    odd += num + ', ';
  }
}
console.log(odd);
