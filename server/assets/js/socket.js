io.socket.get('/connect', function onConnect (data) {
  console.log("Socket connected!");
});

io.socket.on('switch', function (data) {
  image = document.getElementById('slide');
  image.src = "/images/"+data.howdy+".png";
});
