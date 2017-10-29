var baseUrl = 'http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20150401'
var pageSize = 3;
var pageNo = 1;
var url = '';
var info = document.getElementById('info');
var str = '';
url = baseUrl + '&pageSize=' + pageSize + '&pageNo=' + pageNo;
getJSON(url,done);

function done(result){
  console.log(result);
  for(var i = 0; i < result.data.length; i++){
    // console.log(result.data[i].titleKo);
    str += '<h2>'+result.data[i].titleKo+'</h2>';
    str += '<img src = '+result.data[i].photo.fullname+' width="100"></src>'
  }

  info.innerHTML = str;
}

var control = document.getElementById('control');
control.innerHTML = '<button id="pre"> < </button>' //이전 버튼
                  + '<span id="number">'+pageNo+' </span>' //page index
                  + '<button id="next"> > </button>' //다음 버튼
var number = document.getElementById('number');
var pre = document.getElementById('pre');
var next = document.getElementById('next');

pre.addEventListener('click', prePage);
next.addEventListener('click', nextPage);

function nextPage() {
  // if(result.data.length / pageSize == pageNo){
  //   alert("마지막 페이지입니다.");
  // }
  // else{
    pageNo++;
    number.innerHTML = pageNo;
    url = baseUrl + '&pageSize=' + pageSize + '&pageNo=' + pageNo;
    console.log(url);
    str = '';
    getJSON(url,done);
  // }
}

function prePage() {
  console.log('test');
  if(pageNo == 1){
    alert("첫 번째 페이지입니다.");
  }
  else{
    pageNo--;
    number.innerHTML = pageNo;
    url = baseUrl + '&pageSize=' + pageSize + '&pageNo=' + pageNo;
    str = '';
    getJSON(url,done);
  }
}
