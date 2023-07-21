class UserDTO {
    constructor(user){
        this.first_name = user.first_name
        this.last_name  = user.apellido
        this.full_name  = `${user.first_name} ${user.apellido}`
        this.email      = user.email
        this.password   = user.password
    }
}

module.exports = {
    UserDTO
}