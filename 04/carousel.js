var todayPhoto = [
    {"url":"http://media.daum.net/photo/2841","img":"http://icon.daumcdn.net/w/c/12/05/82877085750988319.jpeg","title":"&quot;뜨면 끝장&quot; 최강 공격헬기 성능이 설마","id":"20120516082207657"}
    ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100320","img":"http://icon.daumcdn.net/w/c/12/05/82876693901189319.jpeg","title":"&#39;오늘만&#39; 필리핀 새댁 5개국어 능통 엄친딸","id":"20120516091011626"}
    ,{"url":"http://media.daum.net/photo/4010","img":"http://icon.daumcdn.net/w/c/12/05/82876307459008319.jpeg","title":"[북한 결혼식 풍경] 신랑·신부 &quot;행복합니다&quot;","id":"20120516092605081"}
    ,{"url":"http://sports.media.daum.net/general/gallery/gagsports/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81730673405131839.jpeg","title":"&#39;내가 더 잘해&#39; 후보GK 경기 난입해 선방","id":"20120516100608409"}
    ,{"url":"http://sports.media.daum.net/general/gallery/0516ufc/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81728759258718839.jpeg","title":"양동이의 하이킥에 타바레스 &#39;주춤&#39;","id":"20120516093313331"}
    ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100539","img":"http://icon.daumcdn.net/w/c/12/05/81728404408992839.jpeg","title":"이승철 아내와 딸 사진 공개 &quot;사주에. .&quot;","id":"20120516093918544"}
    ,{"url":"http://media.daum.net/photo/3899","img":"http://icon.daumcdn.net/w/c/12/05/81728227037306839.jpeg","title":"생후 6개월에 프랑스로 입양됐던 아이가..","id":"20120516030614331"}
    ,{"url":"http://sports.media.daum.net/general/gallery/STARKIMYUNA/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81727815537682839.jpeg","title":"&#39;교생&#39; 김연아, 스승의날에도 인기폭발","id":"20120516092003892"}
];

var wrap = document.getElementById('wrap');
var control = document.getElementById('control');
var pageNum = 1; //현재 페이지 번호
var cntImg = 3; //한 화면에 보이는 이미지 개수
var lastPage = Math.ceil(todayPhoto.length / cntImg); //마지막 페이지
control.innerHTML = '<button id="pre"> < </button>' //이전 버튼
                  + '<a id="number">'+pageNum+' </a><a> / '+lastPage+'</a>' //page index
                  + '<button id="next"> > </button>' //다음 버튼

var number = document.getElementById('number');
var pre = document.getElementById('pre');
var next = document.getElementById('next');

function nextPage() {
    var imgList = '';
    pageNum++;
    // console.log(pageNum);
    if(pageNum > lastPage) pageNum = lastPage;

    var start = pageNum * cntImg - cntImg; //시작 이미지 번호
    var end = pageNum * cntImg; //끝 이미지 번호

    for(var i = start; i < end; i++) {
        if(i == todayPhoto.length) break;
        imgList += '<img src="' + todayPhoto[i].img + '">';
    }

    wrap.innerHTML = imgList;
    number.innerHTML = pageNum;
}
next.addEventListener('click', nextPage);

function prePage() {
    var imgList = '';
    pageNum--;
    // console.log(pageNum);
    if(pageNum < 1) pageNum = 1;

    var start = pageNum * cntImg - cntImg;
    var end = pageNum * cntImg;

    for(var i = start; i < end; i++) {
        if(i == todayPhoto.length) break;
        imgList += '<img src="' + todayPhoto[i].img+'">';
    }

    wrap.innerHTML = imgList;
    number.innerHTML = pageNum;
}
pre.addEventListener('click', prePage);

window.addEventListener("load", function() {
    var imgList = '';
    for(var i = 0; i < cntImg; i++) {
        imgList += '<img src="' + todayPhoto[i].img+'">';
    }
    wrap.innerHTML = imgList;
});
