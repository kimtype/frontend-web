var area = document.getElementById('clickArea');
area.innerHTML = '<div id="target"></div>'
var scoreboard = document.getElementById('scoreboard');
var score = 0; var maxScore = 5;
var level = 1; var maxLv = 5;
var miss = 0;
var retargetingTime=[,2500,2000,1500,1000,500];
var tolerance=[,11,8,6,4,1];
scoreboard.innerHTML = '<p>Score : <span id="score">'+score+'</span></p>'
                     + '<p>Level : <span id="level">'+level+'</span></p>'
                     + '<p>Miss : <span id="miss">'+miss+'</span> / <span id="tolerance">'+tolerance[level]+'</span></p>'
var spanScore = document.getElementById('score');
var spanLevel = document.getElementById('level');
var spanMiss = document.getElementById('miss');
var spanTolerance = document.getElementById('tolerance');


var target = document.getElementById('target');


//점수판 갱신
var reScore = function(){
  score = 0;
  miss = 0;
  spanScore.innerHTML = score;
  spanLevel.innerHTML = level;
  spanMiss.innerHTML = miss;
  spanTolerance.innerHTML = tolerance[level];
}

//타겟이 아닌 영역을 클릭했을 때
var fault = function(){
  target.style.backgroundColor = '#EAEAEA';
  // setTimeout(relocation,retargetingTime[level]);
  miss++;
  // console.log(miss);
  if(miss>tolerance[level]){ //실수 허용 범위를 넘으면 stage failed
    alert("Failed.. try again!");
    level = 1;
    reScore();
  }
  spanMiss.innerHTML = miss;
}
clickArea.addEventListener("click",fault);

//타겟을 클릭했을 때
var arrest = function(){
  event.stopPropagation(fault);
  target.style.backgroundColor = '#0054FF';
  // setTimeout(relocation,retargetingTime[level]);
  score++;
  if(score==maxScore){ //점수가 기준 점수를 넘으면 다음 스테이지로
    if(level != maxLv){
      setTimeout(function(){
        level++;
        reScore();
      },200);
    }
    else{
      alert("Congratulation~!");
      level = 1;
      reScore();
    }
  }
  spanScore.innerHTML = score;
  // console.log("arrest");
}
target.addEventListener("click",arrest);

//난수 생성
var generateRandom = function (min, max) {
  var ranNum = Math.floor(Math.random()*(max-min+1)) + min;
  return ranNum;
}

//타겟 재배치
var relocation = function(){
  target.style.backgroundColor = 'red';
  var rndTop = generateRandom(0,550)+'px';
  var rndLeft = generateRandom(0,700)+'px';
  target.style.top = rndTop;
  target.style.left = rndLeft;
  console.log(retargetingTime[level]);
  setTimeout(relocation,retargetingTime[level]);//재귀호출을 통한 화면 자동 갱신 level에 따라 재생성 시간 조절
}

// //아무것도 클릭 못하고 지나갔을 때
// var pass = function(){
//   miss++;
//   relocation();
//   reScore();
//   if(miss>tolerance[level]){
//     alert("Faild.. try again!");
//     score = 0;
//     miss = 0;
//     level = 1;
//     reScore();
//   }
// }

document.addEventListener("DOMContentLoaded", relocation);
