$.ajax({
  url: '/cats',
  method: 'POST',
  data: {
    name: 'the Skatetocat',
    image: 'https://octodex.github.com/images/skatetocat.png'
  }
}).done(function(data) {
  alert(data.message);
});

$.ajax({
  url: '/cats/Bewitchedtocat',
  method: 'PUT',
  data: {
    name: "The Bewitchedtocat",
    image: "https://octodex.github.com/images/bewitchedtocat.jpg"
  }
}).done(function(data) {
  alert(data.message);
});

$.ajax({
  url: 'cats/Skatetocat',
  method: 'DELETE',
}).done(function(data) {
  alert(data.message);
});