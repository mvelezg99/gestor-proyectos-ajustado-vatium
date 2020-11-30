const crypto = require('crypto')
const pool = require('../../database/config')
const tokenAuth = require('../utils/tokenAuth')

async function isValidUser(req, res) {
  try {
    const user = req.body
    const password = crypto
      .createHmac('SHA256', user.password)
      .digest('HEX')
      .toString()

    const query = {
      text: 'SELECT COUNT(1) FROM users WHERE name = $1 AND password = $2',
      values: [user.user, password],
    }

    await pool.query(query, (error, result) => {
      if (!error) {
        if (result.rows[0].count == 1) {
          let sessionUser = {
            user: user.user,
            type: 'admin',
          }
          tokenAuth.generateUserToken(res, sessionUser)
        } else {
          res.status(401).send({
            success: false,
            message: 'Unauthorized',
          })
        }
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
      error: error
    })
  }
}

const controller = { isValidUser }

module.exports = controller
