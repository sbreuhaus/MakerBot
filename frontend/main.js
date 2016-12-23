window.onload = function(){

const url = 'http://localhost:3000';
const button = $('#submit-btn').click(function(){
  console.log("clicked");
  const newName = $('#name-input').val();
  console.log(newName);
  const data = {};
  data.name = newName;
  console.log(data);
  $.ajax({
    url: url,
    method: 'POST',
    data: data,
    dataType: 'json'
  }).done(function(response){
    console.log("Here's the POST response", response);
  })
}) //end click handler






































} //end of window onload
