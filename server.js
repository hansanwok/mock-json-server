const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const db = require('./db.json')
const useCustomRoutes = require('./routes')

server.use(middlewares)


// Add custom routes before JSON Server router
useCustomRoutes(server)


// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

router.render = (req, res) => {
  res.jsonp({
    success: ![404, 500, 402].includes(res.statusCode),
    result: res.locals.data
  })
}

server.use('/api/v1', router)

server.listen(3001, () => {
  console.log('JSON Server is running')
})

