const express = require('express');
const router = express.Router();

router.get('/all', (req, res, next) => {
  res.send('all teacher');
});
router.post('/create', (req, res, next) => {
  res.send('new teacher created');
});
router.put('/update', (req, res, next) => {
  res.send('teacher updated');
});
router.delete('/delete', (req, res, next) => {
  res.send('teacher deleted');
});

module.exports = router;
