/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var request = require('superagent');

module.exports = {
	index: function (req, res) {
		request
			.get(sails.config.api_url + '/contacts')
			.end(function (err, response) {
				res.view(response.body);
			});
	},

	destroy: function (req, res) {
		request
			.del(sails.config.api_url + '/contacts/' + req.param('id'))
			.send(req.body)
			.end(function (err, response) {
				res.json(response.body);
			});
	},

	update: function (req, res) {
		request
			.put(sails.config.api_url + '/contacts/' + req.param('id'))
			.send(req.body)
			.end(function (err, response) {
				res.json(response.body);
			});
	},

	create: function (req, res) {
		request
			.post(sails.config.api_url + '/contacts')
			.send(req.body)
			.end(function (err, response) {
				if (err) {
					req.flash('type', 'danger');
					req.flash('message', 'Could not create new contact.')
					res.redirect('/contacts/new');
				} else {
					if (response.body.apiStatus === 'success') {
						req.flash('type', 'success');
						req.flash('message', 'Successfully created new contact.')
						res.redirect('/contacts');
					} else {
						req.flash('type', 'danger');
						req.flash('message', 'Could not create new contact.');
						res.redirect('/contacts/new');
					}
				}
			});
	},

	edit: function (req, res) {
		request
			.get(sails.config.api_url + '/contacts/' + req.param('id'))
			.end(function (err, response) {
				res.view(response.body);
			});
	}
};
