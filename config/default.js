module.exports = {
  port: 8081,
  hostname: '0.0.0.0',
  origin: ['http://localhost:8080'],
  session: {
    secret: 'myapi',
    key: 'myapi',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/myapi'
}
