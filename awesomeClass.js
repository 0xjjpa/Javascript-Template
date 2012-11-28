/**
* A simple template for native Javascript modules and classes with documentation
* @module Template
* @author jjperezaguinaga
* @copyright (c) 2012 Company Inc.
* @requires NoLibrary
**/

/* Usage:
 * 		npm install -g yuidocjs
 * $ yuidoc /path/to/js/files
 *
 * A little explanation here. (This comment won't be parsed with Yuidocs because it's using one asterisk):
 * This is a simple template for creating Javascript classes and documenting them with Yuidocs. Barebones only, no libraries.
 *
 * About the module....
 * First we use the window variable to tell other developers HEY, this is a module, use it wisely. This is for readibility, feel free to use var instead.
 * Modules, as class names, should always be uppercase. From there, go underscore_case or camelCase but STICK with it.
 * Automatically call your module so you load other files methods as you load them (as an alternative to RequireJS and AMD)
 * Shortcase your module in the param argument. Don't make you TypeTheEntireNameOfTheModule. Love yourself.
 * Use an own 'undefined' version, read more in 10 things I learned from the jQuery source code by Irish Paul
 *
 * About the class...
 * Using a new object as a "replacement" of 'this' will ease Javascript out for newbies and can be used for module pattern.
 * Read about Module Pattern! - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
 * Use var to closure the variables (the equivalent of making them "private"), self for modular pattern.
 * Public things first, closured things last.
 * From an OOP world, initiliazing variables in declaration is a no no. Use the constructor for that BUT describe your properties.
 * If you do indeed default your variables, use MEANINGFUL values. What does 0 represent to your app? False? -1? undefined? 
 * Functions, methods, events... Learn the difference! Your definition may vary of mine, but AGREE on a vocabulary (even use a Glosary if necesary)
 * (Note, yuidocs just has methods and events)
 *
 * Functions = perform something and return something.
 * Methods = perform something related to your class and return something.
 * Events = perform something.
 *
 * at-param can be tricky to remember, just remember P Y N E (at-param, {type}, name, description)
 *
 * Apply is your friend! method.apply(class, args);
 * Debug with the "arguments" keyword!
 *
 * This is the same as other pattern that reads
 * 	window.Template = {
 *		class: function() { ... }
 * 	}
 * but I have found developers sometimes struggle with that syntax. People that come from OOP worlds like this one best.
 *
 * P.S. There's now a Grunt plugin for you to task it.
 */
window.Template = (function( t, undefined ) {

	/**
	* My awesome class that does funky things.
	* @class AwesomeClass
	* @constructor
	* @chainable
	**/
	t.AwesomeClass = function() {
		var self = {};

		/**
		* My awesome property. Stick to a code standard - under_score or camelCase!
		* @property awesomeProperty
		* @type = {String}
		* @default "" 
		**/
		self.awesomeProperty = "";

		/**
		* My awesome private property. Closures! Your object has scope on this variable.
		* @property id
		* @type = {Number}
		* @default 0
		* @private
		*
		**/
		var id = 0;

		/**
		* "Constructor" of the class. Don't confuse with the at-constructor block
		* @method init
		* @param {String} awesome The initial value of our awesome property
		* @param {Number} id Our value id!
		**/
		self.init = function(awesome, id) {
			self.awesome = awesome;
			id = id;
			return self;
		}

		return self.init();
	}

	return t;
})(window.Template || {});