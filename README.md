yeoman-ember-jasmine-handlebars-helloworld
==========================================

Disclaimer : This was made when yeoman was v0.9.6... since then its updated and no uses a 'yo' package instead. I will probably create a new
one in the future. Until then i'd see if they fixed the shortfalls in the current v1.0 yourself.

A Yeoman Ember Scaffolded Boilerplate with Jasmine Unit Testing and Handlebar Templating fully wired up and ready to code.

*Disclaimer* 
============
All i've done here is pull together something that i can start from and wired up Handlebars and Jasmine to work with Yeoman,
Yeoman did 95% for me, it just took a little searching to find the edits needed to complete the setup so that Jasmine and Handlebars
are being used straight away. 

Getting Started
===============

1. ``$ git clone https://github.com/KevCJones/yeoman-ember-jasmine-handlebars-helloworld.git`` - Clone it
2. ``$ curl -L get.yeoman.io | bash`` Make sure you have setup Yeoman - visit yeoman.io for more info
3. ``$ yeoman clean`` Will perform the workaround for handlebars auto building
4. ``$ yeoman server`` As normal will run with the compiled handlebars and watch for changes


Credits
=======

* https://github.com/jcarver989/phantom-jasmine - gave me a console reporter for Jasmine
* https://github.com/dgeb/yeoman-ember-basic-example - was where i picked up the handlebars wiring needed
* https://github.com/dgeb/grunt-ember-templates - where i learnt Yeoman runs on an older Grunt so i needed 0.2.0 of the NPM module.

