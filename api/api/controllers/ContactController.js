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
              message  : 'Contact fetched successfully.',
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
              message  : 'Contacts fetched successfully.',
              contacts : contacts
            });
          } else {
            res.json({
              apiStatus: 'success',
              message  : 'No contacts to display'
            });
          }
        }
      });
    }
  },

  destroy: function (req, res) {
    Contact.destroy({id: req.param('id')}).exec(function (err, contacts) {
      if (err) {
        res.json({
          apiStatus: 'error', 
          err      : err
        });
      } else {
        res.json({
          apiStatus: 'success', 
          message  : 'Contact deleted successfully.',
          contacts : contacts
        });
      }
    });
  },

  update: function (req, res) {
    Contact.update({id: req.param('id')}, req.body).exec(function (err, updated) {
      if (err) {
        res.json({
          apiStatus: 'error', 
          err      : err
        });
      } else {
        res.json({
          apiStatus: 'success', 
          message  : 'Contact updated successfully.',
          contacts : updated
        });
      }
    });
  },

  create: function (req, res) {
    Contact.create(req.body).exec(function (err, contact) {
      if (err) {
        res.json({
          apiStatus: 'error', 
          err      : err
        });
      } else {
        res.json({
          apiStatus: 'success', 
          message  : 'Contact created successfully.',
          contact  : contact
        });
      }
    });
  }

};

