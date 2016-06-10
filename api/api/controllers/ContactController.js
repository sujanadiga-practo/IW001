/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  find: function (req, res) {
    if (req.param('id')) {
      Contact.findOne({id: req.param('id')}).exec(function (err, contact) {
        if (err) {
          res.json({
            apiStatus: 'error', 
            err      : err
          });
        } else {
          if (contact) {
            res.json({
              apiStatus: 'success',
              contact  : contact 
            });
          } else {
            res.json({
              apiStatus: 'success',
              message  : 'Contact with Id ' + req.param('id') + ' not found.'
            });
          }
        }
      });
    } else {
      Contact.find().exec(function (err, contacts) {
        if (err) {
          res.json({
            apiStatus: 'error', 
            err      : err
          });
        } else {
          if (contacts) {
            res.json({
              apiStatus: 'success',
              contacts : contacts
            });
          } else {
            res.json({
              apiStatus : 'success',
              message   : 'No contacts to display'
            });
          }
        }
      });
    }
  },

  destroy: function (req, res) {

  }
	
};

