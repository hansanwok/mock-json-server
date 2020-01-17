module.exports = (server) => {
  server.get('/api/v1/login', (req, res) => {
    res.jsonp({
      success: true,
      token: 'some auth token'
    })
  })
}

// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now()
//   }
//   // Continue to JSON Server router
//   next()
// })

// server.get('/cc', (req, res) => {
//   if (req.method === 'GET') {
//     let userId = req.body['userId'];
//     if (userId != null && userId >= 0) {
//       let result = db.users.find(user => {
//         return user.userId == userId;
//       })

//       if (result) {
//         let { id, ...user } = result;
//         res.status(200).jsonp(user);
//       } else {
//         res.status(400).jsonp({
//           error: "Bad userId"
//         });
//       }
//     } else {
//       res.status(400).jsonp({
//         error: "No valid userId"
//       });
//     }
//   }
// });
