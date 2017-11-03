//엔터키를 누를 경우 리스트 추가
function addTodo(event) {
  if (event.keyCode == 13){
    //공백인 경우 알림창
    if(!todoStringField.value){
      alert("할 일을 입력하세요");
    }
    else{
      var newTodo = todoStringField.value;
      todoStringField.value = "";
      listDom.innerHTML += tmpl(todoTemplateHtml, {todo: newTodo});
      saveData();
    }
  }
}
//할 일 삭제
function checkDelete(event) {
  if(event.target.className !== 'delete') {
    return;
  }
  var deleteBtn = event.target;
  //버튼의 상위엘리먼트 <li> 제거
  console.log(deleteBtn.parentElement);
  deleteBtn.parentElement.remove();
  saveData();
}
//할 일 완료
function done(event) {
  if(event.target.className !== 'toggle-checked') {
    return;
  }
  //event.target.parentNode.childNodes[5] = span 노드
  console.log(event.target.parentNode.childNodes[5]);
  var todoText = event.target.parentNode.childNodes[5];
  if(event.target.checked){
    todoText.style.textDecoration = "line-through";
  }
  else {
    todoText.style.textDecoration = "none";
  }
  saveData();
}

//불러오기
function loadData() {
  console.log('loadData()');
  return localStorage.getItem('todoHtml');
}

//저장
function saveData() {
  console.log('saveData()');
  localStorage.setItem('todoHtml', listDom.innerHTML);
}
