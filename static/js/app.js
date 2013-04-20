var app = app || {};
var ENTER_KEY = 13;

var WEB_SOCKET_SWF_LOCATION = "/static/WebSocketMain.swf";
var WEB_SOCKET_DEBUG = true;

$(function() {

	// Kick things off by creating the **App**.
	new app.AppView();

});
