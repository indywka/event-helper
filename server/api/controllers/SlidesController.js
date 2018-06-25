/**
 * Created by USER on 25.06.2018.
 */
/**
 * SlidesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  start: function (req, res) {

    //console.log("0");
    currentSlide = 1;
    return res.view('secondpage');
  },



  /**
   * `SlidesController.next()`
   */
  next: function (req, res) {
    sails.sockets.join(req, 'conf');

    // Broadcast a notification to all the sockets who have joined
    // the "funSockets" room, excluding our newly added socket:
    currentSlide ++;
    sails.sockets.broadcast('conf', 'switch', { howdy: currentSlide}, req);
    //console.log("1");

    return res.json({
        todo: currentSlide.toString()
      }
    );
  },

  /**
   * `SlidesController.prev()`
   */
  prev: function (req, res) {
    sails.sockets.join(req, 'conf');

    // Broadcast a notification to all the sockets who have joined
    // the "funSockects" room, excluding our newly added socket:
    currentSlide --;
    if (currentSlide<=0) currentSlide=1;
    sails.sockets.broadcast('conf', 'switch', { howdy: currentSlide}, req);
    //console.log("2");

    return res.json({
      todo: currentSlide.toString()
    });
  }

};
