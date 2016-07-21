console.log("hello");

$(document).ready(function(){
  $.ajax({
    url: 'https://www.reddit.com/me/m/crypto.json',
    error: function(err) {console.error(err)},
    method: 'GET',
    success: function(data) {
      console.log(data);
      for (child of data.data.children) {
        var $title = $('<h3></h3>');
        $title.html(child.data.title);
        $('#stuff').append($title);
      }
      //$('#stuff h1').text(data.data.children[0].data.title);
    }
  })
})




// $(document).ready(function() {
//   $.ajax({
//     url: 'http://pokeapi.co/api/v2'
//     error: function(err) {console.error(err)},
//     method: 'GET',
//     success: function(data) {
//       console.log(data);
//   })
// })
