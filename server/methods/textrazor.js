import { Meteor } from 'meteor/meteor';
import fetch from 'node-fetch';

Meteor.methods({

	textrazor: (json) => {
		return new Promise((resolve, reject) => {
			fetch("https://api.textrazor.com/", {
				body: "extractors=" + json['method'] + "&text=" + json['params']['text'],
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					"X-Textrazor-Key": "d823d807b507953b113b12c512676d6d0ee2c734d6fbf47aa9c15d88"
				},
				method: "POST"
			}).then((response) => {
				response.json().then((res) => {
					resolve(res);
				});
			}).catch((err) => {
				reject(err);
			});
		});
	}

});
