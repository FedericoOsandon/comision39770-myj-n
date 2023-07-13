let usersDao
let toysDao

switch (condition) {
    case 'memory':
           usersDao= require('./usersDaoMemory.js') 
           toysDao= require('./toysDaoMemory.js') 
        break;
    case 'mongo':
        
        break;
    case 'archivo':
        
        break;

    default:
        break;
}

module.exports = {
    usersDao,
    toysDao
}