const express = require('express');

const StudentController = require('../controllers/studentController');

const router = express.Router();

router.get('/getsessioninfo', StudentController.get_session_info);

router.get('/all', (req, res, next) => {
  res.send('all students');
});

router.post('/create', (req, res, next) => {
  res.send('new student created');
});

router.put('/update', (req, res, next) => {
  res.send('student updated');
});

router.delete('/delete', (req, res, next) => {
  res.send('student deleted');
});

module.exports = router;
