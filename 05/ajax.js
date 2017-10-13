console.log('ajax.js')

var btn = document.getElementById('btn');
btn.addEventListener('click',load);

function load(){
  console.log('load');
  ajax('dummy.json', done);

  // var request = new XMLHttpRequest();
  //
  // request.open('GET', 'dummy.json', true);
  // // request.open('GET', 'http://1boon.kakao.com/', true);
  // // request.open('GET', 'http://1boon.kakao.com/index.json', true);
  // // request.open('GET', 'http://1boon.kakao.com/issue.json?callback=done', true);
  //
  // // console.log(request);
  //
  // request.onreadystatechange = function(){
  //   if (request.readyState === 4) {
  //     if (request.status === 200) {
  //       console.log(request.responseText);
  //     }
  //   }
  //   // console.log(request.readyState);
  // }
  //
  // request.send();
  // // console.log('send');
}

function done(responseText){
  console.log('done :',responseText);
}

function ajax(url, callback, data, x) {
  try {
    x = new(this.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
    x.open(data ? 'POST' : 'GET', url, 1);
    x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    x.onreadystatechange = function () {
      x.readyState > 3 && callback && callback(x.responseText, x);
    };
    x.send(data)
  } catch (e) {
    window.console && console.log(e);
  }
};
