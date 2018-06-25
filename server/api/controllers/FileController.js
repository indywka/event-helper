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

    // e.g.
    // 0 => infinite
    // 240000 => 4 minutes (240,000 miliseconds)
    // etc.
    //
    // Node defaults to 2 minutes.
    res.setTimeout(0)

    req.file('myFile').upload({

        // You can apply a file upload limit (in bytes)
        maxBytes: 200000000000

      })
      // ,

      // function (err, uploadedFiles) {
      //   if (err) {console.log(err)}
      //   console.log(res.json({'status': 'file upload successfully', 'file': uploadedFiles}))
      // })
  }
}



