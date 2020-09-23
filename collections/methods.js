import { Meteor } from 'meteor/meteor'
import { Resolutions } from './resolution'

Meteor.methods({
	addResolution: function (title) {
		Resolutions.insert({
			title,
			createdAt: new Date(),
		})
	},
})
