$(document).ready(function(){
  let message = {
    username: 'Cameron',
    message: 'Looks like somebody is running the sample!'
  };

  $.post('http://originmessages.herokuapp.com/messages', message, function(data) {

  })
)};