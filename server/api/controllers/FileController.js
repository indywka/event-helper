/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var FileController = {

  /**
   * `FileController.upload()`
   *
   * Upload file(s) to the server's disk.
   */
  upload: function (req, res) {

    req.setTimeout(0)

    req.file('myFile').upload({

        maxBytes: 200000000000,
        dirname: 'A:/new_programs/programs/test-up-one/fileUpload/server/assets/not-converted-files',
        saveAs: '1.pdf'

      }
    ),
    FileController.alert()
    FileController.conv()
    FileController.alert()
    res.redirect('back')

  },

  conv: function () {
    var pdf2png = require('pdf2png-mp')

// function convert() {
    pdf2png.convert('A:/new_programs/programs/test-up-one/fileUpload/server/assets/not-converted-files/1.pdf', {quality: 300},
      function (resp) {
        if (!resp.success) {
          console.log('Something went wrong: ' + resp.error)
          return
        }

        console.log('Yayy the pdf got converted, now I\'m gonna save it!')

        var fs = require('fs')

        resp.data.forEach(function (item, index) {

          fs.writeFile('A:/new_programs/programs/test-up-one/fileUpload/server/assets/images/' + index + '.png', item, function (err) {
            if (err) {
              console.log(err)
            }
            else {
              console.log('The file ' + index + ' was saved!')
            }
          })
        })
      })
  },

  alert: function () {
    console.log('File was upload and converting!')
  }
}

module.exports = FileController



