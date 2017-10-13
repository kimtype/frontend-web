var url = 'http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20150401&pageSize=3&pageNo='

var info = document.getElementById('info');
var str = '';

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
