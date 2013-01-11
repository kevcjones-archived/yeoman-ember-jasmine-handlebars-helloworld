/*
 Having an application object is important for several reasons:

 It is your application's namespace. All of the classes in your application will be defined as properties on this object (e.g., App.PostsView and App.PostsController). This helps to prevent polluting the global scope.
 It adds event listeners to the document and is responsible for sending events to your views.
 It automatically renders the application template, the root-most template, into which your other templates will be rendered.
 It automatically creates a router and begins routing, based on the current URL.
 */

var YeomanHelloWorld = Ember.Application.create();



