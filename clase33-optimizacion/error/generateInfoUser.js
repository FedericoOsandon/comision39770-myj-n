exports.generateUserErrorsInfo = (user) => {
    // console.log()
    return `One or momre properties were incomplete or no valid.
    List of require properties:
    *first_name: nedd to be String, recived ${user.first_name}
    *last_name: nedd to be String, recived ${user.last_name}
    *email: nedd to be String, recived ${user.email}.`
}