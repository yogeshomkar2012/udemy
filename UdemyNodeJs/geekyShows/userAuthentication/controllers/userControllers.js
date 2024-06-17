import UserModel from '../models/user.js';
import bcrypt from 'bcrypt';
class UserController {
  static home = (req, res, next) => {
    res.render('index');
  };
  static registartion = (req, res, next) => {
    res.render('registration');
  };
  static creatingUserDoc = async (req, res) => {
    const hashPassword = await bcrypt.hashSync(req.body.password, 10);
    try {
      const { name, email, password } = req.body;
      const doc = new UserModel({
        name: name,
        email: email,
        password: hashPassword,
      });
      const result = await doc.save();

      res.redirect('/login');
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  static login = (req, res, next) => {
    res.render('login');
  };
  static verifyLogin = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const result = await UserModel.findOne({ email: email });
      if (result != null) {
        const isMatch = await bcrypt.compareSync(password, result.password);
        if (result.email == email && isMatch) {
          res.send(`<h1>Dash board</h1>`);
        } else {
          res.send(`<h1>Email or password is not Valid</h1>`);
        }
      } else {
        res.send(`<h1>You are Not Registered user</h1>`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  static logout = (req, res, next) => {
    res.render('logout');
  };
  static dashboard = (req, res, next) => {
    res.render('dashboard');
  };
}

export default UserController;
