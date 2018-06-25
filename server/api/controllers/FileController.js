/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * `FileController.upload()`
   *
   * Upload file(s) to the server's disk.
   */
  upload: function (req, res) {

    req.setTimeout(0)

    req.file('myFile').upload({

        maxBytes: 200000000000,
        dirname: 'C:/Users/User/Desktop/downloads'

      },

      function (err) {
        if (err) console.log(err)
        else {
          return res.ok()
        }
        window.location = '/speak'
      }
    )
  }
}




