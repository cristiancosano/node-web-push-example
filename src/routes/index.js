const apiRouter = require('./apiRouter')
const viewRouter = require('./viewRouter')
module.exports = (app) => {
    app.use('/', viewRouter)
    app.use('/api', apiRouter)
}