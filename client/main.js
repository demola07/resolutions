import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'

import { Resolutions } from '../collections/resolution'

import './main.html'

Template.body.helpers({
	resolutions: function () {
		return Resolutions.find()
	},
})

Template.body.events({
	'submit .new-resolution': function (event) {
		const title = event.target.title.value

		Resolutions.insert({
			title,
			createdAt: new Date(),
		})

		event.target.title.value = ''

		return false
	},
})
