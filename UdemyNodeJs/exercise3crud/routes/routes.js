const express = require('express');
const router = express.Router();
const User = require('../models/users');
const multer = require('multer');
//image upload
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, '/uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '_' + file.originalname;
    cb(null, file.fieldname + '_' + uniqueSuffix);
  },
});

const upload = multer({ storage: storage }).single('image');

router.get('/add', (req, res, next) => {
  res.render('add_user', {
    pageTitle: 'add Users',
  });
});
router.post('/add', (req, res, next) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    image: req.body.filename,
  });
  user
    .save()
    .then(function (err) {
      if (err) {
        res.json({ message: err.message, type: 'danger' });
      } else {
        req.session.message = {
          type: 'success',
          message: 'user added successfully',
        };
      }
    })
    .catch();
});
router.get('/', (req, res, next) => {
  res.render('index', {
    pageTitle: 'home page',
  });
});
module.exports = router;
