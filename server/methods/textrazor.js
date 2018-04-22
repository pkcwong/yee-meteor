import { Meteor } from 'meteor/meteor';
import fetch from 'node-fetch';

const cheerio = require('cheerio');

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
					if (res['ok']) {
						let entities = res['response']['entities'];
						if (entities) {
							entities.sort((a, b) => {
								if (a['relevanceScore'] < b['relevanceScore']) {
									return 1;
								}
								if (a['relavanceScore'] > b['relavanceScore']) {
									return -1;
								}
								return 0;
							});
							console.log(entities[0]);
							let wikiLink = entities[0]['wikiLink'];
							console.log(wikiLink);
							fetch(wikiLink).then((wikiResponse) => {
								wikiResponse.text().then((wikiText) => {
									const $ = cheerio.load(wikiText);
									let paragraphsArray = [];
									$('p').each(function(i, elem) {
										paragraphsArray[i] = $(this).text();
									});
									let paragraphJSON = {
										paragraphs: paragraphsArray,
										incompleteSentence: json['params']['text']
									};
									fetch('http://8c6cdd6b.ngrok.io/nlp', {
										method: 'POST',
										headers: {
											'Content-Type': 'application/json; charset=utf-8'
										},
										body: JSON.stringify(paragraphJSON)
									}).then((appleResponse) => {
										console.log(appleResponse);
										appleResponse.json().then((appleJson) => {
											var regexp = /\[\d+\]+/g;
											var paragraphsArray2 = [];
											paragraphsArray.forEach( (paragraph) => {
												var cleansedParts = [];
												paragraph.split(regexp).forEach( (part) => {
													cleansedParts.push(part);
												});
												paragraphsArray2.push(cleansedParts.join(""));
											});
											var regexp2 = /[.]+/g;
											var paraSentencesSet = [];
											paragraphsArray2.forEach( (cleanPara) => {
												var sentences = [];
												cleanPara.split(regexp2).forEach( (sentence) => {
													sentences.push(sentence + ".");
												});
												paraSentencesSet.push(sentences);
											});
											/*
											for (var i=0; i < 3; i++){
												console.log("paragraph index: " + appleJson[0][i]);
												console.log("related sentence: " + paraSentencesSet[appleJson[0][i]][appleJson[2][i]]);
											}
											*/
											resolve({
												entities: entities[0],
												nlp: paraSentencesSet[appleJson[0][0]][appleJson[2][0]]
											});
										}).catch((err) => {
											reject(err);
										});
									}).catch((err) => {
										reject(err);
									});
								});
							}).catch((err) => {
								reject(err);
							});
						}
					}
				});
			}).catch((err) => {
				reject(err);
			});
		});
	}

});
