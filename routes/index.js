module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/words')
  })
  app.use('/words', require('./words'))
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.status(404)
    }
  })
}
