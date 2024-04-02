// const express = require('express');
// module.exports = function (options = {}) {
//   const router = express.Router();
//   router.get('/greet', (req, res, next) => {
//     res.end(options.greeting);
//   });
//   return router;
// };
// or
const express = require('express');
module.exports = function (options = {}) {
  // Router factory
  const router = express.Router();
  // Get controller
  const { service } = options;
  router.get('/greet', (req, res, next) => {
    res.end(service.createGreeting(req.query.name || 'Stranger'));
  });
  return router;
};
