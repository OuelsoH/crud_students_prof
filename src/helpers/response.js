

exports.success = (status, message, data) => {
    return{ meta: {status, message}, data};
    // return{ meta: {status:status, message:message}, data:data}; version longue de la ligne du haut


}

exports.error = (status, message, error) => {
    return{ meta: {status, message}, error};
}