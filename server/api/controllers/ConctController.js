/**
 * ConctController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  /**
   * `ConctController.con()`
   */
  con: function (req, res) {
    if(req.socket) {
      sails.sockets.join(req.socket, 'conf', function (err) {
        if (err) {
          return res.serverError(err);
        }
      });
    }
    return res.json({
      message: 'ss'
    })

  }
};
