import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'

import { Resolutions } from '../collections/resolution'

import './main.html'

Template.body.helpers({
	resolutions: function () {
		return Resolutions.find()
	},
})

Template.body.events({})
