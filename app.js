var myLogModule = require('./utility/log.js');

//myLogModule.warning('Warning node not found..');

//export module
//var msg = require('./message.js');
//console.log(msg);

//export object
//var msg = require('./message.js');
//console.log(msg.SimpleMessage);

//log function
//var msg = require('./utility/log.js');
//msg.log('Hello Wolrd');

//var person = require('./data.js');
//console.log(person.firstName + ' ' + person.lastName);

//var msg = require('./utility/log.js');
//msg('Hello World');

//Export Function as Class
var person = require('./person.js');
var person1 = new person('James', 'Bond');
console.log(person1.fullName());

//Load Module from Separate Folder
var log = require('./utility/log.js');