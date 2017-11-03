var todoStringField = document.getElementById('todoString');
var todoTemplateHtml = document.getElementById('todoTemplate').innerHTML;
var listDom = document.getElementById('todoList');

todoStringField.addEventListener('keypress', addTodo);

//삭제버튼 이벤트 잡기 위해 상위에서 이벤트 listen 하기
listDom.addEventListener('click', checkDelete);

listDom.addEventListener('click', done);

//처음 로딩시에 기존에 저장된 데이터 가져와서 보여주기
listDom.innerHTML = loadData();
