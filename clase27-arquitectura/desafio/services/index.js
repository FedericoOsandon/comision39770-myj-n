const ToysDaoMemory =  require('../persistence/toysDaoMemory')
const UsersDaoMemory = require('../persistence/usersDaoMemory')

const toysService = new ToysDaoMemory()
const usersService = new UsersDaoMemory()