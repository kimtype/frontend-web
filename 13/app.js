//CRUD
//쓰기
$('#create').on('click', function(event){
  console.log('create');

  $.post('http://localhost:3000/posts', {title:'어렵당'}, function(data){

    console.log(data);
  })
});


//읽기
$('#read').on('click', function(event){
  console.log('read');

  $.get('http://localhost:3000/posts', function(data){

    console.log(data);
  })
});


//수정
$('#update').on('click', function(event){
  console.log('update');

  $.ajax({
    url : 'http://localhost:3000/posts/1',
    method : 'PUT',
    data : {title:'수정' + (new Date().getTime())},
    complete : function(data){
      console.log(data);
    }
  })
  // $.put('http://localhost:3000/posts/1', {title:'수정' + (new Date().getTime())}, function(data){
  //   console.log(data);
  // })
});


//삭제
$('#remove').on('click', function(event){
  console.log('remove');

  $.ajax({
    url : 'http://localhost:3000/posts/1',
    method : 'DELETE',
    complete : function(data){
      console.log(data);
    }
  })
});
