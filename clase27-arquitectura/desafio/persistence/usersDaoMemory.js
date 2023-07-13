
let users = []
let nextId = 1
// DAo = Data Access Object
class UsersDaoMemory { //UserManager.js
    
    getAllUsers = () => {
        return users
    }
    
    createUser = (user) => {
        const newUser = { id: nextId, ...user }
        users.push(newUser)
        nextId++
        return newUser
    }
}

module.exports = UsersDaoMemory