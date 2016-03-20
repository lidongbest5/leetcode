var jquery = window.jQuery = window.$ = require('jquery');
var Backbone = require('backbone');
var App = require('./index');
var ModalboxModule = require('libra-modal');
var SidebarModule = require('libra-sidebar');
var Regions = require('libra-region');
var user = require('libra-sdk').user;

Backbone.$ = jquery;
Regions.addRegion('main', '#main');
Regions.addRegion('sidebar', '#nav');

user.fetch({cache: true}).done(function(){
	/* start app */
	new App();
	new ModalboxModule();
	new SidebarModule({
		title: 'Pegasus',
		headerLink: '/',
        active: 'APP_REPORT'
	});

	Backbone.history.start();
});