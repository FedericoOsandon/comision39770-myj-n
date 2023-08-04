const { EErrors } = require("../../utils/error/enums");

exports.errorMiddleware = (error, req, res, next) => {
    console.log(error.cause)
    switch (error.code) {
        case EErrors.INVALID_TYPE_ERROR:
                return res.send({status: 'error', error: error.name})
            break;
        case EErrors.DATABASE_ERROR:
                return res.send({status: 'error', error: error.name})
            break;
        case EErrors.ROUTING_ERROR:
                return res.send({status: 'error', error: error.name})
            break;
    
        default:
            res.send({stauts: 'error', error: 'Unhabled Error'})
            break;
    }
}