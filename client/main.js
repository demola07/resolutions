import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'

import { Resolutions } from '../collections/resolution'

import './main.html'

// import Resolutions from '../collections/resolution'
// const Resolutions = new Mongo.Collection('resolutions')

Template.body.helpers({
	resolutions: function () {
		return Resolutions.find()
	},
})
