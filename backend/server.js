const { resolve } = require('path')

require('dotenv').config({ path: resolve(`${__dirname}/private/.env`) })

const app = require('./app')

const port = process.env.PORT

app.listen(port, () => console.log(`API running on http://localhost:${port}/api/v1/`))
