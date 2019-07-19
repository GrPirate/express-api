const express = require('express')
const router = express.Router()
const WordModel = require('../models/words')
const bodyParser = require('body-parser')
const chalk = require('chalk')

router.get('/', function (req, res, next) {
  const name = req.query.name

  WordModel.getWords(name)
    .then(function (words) {
      res.json(words)
    })
})

router.post('/update', bodyParser.json(), function (req, res, next) {
  console.log(chalk.green(`req: ${req.body.name}`))
  const name = req.body.name || 'default'
  const total = req.body.total || 0
  const params = req.body.params || 0
  // const name = req.params.name
  WordModel.findWord(name)
    .then(re => {
      if (re) {
        return WordModel.updateWord(name, total, params)
      } else {
        return WordModel.create({ name })
      }
    })
    .then(re => {
      res.json({ msg: 'success' })
    })
    .catch(err => {
      res.json(err)
    })
})

module.exports = router
