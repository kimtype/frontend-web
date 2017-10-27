// $('div').css('background-color','black');//스타일 우선순위는 인라인이 최우선
console.log($('div').height())//자체 높이 반환
$('div').height(200);
console.log($('div').offset())//해당하는 절대 위치 반환
// console.log($('div').position())//상위 요소에 대한 상대 위치 반환

//클래스 이름 부여&삭제
$('div').addClass('blue');
$('div').removeClass('blue');

console.log(document.querySelector('img').src);
$('img').attr('src');

console.log($('input').val());

// var div = $('div').addClass('blue');
// div.html('<h2>div</h2>');

// $('div').hide('slow',function(){ console.log('hide ok!')});//천천히 사라지는 효과

$('#btn').on('click', function(){
  $('div').animate({left:200},2000);
});

$('login').on('click',function(){
  window.open($(event.currentTarget).attr('href'), 'login', 'width=400, height=400');
  return false;
  // event.stopPropagation();
  // event.preventDefault();
});
