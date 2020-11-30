const queryValidation = require('../utils/queriesUtils').queryValidation

async function getRoles(req, res) {
    const query = 'SELECT * FROM roles'
    queryValidation(req, res, query)
}

const controller = { getRoles }

module.exports = controller