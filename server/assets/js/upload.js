new Vue({
  el: '#app',
  template: `
        <div>
            <form action="file/upload" method="post" enctype="multipart/form-data">
                          <div class="file-field input-field">
                           <div class="btn">
                           <span>File</span>
               <input type="file" name="myFile" @change="previewImage" accept="image/*" >
                 </div>
                 <div class="file-path-wrapper">
                <input class="file-path validate" type="text">
              </div>
                 <div class="image-preview" v-if="imageData.length > 0">
                    <img class="preview" :src="imageData">
                 </div>
                   </div>
                   <input type="submit"/>
             </form>
        </div>
    `,

  data: {
    imageData: ''  // we will store base64 format of image in this string
  },
  methods: {
    previewImage: function (event) {
      // Reference to the DOM input element
      var input = event.target
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader()
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.imageData = e.target.result
        }
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0])
      }
    }
  }
})
