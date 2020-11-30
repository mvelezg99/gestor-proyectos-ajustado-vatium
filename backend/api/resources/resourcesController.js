const qUtils = require('../utils/queriesUtils')

async function getResources(req, res) {
    const query = 'SELECT resources.id AS id, resources.name AS name, roles.name AS role FROM resources INNER JOIN roles ON roles.id = resources.role'
    qUtils.queryValidation(req, res, query)
}

async function insertResource(req, res) {
    let resource = req.body
    const query = {
        text: 'INSERT INTO resources(name, role) VALUES ($1, $2)',
        values: [resource.name, resource.role]
    }
    qUtils.queryTokenValidation(req, res, query)
}

async function deleteResource(req, res) {
    let resourceID = req.params.id
    const query = {
        text: 'DELETE FROM resources WHERE id = $1',
        values: [resourceID]
    }
    qUtils.queryTokenValidation(req, res, query)

}

const controller = { getResources, insertResource, deleteResource }

module.exports = controller