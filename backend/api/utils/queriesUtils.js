const pool = require('../../database/config')
const tokenAuth = require('../utils/tokenAuth')

async function queryValidation(req, res, query) {
  try {
    await pool.query(query, (error, result) => {
      if (!error) {
        res.status(200).send({
          success: true,
          message: 'Query Succesful!',
          data: result.rows,
        })
      } else {
        res.status(400).send({
          success: false,
          message: 'Bad request',
          error: error.stack,
        })
      }
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Server error',
      error: error,
    })
  }
}

async function queryTokenValidation(req, res, query) {
  const tokenValidation = tokenAuth.validateToken(req, res)
  try {
    if (tokenValidation.success) {
    await pool.query(query, (error, result) => {
      if (!error) {
        res.status(200).send({
          success: true,
          message: 'Query Succesful!',
          data: result.rows,
        })
      } else {
        res.status(400).send({
          success: false,
          message: 'Bad request',
          error: error.stack,
        })
      }
    })
  } else {
    res.status(401).send({
      success: false,
      message: 'Unauthorized',
    })
  }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Server error',
      error: error,
    })
  }
}

queriesUtils = { queryValidation, queryTokenValidation }

module.exports = queriesUtils
