new Vue({
  el: '#secondpage',
  template: `
        <div>
              <img class="img1" id="slide" src="/images/1.png"/>
              <p><input type="button" value="Next" v-on:click="askServer('Next')"></p>
              <p><input type="button" value="Prev" v-on:click="askServer('Prev')"></p>
        </div>
       
    `,
  methods: {
    askServer: function(param) {
      if (param=="Next") {
        io.socket.get('/next', function gotResponse(data) {
          console.log(data.todo.toString());
        });


      }//обращение к контроллеру Slides.Next
      if (param=="Prev") {

        io.socket.get('/prev', function gotResponse(data) {
          console.log(data.todo.toString());
        });
      }//обращение к контроллеру Slides.Prev
    }
  } 
  
});

new Vue({
  el: '#usersecondpage',
  template: `
      <img class="img1" id="slide" src="/images/1.png"/>
      
    `
});
